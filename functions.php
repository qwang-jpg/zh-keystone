<?php
/**
 * Keystone Strategies theme bootstrap.
 * Loads the Vite-built React app (dist/) and lets React Router own all
 * front-end routing. WordPress itself never renders page templates.
 */

if (!defined('ABSPATH')) {
	exit;
}

define('KEYSTONE_DIST_DIR', get_template_directory() . '/dist');
define('KEYSTONE_DIST_URI', get_template_directory_uri() . '/dist');

/**
 * Reads Vite's build manifest (dist/.vite/manifest.json, or the legacy
 * dist/manifest.json path for older Vite versions) and enqueues the
 * hashed JS/CSS files it points to for the configured entry.
 */
function keystone_enqueue_vite_assets()
{
	$manifest_path = KEYSTONE_DIST_DIR . '/.vite/manifest.json';
	if (!file_exists($manifest_path)) {
		$manifest_path = KEYSTONE_DIST_DIR . '/manifest.json';
	}

	if (!file_exists($manifest_path)) {
		return;
	}

	$manifest = json_decode(file_get_contents($manifest_path), true);
	if (!is_array($manifest) || !isset($manifest['index.html'])) {
		return;
	}

	$entry = $manifest['index.html'];

	if (!empty($entry['css'])) {
		foreach ($entry['css'] as $i => $css_file) {
			wp_enqueue_style(
				'keystone-app-style-' . $i,
				KEYSTONE_DIST_URI . '/' . $css_file,
				[],
				null
			);
		}
	}

	if (!empty($entry['file'])) {
		wp_enqueue_script(
			'keystone-app-script',
			KEYSTONE_DIST_URI . '/' . $entry['file'],
			[],
			null,
			true
		);
	}
}
add_action('wp_enqueue_scripts', 'keystone_enqueue_vite_assets');

/**
 * index.php never prints a favicon tag itself (it only calls wp_head()),
 * so it has to be added here, built from the theme's own dist/ URI rather
 * than an absolute "/Icon.png" — the theme is never served from the site's
 * domain root.
 */
function keystone_output_favicon()
{
	echo '<link rel="icon" type="image/png" href="' . esc_url(KEYSTONE_DIST_URI . '/Icon.png') . '" />' . "\n";
}
add_action('wp_head', 'keystone_output_favicon');

/**
 * Vite's output is an ES module; mark the enqueued script accordingly.
 */
function keystone_add_module_type($tag, $handle)
{
	if ('keystone-app-script' === $handle) {
		$tag = str_replace(' src', ' type="module" src', $tag);
	}
	return $tag;
}
add_filter('script_loader_tag', 'keystone_add_module_type', 10, 2);

/**
 * Route manifest written by the Vite build (see routeManifestPlugin in
 * vite.config.js): every path the React app renders, plus legacy slugs
 * that permanently moved. Returns null if the build output is missing.
 */
function keystone_route_manifest()
{
	static $manifest = false;
	if (false === $manifest) {
		$path = KEYSTONE_DIST_DIR . '/routes.json';
		$data = file_exists($path) ? json_decode(file_get_contents($path), true) : null;
		$manifest = (is_array($data) && isset($data['routes'], $data['redirects'])) ? $data : null;
	}
	return $manifest;
}

/**
 * The request path relative to the site's home URL, without a trailing
 * slash ("/" for the front page), to match the paths in routes.json.
 */
function keystone_request_path()
{
	$path = wp_parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH);
	$path = is_string($path) ? rawurldecode($path) : '/';
	$home = wp_parse_url(home_url('/'), PHP_URL_PATH);
	$home = is_string($home) ? rtrim($home, '/') : '';
	if ('' !== $home && 0 === strpos($path, $home)) {
		$path = substr($path, strlen($home));
	}
	return '/' . trim($path, '/');
}

/**
 * React Router owns front-end routing, so WordPress has no record of the
 * app's URLs. Runs before WordPress's own canonical redirects and:
 * - serves the build's sitemap.xml at the site root;
 * - answers legacy slugs with a real 301 (the client-side <Navigate> in
 *   routes.js is only a fallback for crawlers that never see this);
 * - returns 200 for app routes and a real 404 for anything else, so the
 *   React "Page not found" screen isn't indexed as a live page.
 */
function keystone_handle_app_routes()
{
	if (is_admin() || (defined('REST_REQUEST') && REST_REQUEST) || wp_doing_ajax() || is_feed() || is_robots()) {
		return;
	}

	$manifest = keystone_route_manifest();
	if (null === $manifest) {
		// No build output to check against: keep every URL rendering the app.
		status_header(200);
		return;
	}

	$path = keystone_request_path();

	if ('/sitemap.xml' === $path && file_exists(KEYSTONE_DIST_DIR . '/sitemap.xml')) {
		status_header(200);
		header('Content-Type: application/xml; charset=UTF-8');
		readfile(KEYSTONE_DIST_DIR . '/sitemap.xml');
		exit;
	}

	if (isset($manifest['redirects'][$path])) {
		wp_safe_redirect(home_url($manifest['redirects'][$path]), 301);
		exit;
	}

	if (in_array($path, $manifest['routes'], true)) {
		status_header(200);
	} elseif (is_404()) {
		// Still renders index.php (the app), which shows its own 404 page.
		status_header(404);
	}
}
add_action('template_redirect', 'keystone_handle_app_routes', 0);

/**
 * WordPress's built-in sitemap only lists WP posts/pages, none of which
 * exist for this theme; the build's sitemap.xml (served above) replaces it.
 */
add_filter('wp_sitemaps_enabled', '__return_false');

/**
 * public/robots.txt would only be copied into the theme's dist/ folder,
 * never served from the domain root, so point crawlers at the sitemap from
 * WordPress's own (virtual) robots.txt instead.
 */
function keystone_robots_txt($output, $public)
{
	if ($public) {
		$output .= "\nSitemap: " . esc_url_raw(home_url('/sitemap.xml')) . "\n";
	}
	return $output;
}
add_filter('robots_txt', 'keystone_robots_txt', 10, 2);

/**
 * Basic theme supports.
 */
function keystone_theme_setup()
{
	add_theme_support('title-tag');
}
add_action('after_setup_theme', 'keystone_theme_setup');

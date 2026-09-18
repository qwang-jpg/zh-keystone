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
 * React Router owns front-end routing, so a URL WordPress doesn't
 * recognize (e.g. /about-us if no matching Page exists) must still
 * render the app with an HTTP 200, not WordPress's default 404.
 */
function keystone_force_200_for_app_routes()
{
	if (is_admin() || (defined('REST_REQUEST') && REST_REQUEST) || wp_doing_ajax()) {
		return;
	}
	status_header(200);
}
add_action('template_redirect', 'keystone_force_200_for_app_routes');

/**
 * Basic theme supports.
 */
function keystone_theme_setup()
{
	add_theme_support('title-tag');
	add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'keystone_theme_setup');

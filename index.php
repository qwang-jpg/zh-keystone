<?php
/**
 * Sole template for the theme. WordPress only provides the document
 * shell and enqueued assets (see functions.php); React Router renders
 * every route client-side into #root.
 */
if (!defined('ABSPATH')) {
	exit;
}
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo('charset'); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
	<div id="root"></div>
	<?php wp_footer(); ?>
</body>
</html>

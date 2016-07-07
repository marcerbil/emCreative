<?php
/**
 * Creative Works page
 *
 * @package WordPress
 * @subpackage emCreative
 */

get_header(); ?>

<div id="primary" class="content-area">
	<main id="main" class="site-main" role="main">
		<?php
			get_template_part( 'template-parts/content', 'creativeworks' );
		?>
	</main><!-- .site-main -->
</div><!-- .content-area -->

<?php get_footer(); ?>

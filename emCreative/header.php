<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "site-content" div.
 *
 * @package WordPress
 * @subpackage emCreative
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<?php if ( is_singular() && pings_open( get_queried_object() ) ) : ?>
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<?php endif; ?>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="<?php get_template_directory()?>/wp-content/themes/emCreative/vendor/bootstrap-3.3.6-dist/css/bootstrap.min.css">

    <!-- FullPage.js -->
    <link rel="stylesheet" href="<?php get_template_directory()?>/wp-content/themes/emCreative/vendor/fullpage/jquery.fullpage.min.css">

    <!-- FontAwesome -->
    <link rel="stylesheet" href="<?php get_template_directory()?>/wp-content/themes/emCreative/vendor/font-awesome-4.6.3/css/font-awesome.min.css">

	<?php wp_head(); ?>
</head>

<header>
    <nav id="navley" class="navbar navbar-default navbar-fixed-top navley js__navley-stuff">

        <div class="navley__desktop navley__desktop--stuff">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="<?php bloginfo('url')?>" alt="">
                        <img alt="emCreative" src="<?php get_template_directory()?>/wp-content/themes/emCreative/img/logo.svg" class="navley__logo">
                    </a>
                </div>
                <ul class="navley__list animated-slower fadeIn">
                    <a href="<?php bloginfo('url')?>/stuff/" alt="" class="navley__list-anchor">
                        <li class="navley__list-item" id="stuffNavItem">stuff</li>
                    </a>
                    <a href="<?php bloginfo('url')?>/blog/" alt="" class="navley__list-anchor">
                        <li class="navley__list-item" id="blogNavItem">blog</li>
                    </a>
                </ul>
            </div>
        </div><!-- /.navley__desktop -->

        <div class="navley__burger navley__burger--stuff animated-slower fadeIn">
            <svg id="navlingtonOpenClose" height="23px" width="37px">
                <line id="burgerBarOne" x1="10" y1="21" x2="35" y2="21" style="stroke:rgb(0,0,0);stroke-width: 2px;" class="eased js__burger--stuff"></line>
                <line id="burgerBarTwo" x1="10" y1="11" x2="35" y2="11" style="stroke:rgb(0,0,0);stroke-width: 2px;" class="eased js__burger--stuff"></line>
                <line id="burgerBarThree" x1="10" y1="2" x2="35" y2="2" style="stroke:rgb(0,0,0);stroke-width: 2px;" class="eased js__burger--stuff"></line>
            </svg>
            <span class="sr-only">MENU</span>
        </div>

        <img id="logoMobile" alt="emCreative" src="<?php get_template_directory()?>/wp-content/themes/emCreative/img/logo.svg" class="navlington__logo navlington__logo--stuff">

        <div id="navlington" class="navlington js__hide">
            <ul class="navlington__list">
                <a href="<?php bloginfo('url')?>/stuff/" alt="" class="navlington__list-anchor">
                    <li id="stuffNavlingtonItem"class="navlington__list-item">stuff</li>
                </a>
                <a href="<?php bloginfo('url')?>/blog/" alt="" class="navlington__list-anchor">
                    <li id="blogNavlingtonItem"class="navlington__list-item">blog</li>
                </a>
            </ul>
            <div id="navlingtonOverlay" class="js__navlington-overlay--stuff js__navlington-closed"></div>

        </div> <!-- /.navlington -->

    </nav>
</header>

<body <?php body_class(); ?>>

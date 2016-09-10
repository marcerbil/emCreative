<?php
/**
 * Home
 *
 * @package WordPress
 * @subpackage emCreative
 */

get_header(); ?>

    <div id="homePage" class="animated fadeIn">
        <section class="hero">
            <div class="hero__inner">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div class="hero__masthead animated-slowest fadeIn ">
                                <hgroup class="hero__masthead-hgroup">
                                    <h1 class="hero__masthead-title">Design.</h1>
                                    <h1 class="hero__masthead-title">Development.</h1>
                                    <br />
                                    <h1 class="hero__masthead-title">Illustration.</h1>
                                </hgroup>
                                <p class="hero__masthead-intro">
                                    I'm a multi-disciplinary creative - and this is <br />the home of my imagination.
                                </p>
                                <hr class="hero__masthead-hr">
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 hidden-sm hidden-xs">
                            <div class="hero__worksample">
                                <img src="http://placehold.it/300x300" alt="" class="hero__worksample-img" />
                            </div>
                        </div>
                    </div> <!-- /.row -->
                </div> <!-- /.container -->
                <div class="hero__thing" id="heroThing">
                    <img src="<?php get_template_directory_uri(); ?>/wp-content/themes/emCreative/img/hero-thing.svg" alt="" class="hero__thing-thing" id="heroThingThing" />
                    <img src="<?php get_template_directory_uri(); ?>/wp-content/themes/emCreative/img/hero-key.svg" alt="" class="hero__thing-key" id="heroThingKey" />
                </div>
            </div>
        </section>

        <section class="mainfeature" id="mainFeature">
            <div class="mainfeature__inner" id="mainfeatureInner">
                <div class="mainfeature__content animated-slower" id="mainfeatureContent">

                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div class="mainfeature__carousel">
                                    <div id="featuredCarousel" class="carousel slide" data-ride="carousel" data-interval="false">
                                      <div class="carousel-inner" role="listbox">
                                        <div class="mainfeature__carousel-item animated-slower fadeIn item active">
                                          <img src="http://placehold.it/300x300">
                                        </div>
                                        <div class="mainfeature__carousel-item animated-slower fadeIn item">
                                            <img src="http://placehold.it/300x300">
                                        </div>
                                      </div>
                                      <ol class="carousel-indicators mainfeature__carousel-pagination">
                                        <li data-target="#featuredCarousel" data-slide-to="0" class="mainfeature__carousel-paginator active"></li>
                                        <li data-target="#featuredCarousel" data-slide-to="1" class="mainfeature__carousel-paginator"></li>
                                      </ol>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div class="mainfeature__copy">
                                    <h4 class="mainfeature__copy-title">A bit of $this and a bit of &lt;that&gt;</h4>
                                    <p class="mainfeature__copy-text">
                                        I'm Marc, a London-bred creative. Vertical integration upsell and drop-dead date value prop. Organic growth organic growth player-coach. Gain traction hit the ground running, and we need a paradigm shift. Window-licker hit the ground running, nor on your plate can we align on lunch orders.
                                    </p>
                                </div>
                                <img src="<?php get_template_directory_uri(); ?>/wp-content/themes/emCreative/img/behance.png" alt="" class="mainfeature__copy-icon" />
                            </div>

                        </div>
                    </div>

                    <img src="<?php get_template_directory_uri(); ?>/wp-content/themes/emCreative/img/squiggly-squiggle.svg" alt="" class="mainfeature__squiggly-squiggle" />

                </div>
            </div>
        </section>
    </div>

<?php get_footer(); ?>

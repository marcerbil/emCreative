<?php
/**
 * The template part for displaying single posts
 *
 * @package WordPress
 * @subpackage emCreative
 */
?>

<div id="stuffItemPage" class="animated fadeIn">
    <div class="stuff__masthead">
        <div class="row">
            <div class="col-lg-push-3 col-lg-6">
                <h5 class="stuff__item-post-title">
                    <?php the_title();?>
                </h5>
            </div>
        </div>
        <div class="stuff__hero-overlay"></div>
        <?php
            if ( has_post_thumbnail() ) {
                the_post_thumbnail();
            }
        ?>
    </div>
    <div class="stuff__content">
        <div class="container">
            <div class="row">
                <div class="col-lg-push-3 col-lg-6">
                    <div class="stuff__content-text">
                        <?php the_content(); ?>
                    </div>
                </div>
            </div>
        </div>
    </div> <!-- /.stuff__content -->
</div> <!-- /#stuffItem -->

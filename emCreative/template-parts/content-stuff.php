<?php
/**
 * Stuff content template
 *
 * @package WordPress
 * @subpackage emCreative
 *
 */
?>

<div id="stuffPage" class="stuff animated fadeIn">
    <div class="container-fluid">
        <div class="row">

            <!-- __LHS__ -->
            <!-- Featured post / image -->
            <div class="col-lg-6 stuff__left-side">
                <div class="stuff__featured-image-container">
                    <a href="#">
                        <img id="featuredPost" class="stuff__featured-image" src="<?php get_template_directory_uri(); ?>/wp-content/themes/emCreative/img/featured-image.jpg" alt="Featured Post">
                    </a>
                </div>
            </div> <!-- ./col-lg-6 -->

            <!-- __RHS__ -->
            <!-- Post list -->
            <div class="col-lg-6 stuff__right-side">
                <div id="fullpage">
                    <?php
                        $args = array(
                            'post_type'   => 'stuff',
                            'numberposts' => 50
                        );
                        $posts_list = get_posts( $args );
                        if ( $posts_list ) {
                            foreach ($posts_list as $post) :
                                setup_postdata( $post );
                                $terms = get_the_terms( $post->ID, 'stuff' );
                                $post_attachments = wp_get_attachment_image( $post->ID );
                    ?>
                    <?php
                        function changeImage( $current_post ) {
                            // TODO: Get the image for the current post
                            //       and use it in an AJAX function to change
                            //       the featuredImage
                        }
                    ?>

                    <!-- Post listing -->
                    <a class="section stuff__post-listing-anchor" href="<?php the_permalink(); ?>">
                        <div class="stuff__post-listing">
                            <h3 id="postTitle" class="stuff__post-title">
                                <?php the_title(); ?>
                                <p class="stuff__post-category">
                                    <?php
                                        if ( $terms ) {
                                            foreach( $terms as $term ) {
                                              echo $term->name;
                                            }
                                        }
                                    ?>
                                </p>
                            </h3>
                            <p class="stuff__post-description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <img src="<?php get_template_directory_uri(); ?>/wp-content/themes/emCreative/img/down-arrow.png" class="stuff__post-arrow" alt="Down arrow - scroll down" />
                        </div>
                    </a>
                    <!-- END: Post listing -->

                    <?php
                            endforeach;
                            wp_reset_postdata();
                        }
                    ?>

                    <!-- Filter -->
                    <!-- <div class="stuff__filter-container">
                        <ul class="stuff__filter-list">
                            <li data-toggle="tooltip" data-placement="left" title="Dev" class="stuff__filter-list-item">
                                <i class="fa fa-code"></i>
                            </li>
                            <li data-toggle="tooltip" data-placement="left" title="Design" class="stuff__filter-list-item">
                                <i class="fa fa-eye"></i>
                            </li>
                            <li data-toggle="tooltip" data-placement="left" title="Art" class="stuff__filter-list-item">
                                <i class="fa fa-paint-brush"></i>
                            </li>
                            <li data-toggle="tooltip" data-placement="left" title="Writing" class="stuff__filter-list-item">
                                <i class="fa fa-align-left"></i>
                            </li>
                            <li data-toggle="tooltip" data-placement="left" title="Animation" class="stuff__filter-list-item">
                                <i class="fa fa-caret-square-o-right"></i>
                            </li>
                        </ul>
                    </div> -->

                </div> <!-- #/fullpage -->
            </div> <!-- ./col-lg-6 -->

        </div> <!-- ./row -->
    </div> <!-- /.container-fluid -->
</div> <!-- /.stuff -->

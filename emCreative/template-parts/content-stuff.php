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
    <div class="stuff__inner">
        <div class="stuff__masthead">
            <h1 class="stuff__masthead-title">Some stuff I have done</h1>
            <hr class="stuff__masthead-hr" />
        </div>
        <div class="stuff__feed">
            <div class="container-fluid">
                <div class="row">

                    <?php $args = array(
                                'post_type'        => 'stuff',
                                'orderby'          => 'date',
                                'order'            => 'DESC',
                                'posts_per_page'   => 12
                            );
                        $stuff_array = get_posts( $args );
                        $counter = 0;

                        function charLimiterWithEllipse( $title ) {
                            $stripped_title = substr( $title, 0, 24 );
                            $formatted_title = $stripped_title . "...";
                            return $formatted_title;
                        }

                        foreach ($stuff_array as $thing) {
                            // Save thumbnail
                            $thing_id = $thing->ID;
                            $thing_thumbnail = get_the_post_thumbnail( $thing_id, 'small' );

                            // Save title
                            $title = $thing->post_title;
                            if ( strlen( $title ) > 24 ) {
                                $title = charLimiterWithEllipse( $title );
                            }

                            // Save date
                            $thing_date = $thing->post_date_gmt;
                            $date = new DateTime($thing_date);
                            $date_formatted = $date->format('d.m.y');

                            // Save permalink
                            $thing_permalink = get_permalink( $thing_id );

                            // If grid item is at end of row, create
                            //  a new row, otherwise output grid item
                            if ( $counter % 3 === 0 & $counter !== 12 & $counter !== 0 ) {
                                $thing_block = <<<EOT
    <div class="col-lg-4">
        <div class="stuff__item">
            <div class="stuff__item-content">
                <a href="$thing_permalink" alt="" class="stuff__item-anchor">
                    <div class="stuff__item-header">
                        <h4 class="stuff__item-title">$title</h4>
                    </div>
                    <p class="stuff__item-date">$date_formatted</p>
                </a>
            </div>
        </div> <!--/.stuff__item -->
    </div> <!--/.col-lg-4 -->
</div> <!-- /.row -->
<div class="row">
EOT;
                            } elseif ( $counter === 12 ) {
                                $thing_block = <<<EOT
    <div class="col-lg-4">
        <div class="stuff__item">
            <div class="stuff__item-content">
                <a href="$thing_permalink" alt="" class="stuff__item-anchor">
                    <div class="stuff__item-header">
                        <h4 class="stuff__item-title">$title</h4>
                    </div>
                    <p class="stuff__item-date">$date_formatted</p>
                </a>
            </div>
        </div> <!--/.stuff__item -->
    </div> <!--/.col-lg-4 -->
</div> <!-- /.row -->
EOT;
                            } elseif ( $counter % 3 !== 0 & $counter !== 12 ) {
                                $thing_block = <<<EOT
    <div class="col-lg-4">
        <div class="stuff__item">
            <div class="stuff__item-content">
                <a href="$thing_permalink" alt="" class="stuff__item-anchor">
                    <div class="stuff__item-header">
                        <h4 class="stuff__item-title">$title</h4>
                    </div>
                    <p class="stuff__item-date">$date_formatted</p>
                </a>
            </div> <!-- /.stuff__item-content -->
        </div> <!--/.stuff__item -->
    </div> <!--/.col-lg-4 -->
EOT;
                            }
                                echo $thing_block;
                                $counter++;
                        }

                        wp_reset_postdata();
                    ?>

                </div> <!-- /.row -->
            </div> <!-- /.container-fluid -->
        </div> <!-- /.stuff__ -->
    </div> <!-- /.stuff__inner -->
</div> <!-- /.stuff -->

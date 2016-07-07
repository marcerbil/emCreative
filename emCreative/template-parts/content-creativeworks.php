<?php
/**
 * Creative works content template
 *
 * @package WordPress
 * @subpackage emCreative
 *
 */
?>

<div id="creativeworksPage" class="creativeworks global-margin animated fadeIn">
    <div class="container-fluid">
        <!-- Spinner -->
        <div class="col-lg-4">
            <div class="spinner__container">
                <div class="spinner">
                    <ul class="spinner__list">
                        <li class="spinner__list-item">All</li>
                        <li class="spinner__list-item">Development</li>
                        <li class="spinner__list-item">Design</li>
                        <li class="spinner__list-item">Other</li>
                    </ul>
                </div>
            </div>

            <div class="separator">
                <img src="<?php get_template_directory_uri(); ?>/wp-content/themes/emCreative/img/separator.svg" alt="" class="separator__img" />
            </div>

        </div>

        <!-- Creative works -->
        <div class="col-lg-8">
            <h4 class="splitscreen__title">Projects</h4>
            <section class="splitscreen animated fadeIn">
                <ul class="splitscreen__list">
                    <a href="#" class="splitscreen__list-item-anchor">
                        <li class="splitscreen__list-item js__splitscreenListItem">
                            <img src="http://placehold.it/64x64" alt="" class="splitscreen__list-item-img" />
                            <div class="splitscreen__list-item-text">
                                Quick Formations
                            </div>
                        </li>
                    </a>
                    <a href="#" class="splitscreen__list-item-anchor">
                        <li class="splitscreen__list-item js__splitscreenListItem">
                            <img src="http://placehold.it/64x64" alt="" class="splitscreen__list-item-img" />
                            <div class="splitscreen__list-item-text">
                                emCreative
                            </div>
                        </li>
                    </a>
                    <a href="#" class="splitscreen__list-item-anchor">
                        <li class="splitscreen__list-item js__splitscreenListItem">
                            <img src="http://placehold.it/64x64" alt="" class="splitscreen__list-item-img" />
                            <div class="splitscreen__list-item-text">
                                weareloft
                            </div>
                        </li>
                    </a>
                    <a href="#" class="splitscreen__list-item-anchor">
                        <li class="splitscreen__list-item js__splitscreenListItem">
                            <img src="http://placehold.it/64x64" alt="" class="splitscreen__list-item-img" />
                            <div class="splitscreen__list-item-text">
                                Business Traveller
                            </div>
                        </li>
                    </a>
                    <a href="#" class="splitscreen__list-item-anchor">
                        <li class="splitscreen__list-item js__splitscreenListItem">
                            <img src="http://placehold.it/64x64" alt="" class="splitscreen__list-item-img" />
                            <div class="splitscreen__list-item-text">
                                Olam
                            </div>
                        </li>
                    </a>
                    <a href="#" class="splitscreen__list-item-anchor">
                        <li class="splitscreen__list-item js__splitscreenListItem">
                            <img src="http://placehold.it/64x64" alt="" class="splitscreen__list-item-img" />
                            <div class="splitscreen__list-item-text">
                                MD Marketing
                            </div>
                        </li>
                    </a>
                </ul>
                <img src="<?php get_template_directory_uri(); ?>/wp-content/themes/emCreative/img/blurrer.svg" alt="" class="splitscreen__blurrer" />
            </section>
        </div>
    </div>
</div>

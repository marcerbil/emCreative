/*
emCreative JavaScript

Author: Marc Erbil
Version: 0.0.1
*/


/**
 * Table of Contents
 *
 * - Objects
 * - Globals
 * - Navley
 * - Pagely
 * - Helpers
 * - Main
 */


// Globals
// =======



// Navbar JS
// ============

var Navley = {

    init: function() {
        console.log("Navley loaded");

        var homePage = document.getElementById( "homePage" );
        var navley = document.getElementById( "navley" );

        if ( homePage != null ) {
            window.addEventListener( "scroll", function() {
                if( window.scrollY != 0 ) {
                    navley.classList.remove( "js__navley-home" );
                } else {
                    navley.classList.add( "js__navley-home" );
                }
            });
        }
    }
};

// Page dependent JS
// =================

var Pagely = {

    init: function() {
        console.log("Pagely loaded");
        var body = document.body,
            homePage = document.getElementById( "homePage" ),
            stuffPage = document.getElementById( "stuffPage" ),
            stuffItemPage = document.getElementById( "stuffItemPage" ),
            blogPage = document.getElementById( "blogPage" ),
            blogNavlingtonItem = document.getElementById( "blogNavlingtonItem" )
            stuffNavlingtonItem = document.getElementById( "stuffNavlingtonItem" );

        if ( homePage != null )  {
            body.classList.add( "js__hero-thing--noscroll" );
            navley.classList.remove( "js__navley-stuff" );
            document.getElementsByClassName( "navley__desktop" )[0].classList.remove( "navley__desktop--stuff" );
            document.getElementsByClassName( "navley__burger" )[0].classList.remove( "navley__burger--stuff" );
            document.getElementsByClassName( "navlington__logo" )[0].classList.remove( "navlington__logo--stuff" );
            navlingtonOverlay.classList.remove( "js__navlington-overlay--stuff" );
            navlingtonOverlay.classList.remove( "js__navlington-closed" );
            burgerBarOne.classList.add( "js__burger--stuff" );
            burgerBarTwo.classList.add( "js__burger--stuff" );
            burgerBarThree.classList.add( "js__burger--stuff" );
        }

        if ( stuffPage != null ) {
            stuffNavlingtonItem.classList.add( "js__navlington-active" );
            blogNavlingtonItem.classList.remove( "js__navlington-active" );

            jQuery( document ).ready(function() {
            	jQuery( "#fullpage" ).fullpage({
                    css3: true,
                    scrollingSpeed: 1000,
                    scrollBar: false,
                    easing: 'easeOutBack',
                    onLeave: function(){
                        console.log("next section - TODO: ajax load image on left");
                    }
                });
            });

            // if ($("#postTitle").length > 40) {
            //     // handle css of <hr> and category where titles wrap
            // }
        }

        if ( stuffItemPage != null ) {
            navley.classList.remove( "js__navley-stuffItem" );
            navley.classList.add( "js__navley-stuffItem" );
            stuffNavlingtonItem.classList.add( "js__navlington-active" );
            blogNavlingtonItem.classList.remove( "js__navlington-active" );
        }

        if ( blogPage != null ) {
            blogNavlingtonItem.classList.add( "js__navlington-active" );
            stuffNavlingtonItem.classList.remove( "js__navlington-active" );
        }

        jQuery(function() {
            jQuery('[data-toggle="tooltip"]').tooltip();
        });
    }
};


// Helpers
// =======


// Main
// ====

window.onload = function() {

    var $ = $ || jQuery;
    var body = document.body;
    var homePage = document.getElementById( "homePage" ),
        stuffPage = document.getElementById( "stuffPage" ),
        blogPage = document.getElementById( "blogPage" ),
        navley = document.getElementById( "navley" ),
        navlingtonOverlay = document.getElementById( "navlingtonOverlay" ),
        navlingtonOpenClose = document.getElementById( "navlingtonOpenClose" ),
        navlington = document.getElementById( "navlington" ),
        logoMobile = document.getElementById( "logoMobile" ),
        burgerBarOne = document.getElementById( "burgerBarOne" ),
        burgerBarTwo = document.getElementById( "burgerBarTwo" ),
        burgerBarThree = document.getElementById( "burgerBarThree" ),
        menuOpen = false,
        heroThing = document.getElementById( "heroThing" ),
        heroThingKey = document.getElementById( "heroThingKey" ),
        heroThingThing = document.getElementById( "heroThingThing" ),
        mainFeature = document.getElementById( "mainFeature" ),
        mainFeatureOpen = false,
        mainfeatureContent = document.getElementById( "mainfeatureContent" ),
        mainfeatureInner = document.getElementById( "mainfeatureInner" ),
        stuffFeedItems = document.querySelectorAll( ".stuff__item" );

    Navley.init();
    Pagely.init();

    // Navlington listener
    navlingtonOpenClose.addEventListener( "click", function() {
        if ( menuOpen != false ) {
            if ( stuffPage != null ) {
                burgerBarOne.classList.add( "js__burger--stuff" );
                burgerBarTwo.classList.add( "js__burger--stuff" );
                burgerBarThree.classList.add( "js__burger--stuff" );
                navley.classList.remove( "js__navley-stuff--open" );
                navlington.classList.remove( "navlington--stuff" );
            }
            navlington.classList.add( "js__hide" );
            navlingtonOverlay.classList.add( "js__navlington-closed" );

            burgerBarOne.setAttribute( "y1", "21" );
            burgerBarOne.classList.add( "js__burger-flip--out" );
            burgerBarOne.classList.remove( "js__burger-flip--in" );

            burgerBarTwo.classList.remove( "js__hide--long" );

            burgerBarThree.setAttribute( "y1", "2" );
            burgerBarThree.classList.add( "js__burger-flip--out" );
            burgerBarThree.classList.remove( "js__burger-flip--in" );

            menuOpen = false;
        } else {
            if ( stuffPage != null ) {
                burgerBarOne.classList.remove( "js__burger--stuff" );
                burgerBarTwo.classList.remove( "js__burger--stuff" );
                burgerBarThree.classList.remove( "js__burger--stuff" );
                navley.classList.add( "js__navley-stuff--open" );
                navlington.classList.add( "navlington--stuff" );
            }
            navlington.classList.remove( "js__hide" );
            navlingtonOverlay.classList.add( "js__navlington-open" );
            navlingtonOverlay.classList.remove( "js__navlington-closed" );

            burgerBarOne.setAttribute( "y1", "2" );
            burgerBarOne.classList.add( "js__burger-flip--in" );
            burgerBarOne.classList.remove( "js__burger-flip--out" );

            burgerBarTwo.classList.add( "js__hide--long" );

            burgerBarThree.setAttribute( "y1", "21" );
            burgerBarThree.classList.add( "js__burger-flip--in" );
            burgerBarThree.classList.remove( "js__burger-flip--out" );

            menuOpen = true;
        }
    });

    if ( heroThing != null ) {
        // Hero thing listener
        heroThing.addEventListener( "click", function() {
            if ( mainFeatureOpen != false ) {
                body.classList.add( "js__hero-thing--noscroll" );

                mainfeatureInner.classList.remove("js__mainfeatureInner--show");

                mainfeatureContent.classList.remove("js__mainfeatureContent--show");
                mainfeatureContent.classList.remove("fadeIn");

                heroThingThing.classList.add("js__hero-thing-thing--out");
                heroThingThing.classList.remove("js__hero-thing-thing--in");

                heroThingKey.classList.add("js__burger-flip--out");
                heroThingKey.classList.remove("js__burger-flip--in");

                mainFeatureOpen = false;

            } else {

                mainfeatureInner.classList.add("js__mainfeatureInner--show");

                mainfeatureContent.classList.add("js__mainfeatureContent--show");
                mainfeatureContent.classList.add("fadeIn");

                heroThingThing.classList.add("js__hero-thing-thing--in");
                heroThingThing.classList.remove("js__hero-thing-thing--out");

                heroThingKey.classList.add("js__burger-flip--in");
                heroThingKey.classList.remove("js__burger-flip--out");

                body.classList.remove( "js__hero-thing--noscroll" );

                setTimeout(function() {
                    // Scroll page to mainFeature
                    $( "body" ).animate({
                        scrollTop: $( "#mainFeature" ).offset().top
                    }, 2000);
                }, 2000);

                mainFeatureOpen = true;
            }
        });
    }
};

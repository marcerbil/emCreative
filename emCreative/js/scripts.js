/*
emCreative JavaScript

Author: Marc Erbil
Version: 0.0.1
*/


/**
 * Table of Contents
 *
 * - Navley
 * - Pagely
 * - Main
 */

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

        var body = document.body;
        var homePage = document.getElementById( "homePage" );
        var creativeworksPage = document.getElementById( "creativeworksPage" );
        var projectsPage = document.getElementById( "projectsPage" );
        var blogPage = document.getElementById( "blogPage" );

        if ( homePage != null )  {
            body.classList.add( "js__hero-thing--noscroll" );
        }

        if ( creativeworksPage != null ) {
            creativeworksNavItem.classList.add( "js__navley-active" );
            projectsNavItem.classList.remove( "js__navley-active" );
            blogNavItem.classList.remove( "js__navley-active" );
            creativeworksNavlingtonItem.classList.add( "js__navlington-active" );
            projectsNavlingtonItem.classList.remove( "js__navlington-active" );
            blogNavlingtonItem.classList.remove( "js__navlington-active" );
        }

        if ( projectsPage != null ) {
            projectsNavItem.classList.add( "js__navley-active" );
            blogNavItem.classList.remove( "js__navley-active" );
            creativeworksNavItem.classList.remove( "js__navley-active" );
            projectsNavlingtonItem.classList.add( "js__navlington-active" );
            blogNavlingtonItem.classList.remove( "js__navlington-active" );
            creativeworksNavlingtonItem.classList.remove( "js__navlington-active" );
        }

        if ( blogPage != null ) {
            blogNavItem.classList.add( "js__navley-active" );
            projectsNavItem.classList.remove( "js__navley-active" );
            creativeworksNavItem.classList.remove( "js__navley-active" );
            blogNavlingtonItem.classList.add( "js__navlington-active" );
            projectsNavlingtonItem.classList.remove( "js__navlington-active" );
            creativeworksNavlingtonItem.classList.remove( "js__navlington-active" );
        }
    }
};

// Main
// ====

window.onload = function() {

    var $ = $ || jQuery;
    var body = document.body;
    var navley = document.getElementById( "navley" ),
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
        splitscreenListItems = document.querySelectorAll( ".js__splitscreenListItem" ),
        index,
        allExceptThisSplitscreenListItems = [];

    Navley.init();
    Pagely.init();

    // Navlington listener
    navlingtonOpenClose.addEventListener( "click", function() {
        if ( menuOpen != false ) {
            navlington.classList.add( "js__hide" );
            navlingtonOverlay.classList.remove( "js__navlington-open" );

            burgerBarOne.setAttribute( "y1", "21" );
            burgerBarOne.classList.add( "js__burger-flip--out" );
            burgerBarOne.classList.remove( "js__burger-flip--in" );

            burgerBarTwo.classList.remove( "js__hide--long" );

            burgerBarThree.setAttribute( "y1", "2" );
            burgerBarThree.classList.add( "js__burger-flip--out" );
            burgerBarThree.classList.remove( "js__burger-flip--in" );

            menuOpen = false;
        } else {
            navlington.classList.remove( "js__hide" );
            navlingtonOverlay.classList.add( "js__navlington-open" );

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

    if ( creativeworksPage != null ) {
        function getSplitscreenListItems() {
            for (var i = 0; i < splitscreenListItems.length; i++) {
                allExceptThisSplitscreenListItems.push( splitscreenListItems[i] );
            }
        }

        for (var i = 0; i < splitscreenListItems.length; i++) {
            // on hover remove item from array
            // add active class to removed item
            // and add inactive class to rest of array
            splitscreenListItems[i].addEventListener( "mouseover", function( event ) {
                getSplitscreenListItems();
                index = allExceptThisSplitscreenListItems.indexOf(this);
                if ( index > -1 ) {
                    allExceptThisSplitscreenListItems.splice(index, 1);
                }
                for (var i = 0; i < allExceptThisSplitscreenListItems.length; i++) {
                    allExceptThisSplitscreenListItems[i].classList.add( "js__splitscreenListItem--inactive" );
                }
                this.classList.add( "js__splitscreenListItem--hover" );
                console.log(allExceptThisSplitscreenListItems);
            });

            splitscreenListItems[i].addEventListener( "mouseout", function( event ) {
                getSplitscreenListItems();
                index = allExceptThisSplitscreenListItems.indexOf(this);
                if ( index > -1 ) {
                    allExceptThisSplitscreenListItems.splice(index, 1);
                }
                for (var i = 0; i < allExceptThisSplitscreenListItems.length; i++) {
                    allExceptThisSplitscreenListItems[i].classList.remove( "js__splitscreenListItem--inactive" );
                }
                this.classList.remove( "js__splitscreenListItem--hover" );
            });
        }
    }

};

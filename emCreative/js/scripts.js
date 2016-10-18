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

// Objects
// =======

var flatPalette = {
    1 : "#ffebee",
    2 : "#ffcdd2",
    3 : "#ef9a9a",
    4 : "#e57373",
    5 : "#ef5350",
    6 : "#f44336",
    7 : "#e53935",
    8 : "#d32f2f",
    9 : "#c62828",
    10 : "#b71c1c",
    11 : "#ff8a80",
    12 : "#ff5252",
    13 : "#ff1744",
    14 : "#d50000",
    15 : "#e91e63",
    16 : "#fce4ec",
    17 : "#f8bbd0",
    18 : "#f48fb1",
    19 : "#f06292",
    20 : "#ec407a",
    21 : "#e91e63",
    22 : "#d81b60",
    23 : "#c2185b",
    24 : "#ad1457",
    25 : "#880e4f",
    26 : "#ff80ab",
    27 : "#ff4081",
    28 : "#f50057",
    29 : "#c51162",
    30 : "#9c27b0",
    31 : "#f3e5f5",
    32 : "#e1bee7",
    33 : "#ce93d8",
    34 : "#ba68c8",
    35 : "#ab47bc",
    36 : "#9c27b0",
    37 : "#8e24aa",
    38 : "#7b1fa2",
    39 : "#6a1b9a",
    40 : "#4a148c",
    41 : "#ea80fc",
    42 : "#e040fb",
    43 : "#d500f9",
    44 : "#aa00ff",
    45 : "#673ab7",
    46 : "#ede7f6",
    47 : "#d1c4e9",
    48 : "#b39ddb",
    49 : "#9575cd",
    50 : "#7e57c2",
    51 : "#673ab7",
    52 : "#5e35b1",
    53 : "#512da8",
    54 : "#4527a0",
    55 : "#311b92",
    56 : "#b388ff",
    57 : "#7c4dff",
    58 : "#651fff",
    59 : "#6200ea",
    60 : "#3f51b5",
    61 : "#e8eaf6",
    62 : "#c5cae9",
    63 : "#9fa8da",
    64 : "#7986cb",
    65 : "#5c6bc0",
    66 : "#3f51b5",
    67 : "#3949ab",
    68 : "#303f9f",
    69 : "#283593",
    70 : "#1a237e",
    71 : "#8c9eff",
    72 : "#536dfe",
    73 : "#3d5afe",
    74 : "#304ffe",
    75 : "#2196f3",
    76 : "#e3f2fd",
    77 : "#bbdefb",
    78 : "#90caf9",
    79 : "#64b5f6",
    80 : "#42a5f5",
    81 : "#2196f3",
    82 : "#1e88e5",
    83 : "#1976d2",
    84 : "#1565c0",
    85 : "#0d47a1",
    86 : "#82b1ff",
    87 : "#448aff",
    88 : "#2979ff",
    89 : "#2962ff",
    90 : "#03a9f4",
    91 : "#e1f5fe",
    92 : "#b3e5fc",
    93 : "#81d4fa",
    94 : "#4fc3f7",
    95 : "#29b6f6",
    96 : "#03a9f4",
    97 : "#039be5",
    98 : "#0288d1",
    99 : "#0277bd",
    100 : "#01579b",
    101 : "#80d8ff",
    102 : "#40c4ff",
    103 : "#00b0ff",
    104 : "#0091ea",
    105 : "#00bcd4",
    106 : "#e0f7fa",
    107 : "#b2ebf2",
    108 : "#80deea",
    109 : "#4dd0e1",
    110 : "#26c6da",
    111 : "#00bcd4",
    112 : "#00acc1",
    113 : "#0097a7",
    114 : "#00838f",
    115 : "#006064",
    116 : "#84ffff",
    117 : "#18ffff",
    118 : "#00e5ff",
    119 : "#00b8d4",
    120 : "#009688",
    121 : "#e0f2f1",
    122 : "#b2dfdb",
    123 : "#80cbc4",
    124 : "#4db6ac",
    125 : "#26a69a",
    126 : "#009688",
    127 : "#00897b",
    128 : "#00796b",
    129 : "#00695c",
    130 : "#004d40",
    131 : "#a7ffeb",
    132 : "#64ffda",
    133 : "#1de9b6",
    134 : "#00bfa5",
    135 : "#4caf50",
    136 : "#e8f5e9",
    137 : "#c8e6c9",
    138 : "#a5d6a7",
    139 : "#81c784",
    140 : "#66bb6a",
    141 : "#4caf50",
    142 : "#43a047",
    143 : "#388e3c",
    144 : "#2e7d32",
    145 : "#1b5e20",
    146 : "#b9f6ca",
    147 : "#69f0ae",
    148 : "#00e676",
    149 : "#00c853",
    150 : "#8bc34a",
    151 : "#f1f8e9",
    152 : "#dcedc8",
    153 : "#c5e1a5",
    154 : "#aed581",
    155 : "#9ccc65",
    156 : "#8bc34a",
    157 : "#7cb342",
    158 : "#689f38",
    159 : "#558b2f",
    160 : "#33691e",
    161 : "#ccff90",
    162 : "#b2ff59",
    163 : "#76ff03",
    164 : "#64dd17",
    165 : "#cddc39",
    166 : "#f9fbe7",
    167 : "#f0f4c3",
    168 : "#e6ee9c",
    169 : "#dce775",
    170 : "#d4e157",
    171 : "#cddc39",
    172 : "#c0ca33",
    173 : "#afb42b",
    174 : "#9e9d24",
    175 : "#827717",
    176 : "#f4ff81",
    177 : "#eeff41",
    178 : "#c6ff00",
    179 : "#aeea00",
    180 : "#ffeb3b",
    181 : "#fffde7",
    182 : "#fff9c4",
    183 : "#fff59d",
    184 : "#fff176",
    185 : "#ffee58",
    186 : "#ffeb3b",
    187 : "#fdd835",
    188 : "#fbc02d",
    189 : "#f9a825",
    190 : "#f57f17",
    191 : "#ffff8d",
    192 : "#ffff00",
    193 : "#ffea00",
    194 : "#ffd600",
    195 : "#ffc107",
    196 : "#fff8e1",
    197 : "#ffecb3",
    198 : "#ffe082",
    199 : "#ffd54f",
    200 : "#ffca28",
    201 : "#ffc107",
    202 : "#ffb300",
    203 : "#ffa000",
    204 : "#ff8f00",
    205 : "#ff6f00",
    206 : "#ffe57f",
    207 : "#ffd740",
    208 : "#ffc400",
    209 : "#ffab00",
    210 : "#ff9800",
    211 : "#fff3e0",
    212 : "#ffe0b2",
    213 : "#ffcc80",
    214 : "#ffb74d",
    215 : "#ffa726",
    216 : "#ff9800",
    217 : "#fb8c00",
    218 : "#f57c00",
    219 : "#ef6c00",
    220 : "#e65100",
    221 : "#ffd180",
    222 : "#ffab40",
    223 : "#ff9100",
    224 : "#ff6d00",
    225 : "#ff5722",
    226 : "#fbe9e7",
    227 : "#ffccbc",
    228 : "#ffab91",
    229 : "#ff8a65",
    230 : "#ff7043",
    231 : "#ff5722",
    232 : "#f4511e",
    233 : "#e64a19",
    234 : "#d84315",
    235 : "#bf360c",
    236 : "#ff9e80",
    237 : "#ff6e40",
    238 : "#ff3d00",
    239 : "#dd2c00",
    240 : "#795548",
    241 : "#efebe9",
    242 : "#d7ccc8",
    243 : "#bcaaa4",
    244 : "#a1887f",
    245 : "#8d6e63",
    246 : "#795548",
    247 : "#6d4c41",
    248 : "#5d4037",
    249 : "#4e342e",
    250 : "#3e2723",
    251 : "#9e9e9e",
    252 : "#fafafa",
    253 : "#f5f5f5",
    254 : "#eeeeee",
    255 : "#e0e0e0",
    256 : "#bdbdbd",
    257 : "#9e9e9e",
    258 : "#757575",
    259 : "#616161",
    260 : "#424242",
    261 : "#212121",
    262 : "#607d8b",
    263 : "#eceff1",
    264 : "#cfd8dc",
    265 : "#b0bec5",
    266 : "#90a4ae",
    267 : "#78909c",
    268 : "#607d8b",
    269 : "#546e7a",
    270 : "#455a64",
    271 : "#37474f",
    272 : "#263238"
}


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
        blogPage = document.getElementById( "blogPage" ),
        blogNavlingtonItem = document.getElementById( "blogNavlingtonItem" )
        stuffNavlingtonItem = document.getElementById( "stuffNavlingtonItem" );

        if ( homePage != null )  {
            body.classList.add( "js__hero-thing--noscroll" );
        }

        if ( stuffPage != null ) {
            stuffNavItem.classList.add( "js__navley-active" );
            blogNavItem.classList.remove( "js__navley-active" );
            stuffNavlingtonItem.classList.add( "js__navlington-active" );
            blogNavlingtonItem.classList.remove( "js__navlington-active" );
        }

        if ( blogPage != null ) {
            blogNavItem.classList.add( "js__navley-active" );
            stuffNavItem.classList.remove( "js__navley-active" );
            blogNavlingtonItem.classList.add( "js__navlington-active" );
            stuffNavlingtonItem.classList.remove( "js__navlington-active" );
        }
    }
};

// Tile interactions
// =================

var TilerDurden = {

    init: function() {
        var randomNumber;
        var chosenColour;
        console.log( "The first rule of hurmurmrsadjahanburschh" );
    },

    // Randomise post tile colour
    randomColourify: function() {
        randomNumber = getRandomInt( 1, 273 );
        chosenColour = flatPalette[randomNumber];
        return chosenColour;
    }
};


// Helpers
// =======

// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt( min, max ) {
    min = Math.ceil( min );
    max = Math.floor( max );
    return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
}


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

    if ( stuffPage != null ) {
        TilerDurden.init();

        for ( var i = 0; i < stuffFeedItems.length; i++ ) {
            var feedItem = stuffFeedItems[i];

            // Colour
            var tileColour = TilerDurden.randomColourify();
            feedItem.style.backgroundColor = tileColour;

            // Hover
            feedItem.addEventListener( "mouseenter", function() {
                this.classList.add( "js__stuffFeedItem--hover" );
            });
            feedItem.addEventListener( "mouseleave", function() {
                this.classList.remove( "js__stuffFeedItem--hover" );
            });
        }
    }

};

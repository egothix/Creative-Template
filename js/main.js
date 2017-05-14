
"use strict";


// Script for Active Links of Navbar on scroll
// $(document).ready(function(){
//     $(".scroll-area").scrollspy({target: "#myNavbar"})
// });

// $(document).ready(function(){
//     $('[data-spy="scroll"]').each(function(){
//         var $spy = $(this).scrollspy('refresh');
//     });
// });


// Script For the Menu Icon
// $(document).ready(function() {
//     $(".menu").click(function(e) {
//         if ($(this).hasClass("on")) {
//             $(this).removeClass("on").addClass("off");
//         } else {
//             $(this).removeClass("off").addClass("on");
//         }
//     });
// });

// Script For Tooltips
$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})


// Script for SuperSlides Slider
var slides = jQuery('#slides');
if (slides.length > 0) {
    $('#slides').superslides({
        animation: 'fade',
        animation_easing: 'linear',
        play: 3000
    });
}
$('#slides').on('mouseenter', function() {
    $(this).superslides('stop');
});
$('#slides').on('mouseleave', function() {
    $(this).superslides('start');
});



// Sript for  OWL SLIDER
var owl_demo = jQuery('#team-slider');
if (owl_demo.length > 0) {
    $(document).ready(function() {
        $("#team-slider").owlCarousel({

            navigation: false, // Show next and prev buttons
            slideSpeed: 100,
            autoPlay: false,
            pagination: true,
            singleItem: true

            // "singleItem:true" is a shortcut for:
            // items : 1,
            // itemsDesktop : false,
            // itemsDesktopSmall : false,
            // itemsTablet: false,
            // itemsMobile : false

        });

    });
}

// Sript for  OWL SLIDER 2 on BLOG Section
var blog_slider = jQuery('#blog-slider');
if (blog_slider.length > 0) {
    $(document).ready(function() {

        var owl = $("#blog-slider");

        owl.owlCarousel({


            itemsCustom: [
                [0, 1],
                [450, 1],
                [600, 2],
                [700, 2],
                [1000, 2],
                [1200, 2],
                [1400, 2],
                [1600, 2]
            ],
            navigation: false,
            navigationText: ["PREV", "NEXT"],
             slideSpeed : 300,
            autoPlay: 3000,
            // paginationSpeed : 400,
            paginationNumbers: true,
            pagination: true,
        });


    });
}
var portfolio_slider = jQuery('#portfolio-slider');
if (portfolio_slider.length > 0) {
        $(document).ready(function() {

            var owl = $("#portfolio-slider");

            owl.owlCarousel({

                itemsCustom: [
                    [0, 1],
                    [450, 1],
                    [600, 1],
                    [700, 2],
                    [1000, 2],
                    [1200, 2],
                    [1400, 2],
                    [1600, 2]
                ],
                pagination: false,
                navigation: false,
                slideSpeed : 300,
                autoPlay: 3000

            });

        });
}

// Isotope Filter Portfolio
var container = jQuery('.portfolioContainer');
if (container.length > 0) {
    $(window).load(function(){
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    });
});
}

// Togggle Map Script
$("#mapOpen").click(function() {
    $(".mapWrap").slideToggle(400);

}, function() {
    $(".mapWrap").slideToggle('fast');
    $(this).toggleClass('mapClose');

    setTimeout(function() {
        init();
    }, 200);

});


// Script to show Contact Form
$(document).ready(function($) {
    $('#btn-contact').click(function() {
        $('#show-form').fadeIn(1000, function() {

        });
    });

});


// Script for filling the Contact Input forms

(function() {
    // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
    if (!String.prototype.trim) {
        (function() {
            // Make sure we trim BOM and NBSP
            var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            String.prototype.trim = function() {
                return this.replace(rtrim, '');
            };
        })();
    }

    [].slice.call(document.querySelectorAll('input.input__field, textarea.input__field')).forEach(function(inputEl) {
        // in case the input is already filled..
        if (inputEl.value.trim() !== '') {
            classie.add(inputEl.parentNode, 'input--filled');
        }

        // events:
        inputEl.addEventListener('focus', onInputFocus);
        inputEl.addEventListener('blur', onInputBlur);
    });

    function onInputFocus(ev) {
        classie.add(ev.target.parentNode, 'input--filled');
    }

    function onInputBlur(ev) {
        if (ev.target.value.trim() === '') {
            classie.remove(ev.target.parentNode, 'input--filled');
        }
    }
})();


// Script For Select Subject input
(function() {
    [].slice.call(document.querySelectorAll('select.cs-select')).forEach(function(el) {
        new SelectFx(el);
    });
})();


// Parallax Photos On Single Portfolio & Blog
var imageScroll = jQuery('.img-holder');
if (imageScroll.length > 0) {
        var touch = Modernizr.touch;
        $('.img-holder').imageScroll({
            imageAttribute: (touch === true) ? 'image-mobile' : 'image',
            touch: touch
        });
    }
var typed = jQuery('#typed');
if (typed.length > 0) {
        $(function() {

            $("#typed").typed({
                // strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
                stringsElement: $('#typed-strings'),
                typeSpeed: 30,
                backDelay: 500,
                loop: true,
                contentType: 'html', // or text
                // defaults to false for infinite loop
                loopCount: false,
                callback: function() {
                    foo();
                },
                resetCallback: function() {
                    newTyped();
                }
            });

            $(".reset").click(function() {
                $("#typed").typed('reset');
            });

        });

        function newTyped() { /* A new typed object */ }

        function foo() {
            // console.log("Callback");
        }
}
// Search Form on Navbar
    $(function () {
        // Remove Search if user Resets Form or hits Escape!
        $('body, .navbar-collapse form[role="search"] button[type="reset"]').on('click keyup', function(event) {
            // console.log(event.currentTarget);
            if (event.which == 27 && $('.navbar-collapse form[role="search"]').hasClass('active') ||
                $(event.currentTarget).attr('type') == 'reset') {
                closeSearch();
            }
        });

        function closeSearch() {
            var $form = $('.navbar-collapse form[role="search"].active')
            $form.find('input').val('');
            $form.removeClass('active');
        }

        // Show Search if form is not active // event.preventDefault() is important, this prevents the form from submitting
        $(document).on('click', '.navbar-collapse form[role="search"]:not(.active) button[type="submit"]', function(event) {
            event.preventDefault();
            var $form = $(this).closest('form'),
                $input = $form.find('input');
            $form.addClass('active');
            $input.focus();

        });
    });


            $('.nav-pills>li').click(function() {
                $('.animated').addClass('go')
            });


























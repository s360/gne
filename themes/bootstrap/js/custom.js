/**
 * Custom Javascript for APATT
 */

'use strict';

jQuery(document).ready(function() {

    /*jQuery.fn.reverse = [].reverse;

    jQuery.fn.sliderPage = function() {

        var container = 'div#scrolling-page-container';
        var next_btn = '#next-scrolling-page';
        var prev_btn = '#prev-scrolling-page';
        var total_row = this.find(container).children().length;
        var $children_row = this.find(container).children();

        this.find(container).children().css({
            display: 'none',
            opacity: 1
        });

        this.find(container).children().first().css({
            display: 'block',
            opacity: 1
        }).addClass('active').addClass('first');

        this.find(container).children().last().addClass('last');



        jQuery(next_btn).on('click', function(e) {

            var found = false;
            var ok = false;

            jQuery(container).children().each(function(index) {

                if(found == true)
                {
                    jQuery(this).addClass('active').css({
                        display: 'block',
                        opacity: 1
                    });

                    found = false;
                    ok = true;

                }

                if(jQuery(this).hasClass('active') && ok == false && !jQuery(this).hasClass('last'))
                {
                    jQuery(this).removeClass('active').css({
                        display: 'none',
                        opacity: 0
                    });

                    found = true;

                }

            });

        });



        jQuery(prev_btn).on('click', function(e) {

            var found = false;
            var ok = false;

            jQuery(container).children().reverse().each(function(index) {

                if(found == true)
                {
                    jQuery(this).addClass('active').css({
                        display: 'block',
                        opacity: 1
                    });

                    found = false;
                    ok = true;

                }

                if(jQuery(this).hasClass('active') && ok == false && !jQuery(this).hasClass('first'))
                {
                    jQuery(this).removeClass('active').css({
                        display: 'none',
                        opacity: 1
                    });

                    found = true;

                }

            });

        });

        return this;

    };

    jQuery('#scrolling-page').sliderPage()*/;

    //homepage fullpag
    var toolbar = 64;
    var menu = 51;
    var window_height = jQuery(window).height();
    var window_width =jQuery(window).width();
    var window_height_2 =jQuery(window).height()-toolbar;

    if(jQuery('body').hasClass('toolbar-drawer')){
        jQuery("#homepage").css({"height": window_height_2});
        jQuery("#container-slide-home").css({"height": window_height_2});
        jQuery(".node-slider-page").css({"height": window_height_2});

        jQuery("#wrap-page").css({"height": window_height_2});
        jQuery("#container-slide-press").css({"height": window_height_2});
        jQuery(".node-press-release").css({"height": window_height_2});
    }else{
        jQuery("#homepage").css({"height": window_height});
        jQuery("#container-slide-home").css({"height": window_height});
        jQuery(".node-slider-page").css({"height": window_height});

        jQuery("#wrap-page").css({"height": window_height});
        jQuery("#container-slide-press").css({"height": window_height});
        jQuery(".node-press-release").css({"height": window_height});
    }

    // homepage carausel
    jQuery('#container-slide-home').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-nav .view-content'

    });

    jQuery('#container-slide-press').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-nav .view-content'

    });

    jQuery('.slider-nav .view-content').slick({
        slidesToShow: 20,
        slidesToScroll: 20,
        asNavFor: ['#container-slide-home', '#container-slide-press'],
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });


    jQuery( ".navbar-toggle" ).click(function() {
         jQuery('.top-navigation').toggleClass('in');
    });

    jQuery(".slider-nav .view-content a").removeAttr("href").css("cursor","pointer");
});
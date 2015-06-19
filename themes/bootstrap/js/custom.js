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
        jQuery("#container-slide-home .views-row").css({"height": window_height_2});

        jQuery("#wrap-page").css({"height": window_height_2});
        jQuery("#container-slide-press").css({"height": window_height_2});
        jQuery(".node-press-release").css({"height": window_height_2});
    }else{
        jQuery("#homepage").css({"height": window_height});
        jQuery("#container-slide-home").css({"height": window_height});
        jQuery("#container-slide-home .views-row").css({"height": window_height});

        jQuery("#wrap-page").css({"height": window_height});
        jQuery("#container-slide-press").css({"height": window_height});
        jQuery(".node-press-release").css({"height": window_height});
    }

    //slide

    jQuery('#container-slide-home').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '#homepage .slider-nav .view-content ul',
        appendArrows: false

    });

    jQuery('#container-slide-press').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-nav .view-press .view-content ul',
        appendArrows: false

    });

    jQuery('.slider-nav .view-press .view-content ul').slick({
        slidesToShow: 20,
        slidesToScroll: 20,
        asNavFor: ['#container-slide-press', ''],
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });

    /*jQuery('#homepage .slider-nav .view-content ul').slick({
        slidesToShow: 20,
        slidesToScroll: 20,
        asNavFor: ['#container-slide-home', ''],
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });*/


    /*jQuery('.slider-nav #nav-home').slick({
        slidesToShow: 20,
        slidesToScroll: 20,
        asNavFor: ['#container-slide-home', ''],
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });
*/

    var currentSlide = jQuery('#container-slide-home').slick('slickCurrentSlide');

    //console.log(currentSlide);

    jQuery( ".navbar-toggle" ).click(function() {
         jQuery('.top-navigation').toggleClass('in');
    });
    jQuery('.slider-nav a').each(function() {
        var target = jQuery(this).attr('href').replace(/\//g,'');
         jQuery(this).attr('href', "#!/" + target);

    });



    jQuery(".slick-prev").addClass("arrow_left");
    jQuery(".slick-next").addClass("arrow_right");


    var dataHash = jQuery('.slick-slide').map( function() {
        if(!jQuery(this).hasClass("slick-cloned")){
            return jQuery(this).find('.node ').attr('data-hash');
        }

    }).get();

    //var attrActive = jQuery('#container-slide-home .slick-slide').find('.body-content ').attr('title');

    var slidetoHash = dataHash;
    function gotohash(e) {
        var lochash = window.location.hash;
        var last = slidetoHash.length-1;
        var first = 0;
        if (lochash && lochash != '#!/join' && lochash != '#!/donate' && lochash != '#!/join-thank-you' && lochash != '#!/donate-thank-you'){

            var slideloc = slidetoHash.indexOf(lochash);
            jQuery("#container-slide-home").slick('slickGoTo', slideloc);
            jQuery("#container-slide-press").slick('slickGoTo', slideloc);

            if (slideloc == first){
                // jQuery('.arrow_left').addClass( "hide" );
                jQuery('.arrow_right').removeClass( "hide" );

            }
            else if (slideloc == last){
                // jQuery('.arrow_right').addClass( "hide" );
                jQuery('.arrow_left').removeClass( "hide" );

            }
            else{
                jQuery('.arrow_left').removeClass( "hide" );
                jQuery('.arrow_right').removeClass( "hide" );
            }
        }


        if(lochash == '#!/join'){
            jQuery('#petition-overlay-container').removeClass('hidden');
            jQuery('#close-petition').click( function(){
              //  jQuery('#petition-overlay-container').AddClass('hidden');
            });

        }

        if(lochash == '#!/donate'){
            jQuery('#donation-overlay-container').removeClass('hidden');
            jQuery('#donate-close').click( function(){
                //jQuery('#donation-overlay-container').AddClass('hidden');
            });

        }

        if(lochash == '#!/join-thank-you' || lochash == '#!/donate-thank-you'){
            jQuery('#thank-container').removeClass('hidden');
            jQuery('#thank-close').click( function(){
                jQuery('#thank-container').AddClass('hidden');
            });
        }
    }

    function prev(e){
        jQuery("#container-slide-home").slick('slickPrev');
        jQuery("#container-slide-press").slick('slickPrev');
        var lochash = window.location.hash;
        var slideloc = slidetoHash.indexOf(lochash)-1;
        var slidehas = slidetoHash[slideloc];
        window.location.hash = slidehas;
    }

    function next(e){
        jQuery("#container-slide-home").slick('slickNext');
        jQuery("#container-slide-press").slick('slickNext');
        var lochash = window.location.hash;
        var slideloc = slidetoHash.indexOf(lochash)+1;
        var slidehas = slidetoHash[slideloc];
        window.location.hash = slidehas;
    }

    jQuery(".arrow_left").click( prev );

    jQuery(".arrow_right").click(next);

    jQuery( document ).ready( gotohash );
    jQuery( window ).bind( 'hashchange', gotohash );

    //Petition Overlay Submit
		function validateEmail(email) {
			var validator = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
			return validator.test(email);
		}

    var overlaySubmit = jQuery('#overlay-submit');
    var petitionOverlayForm = jQuery('#petition-form');
    var thankyouContainer = jQuery('#thank-container');


    jQuery(petitionOverlayForm).on('submit', function(e) {
    	console.log('submit');
	    e.preventDefault();
	  	var fullName = jQuery('.petition-input.nameOverlay').val().trim();
	    var userLastName =  fullName.split(' ').slice(-1).join(' ');
	    var userFirstName = fullName.split(' ').slice(0, -1).join(' ');
	    var userEmail = jQuery('.petition-input.emailOverlay').val();
		  if (fullName && userEmail) {
		  	console.log('names:')
		  	console.log(fullName, userEmail);
	      if(userFirstName) {
	        jQuery('#first-name-overlay').val(userFirstName);  
	      }else{
	        jQuery('#first-name-overlay').val('Blank');
	      }
	      if(userLastName) {
	          jQuery('#last-name-overlay').val(userLastName);   
	      }else{
	          jQuery('#last-name-overlay').val('Smith');
	      }
	    }
	    if ( validateEmail(userEmail) ) {
	    	jQuery('#overlay-submit').hide();
	    	// jQuery(invalidEmail).addClass('hidden');
	    	jQuery.post(jQuery(this).attr('action'),
	    	jQuery(this).serialize(),
	    		function(data) {
	    			jQuery('#petition-overlay-container').hide();
	    			jQuery(thankyouContainer).show();
	    			// jQuery(thankyou).removeClass('hidden');
	    		}).error(function(data) {
	    			console.log('form error');
	    			// jQuery(error).show();	
	    			// jQuery('#petition-form').hide();
	    		});
    	} else {
    		console.log('invalid email');
    		// jQuery(invalidEmail).removeClass('hidden');
    	}
    });


});
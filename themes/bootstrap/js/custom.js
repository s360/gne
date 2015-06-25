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
        intoolbar();
    }else{
        notoolbar();
    }

    function intoolbar(){
        jQuery("#homepage").css({"height": window_height_2});
        jQuery("#container-slide-home").css({"height": window_height_2});
        jQuery("#container-slide-home .views-row").css({"height": window_height_2});

        jQuery("#wrap-page").css({"height": window_height_2});
        jQuery("#container-slide-press").css({"height": window_height_2});
        jQuery(".node-press-release").css({"height": window_height_2});

        if (window_height <= 700){
            jQuery('.petition-container').css({"height": "auto", "z-index": "99999"});
        }
    }

    function notoolbar(){
        jQuery("#homepage").css({"height": window_height});
        jQuery("#container-slide-home").css({"height": window_height});
        jQuery("#container-slide-home .views-row").css({"height": window_height});

        jQuery("#wrap-page").css({"height": window_height});
        jQuery("#container-slide-press").css({"height": window_height});
        jQuery(".node-press-release").css({"height": window_height});
    }

    //act submit

    jQuery('input.zip_sub').click(function(event) {
        var zip = jQuery('.zipcode').val();
        var url= 'http://actioncenter.nokidhungry.org/actions/altzip/'+zip;
        //window.location.href=url;
        window.open(url, '_blank');
        return false;
    });

    jQuery('input.zip_sub.mobile').click(function(event) {
        var zip = jQuery('.zipcode.mobile').val();
        var url= 'http://actioncenter.nokidhungry.org/actions/altzip/'+zip;
        //window.location.href=url;
        window.open(url, '_blank');
        return false;
    });

    jQuery( ".navbar-toggle" ).click(function() {
        jQuery('.top-navigation').toggleClass('in');
    });

    jQuery(".slider-nav .menu li a").click(function(){
        jQuery('.top-navigation').toggleClass('in');
    });

    jQuery('.slider-nav a').each(function() {
        var target = jQuery(this).attr('href').replace(/\//g,'');
        //jQuery(this).attr('href', "#!/" + target);
        jQuery(this).attr('data-hash', "#!/" + target);
        jQuery(this).removeAttr('href');
        jQuery(this).css("cursor", "pointer");

    });

    jQuery('.slider-nav a').click(function(){
        jQuery('.top-navigation').removeClass('in');
        var menuhash = jQuery(this).attr('data-hash');
        setTimeout(function(){
            window.location.hash = menuhash;
        }, 500);
    });


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

    jQuery(".slick-prev").addClass("arrow_left");
    jQuery(".slick-next").addClass("arrow_right");

    var dataHash = jQuery('.slick-slide').map( function() {
        if(!jQuery(this).hasClass("slick-cloned")){
            return jQuery(this).find('.node ').attr('data-hash');
        }
    }).get();

    var title = jQuery('.slick-slide').map( function() {
        if(!jQuery(this).hasClass("slick-cloned")){
            return jQuery(this).find('.node ').attr('title');
        }
    }).get();

    var slidetoHash = dataHash;

    var pageHome = jQuery('#container-slide-home');
    var pagePress = jQuery('#container-slide-press');

    if (pageHome.length){
        var slide = pageHome;
    }
    if (pagePress.length){
        var slide = pagePress;
    }

    function gotohash(e) {
        var lochash = window.location.hash;
        var slideloc = slidetoHash.indexOf(lochash);

        //document title
        var docTitle = title[slideloc];
        document.title = "Great Nations Eat | "+docTitle;
        if (lochash == ''){
            document.title = "Great Nations Eat | Stories";
        }


        if (lochash && lochash != '#!/join' && lochash != '#!/donate' && lochash != '#!/join-thank-you' && lochash != '#!/donate-thank-you' && lochash != '#!/host-a-screening'){


            jQuery("#container-slide-home").slick('slickGoTo', slideloc);
            jQuery("#container-slide-press").slick('slickGoTo', slideloc);

        }

        if(lochash == '#!/join'){
            jQuery('#petition-overlay-container').removeClass('hidden');
            jQuery('#close-petition').click( function(){
              //  jQuery('#petition-overlay-container').AddClass('hidden');
            });
            //doc title
            document.title = "Great Nations Eat | Join";

        }

        if(lochash == '#!/donate'){
            jQuery('#donation-overlay-container').removeClass('hidden');
            jQuery('#donate-close').click( function(){
                //jQuery('#donation-overlay-container').AddClass('hidden');
            });
            //doc title
            document.title = "Great Nations Eat | Donate";

        }

        if(lochash == '#!/join-thank-you' || lochash == '#!/donate-thank-you'){
            jQuery('#thank-container').removeClass('hidden');
            jQuery('#thank-close').click( function(){
                jQuery('#thank-container').AddClass('hidden');
            });
            //doc title
            document.title = "Great Nations Eat | Thank You";
        }

        if(lochash == '#!/host-a-screening'){
            jQuery('#screening-container').removeClass('hidden');
            //doc title
            document.title = "Great Nations Eat | Screening";

        }

        //on swipe
        slide.on('swipe', hashurl );


    }

    function hashurl(){

        var currentSlide = slide.slick('slickCurrentSlide');
        var slidehas = slidetoHash[currentSlide];
        window.location.hash = slidehas;
    }

    function prev(e){
        jQuery("#container-slide-home").slick('slickPrev');
        jQuery("#container-slide-press").slick('slickPrev');

        hashurl();

    }

    function next(e){
        jQuery("#container-slide-home").slick('slickNext');
        jQuery("#container-slide-press").slick('slickNext');

        hashurl();
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
		var hideOnSuccess = jQuery('#join, .petition-overlay-container, .add-voice, .petition-form-container-story, .story-join');
		var showOnSuccess = jQuery('.donate-join');

    var overlaySubmit = jQuery('#overlay-submit');
    var petitionOverlayForm = jQuery('#petition-form');

    var storyOneForm = jQuery('#petition-form-2');
    var storyOneSubmit = jQuery('#story-submit-2');

    var storyTwoForm = jQuery('#petition-form-3');
    var storyTwoSubmit = jQuery('#story-submit-3');

    var storyThreeForm = jQuery('#petition-form-4');
    var storyThreeSubmit = jQuery('#story-submit-4');

    var screeningForm = jQuery('#screening-form');
    var screeningSubmit = jQuery('#screening-submit');

    var thankyouContainer = jQuery('#thank-container');


    jQuery(petitionOverlayForm).add(storyOneForm).add(storyTwoForm).add(storyThreeForm).add(screeningForm).on('submit', function(e) {
	    e.preventDefault();
	    if(jQuery(this).hasClass('overlay-form')){
		  	var fullName = jQuery('.petition-input.nameOverlay').val().trim();
		    var userLastName =  fullName.split(' ').slice(-1).join(' ');
		    var userFirstName = fullName.split(' ').slice(0, -1).join(' ');
		    var userEmail = jQuery('.petition-input.emailOverlay').val();
			  if (fullName && userEmail) {
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
		    	jQuery(overlaySubmit).hide();
		    	// jQuery(invalidEmail).addClass('hidden');
		    	jQuery.post(jQuery(this).attr('action'),
		    	jQuery(this).serialize(),
		    		function(data) {
		    			hideOnSuccess.hide();
		    			showOnSuccess.removeClass('hidden');
		    			jQuery(thankyouContainer).removeClass('hidden');
		    		}).error(function(data) {
		    			console.log('error');
		    		});
	    	} else {
	    		console.log('invalid email');
	    		// jQuery(invalidEmail).removeClass('hidden');
	    	}
	    }else if(jQuery(this).hasClass('petition-form-2')) {
	    	console.log('story 1 submit');
		  	var fullName = jQuery('.petition-input.name2').val().trim();
		    var userLastName =  fullName.split(' ').slice(-1).join(' ');
		    var userFirstName = fullName.split(' ').slice(0, -1).join(' ');
		    var userEmail = jQuery('.petition-input.email2').val();
			  if (fullName && userEmail) {
		      if(userFirstName) {
		        jQuery('#first-name-2').val(userFirstName);  
		      }else{
		        jQuery('#first-name-2').val('Blank');
		      }
		      if(userLastName) {
		          jQuery('#last-name-2').val(userLastName);   
		      }else{
		          jQuery('#last-name-2').val('Smith');
		      }
		    }
		    if ( validateEmail(userEmail) ) {
		    	jQuery(storyOneSubmit).hide();
		    	// jQuery(invalidEmail).addClass('hidden');
		    	jQuery.post(jQuery(this).attr('action'),
		    	jQuery(this).serialize(),
		    		function(data) {
		    			hideOnSuccess.hide();
		    			showOnSuccess.removeClass('hidden');
		    			jQuery(thankyouContainer).removeClass('hidden');
		    		}).error(function(data) {
		    			console.log('form error');
		    			// jQuery(error).show();	
		    			// jQuery('#petition-form').hide();
		    		});
	    	} else {
	    		console.log('invalid email');
	    		// jQuery(invalidEmail).removeClass('hidden');
	    	}
	    }else if (jQuery(this).hasClass('screening-form')) {
		    var userEmail = jQuery('.screening-input.email').val();
		    if ( validateEmail(userEmail) ) {
		    	jQuery(screeningSubmit).hide();
		    	// jQuery(invalidEmail).addClass('hidden');
		    	jQuery.post(jQuery(this).attr('action'),
		    	jQuery(this).serialize(),
		    		function(data) {
		    			hideOnSuccess.hide();
		    			showOnSuccess.removeClass('hidden');
		    			jQuery('#screening-container').hide();
		    			jQuery(thankyouContainer).removeClass('hidden');
		    		}).error(function(data) {
		    			console.log('form error');
		    			// jQuery(error).show();	
		    			// jQuery('#petition-form').hide();
		    		});
	    	} else {
	    		console.log('invalid email');
	    		// jQuery(invalidEmail).removeClass('hidden');
	    	}

	    }else if (jQuery(this).hasClass('petition-form-3')) {
		  	var fullName = jQuery('.petition-input.name3').val().trim();
		    var userLastName =  fullName.split(' ').slice(-1).join(' ');
		    var userFirstName = fullName.split(' ').slice(0, -1).join(' ');
		    var userEmail = jQuery('.petition-input.email3').val();
			  if (fullName && userEmail) {
		      if(userFirstName) {
		        jQuery('#first-name-3').val(userFirstName);  
		      }else{
		        jQuery('#first-name-3').val('Blank');
		      }
		      if(userLastName) {
		          jQuery('#last-name-3').val(userLastName);   
		      }else{
		          jQuery('#last-name-3').val('Smith');
		      }
		    }
		    if ( validateEmail(userEmail) ) {
		    	jQuery(storyTwoSubmit).hide();
		    	// jQuery(invalidEmail).addClass('hidden');
		    	jQuery.post(jQuery(this).attr('action'),
		    	jQuery(this).serialize(),
		    		function(data) {
		    			hideOnSuccess.hide();
		    			showOnSuccess.removeClass('hidden');
		    			jQuery(thankyouContainer).removeClass('hidden');
		    		}).error(function(data) {
		    			console.log('form error');
		    			// jQuery(error).show();	
		    			// jQuery('#petition-form').hide();
		    		});
	    	} else {
	    		console.log('invalid email');
	    		// jQuery(invalidEmail).removeClass('hidden');
	    	}
	    }else {
	    	console.log('story 3 submit');
		  	var fullName = jQuery('.petition-input.name4').val().trim();
		    var userLastName =  fullName.split(' ').slice(-1).join(' ');
		    var userFirstName = fullName.split(' ').slice(0, -1).join(' ');
		    var userEmail = jQuery('.petition-input.email4').val();
			  if (fullName && userEmail) {
		      if(userFirstName) {
		        jQuery('#first-name-4').val(userFirstName);  
		      }else{
		        jQuery('#first-name-4').val('Blank');
		      }
		      if(userLastName) {
		          jQuery('#last-name-4').val(userLastName);   
		      }else{
		          jQuery('#last-name-4').val('Smith');
		      }
		    }
		    if ( validateEmail(userEmail) ) {
		    	jQuery(storyThreeSubmit).hide();
		    	// jQuery(invalidEmail).addClass('hidden');
		    	jQuery.post(jQuery(this).attr('action'),
		    	jQuery(this).serialize(),
		    		function(data) {
		    			hideOnSuccess.hide();
		    			showOnSuccess.removeClass('hidden');
		    			jQuery(thankyouContainer).removeClass('hidden');
		    		}).error(function(data) {
		    			console.log('form error');
		    			// jQuery(error).show();	
		    			// jQuery('#petition-form').hide();
		    		});
	    	} else {
	    		console.log('invalid email');
	    		// jQuery(invalidEmail).removeClass('hidden');
	    	}
	    }
    });


});
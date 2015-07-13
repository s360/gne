/**
 * Custom Javascript for APATT
 */

'use strict';

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return "";
}

jQuery(document).ready(function() {
        var utm_source = getParameterByName("utm_source");
        var utm_medium = getParameterByName("utm_medium");
        if (utm_source !== "") {
            createCookie("utm_source", utm_source, 1);
        }
        else {
            utm_source = readCookie("utm_source");
        }
        if (utm_medium !== "") {
            createCookie("utm_medium", utm_medium, 1);
        }
        else {
            utm_medium = readCookie("utm_medium");
        }
        //Set source tracking for petition form

        jQuery('.ref_source').val(utm_source);
        jQuery('.ref_sub_source').val(utm_medium);

		//close petition lightbox on click anywhere
		jQuery('body').click(function(e) {
			if(!jQuery("#petition-overlay-container").hasClass('hidden') && jQuery(e.target).hasClass('full_overlay')) {
    		jQuery("#petition-overlay-container").addClass('hidden');
    	}
    	if(jQuery('.top-navigation').hasClass('in') && !jQuery(e.target).hasClass('navbar-toggle') && !jQuery(e.target).hasClass('icon-bar')) {
    		jQuery('.top-navigation').removeClass('in');
    	}
		});

		jQuery('.icon-bar').add('.navbar-toggle').click(function() {
			if(!jQuery("#petition-overlay-container").hasClass('hidden')) {
				jQuery('#petition-overlay-container').addClass('hidden');
			}
			if(!jQuery('#donation-overlay-container').hasClass('hidden')) {
				jQuery('#donation-overlay-container').addClass('hidden');
			}
			if(!jQuery('#screening-container').hasClass('hidden')) {
				jQuery('#screening-container').addClass('hidden');
			}
		});


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

    jQuery(window).resize(function() {	
    	if(jQuery('.view-partner-page').length) {
    		console.log('partner page');
    		window_height = jQuery(window).height();
    		window_height_2 =jQuery(window).height()-toolbar;
    		if(jQuery('body').hasClass('toolbar-drawer')){
      	  intoolbar();
    		}else{
      	  notoolbar();
    		}
  		}
    });

    function intoolbar(){
        jQuery("#homepage").css({"height": window_height_2});
        jQuery("#wrap-page").css({"height": window_height_2});
        jQuery(".node").css({"height": window_height_2});

        if (window_height <= 700){
            jQuery('.petition-container').css({"height": "auto", "z-index": "99999"});
        }
    }

    function notoolbar(){
        jQuery("#homepage").css({"height": window_height});
        jQuery("#wrap-page").css({"height": window_height});
        jQuery(".node").css({"height": window_height});
    }
    //act submit
		function zipCheck(zip) {
			var validator = /^[0-9]+$/;
			return validator.test(zip);
		}
    jQuery('a.zip_sub').click(function(event) {
        var zip = jQuery(this).prev('.zipcode').val();
        if (zipCheck(zip)){
        	jQuery('.zip-error').addClass('hidden');
        	var url= 'http://actioncenter.nokidhungry.org/actions/altzip/'+zip;
        	window.open(url, '_blank');
        	return false;
        }else {
        	jQuery('.zip-error').removeClass('hidden');
        	return false;
        }
    });

    //add class mobile on menu

    jQuery("#block-system-main-menu > ul > li.leaf > a.mobile").each(function(){
       jQuery(this).parent('li').addClass('visible-xs');
    });

    jQuery( ".navbar-toggle" ).click(function() {
        jQuery('.top-navigation').toggleClass('in');
    });

    jQuery(".slider-nav .menu li a").click(function(){
        jQuery('.top-navigation').toggleClass('in');
        var href = jQuery(this).attr('href');
        setTimeout(function() {window.location = href}, 1000);
        return false;
    });


    //slide

    var pageHome = jQuery('#container-slide-home');
    var pagePress = jQuery('#container-slide-press');
    var pagePartner = jQuery('#container-slide-partner');

    if (pageHome.length){
        var slide = pageHome;
    }
    if (pagePress.length){
        var slide = pagePress;
    }
    if (pagePartner.length){
        var slide = pagePartner;
    }

    jQuery(slide).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: false,
        adaptiveHeight:true

    });


    jQuery(".slick-prev").addClass("arrow_left");
    jQuery(".slick-next").addClass("arrow_right");

    //redirect
    var page = location.pathname;
    //exists sslide
    if(!jQuery('.slick-track').length && !jQuery("#404").length && jQuery(".node").attr('data-hash', "#!"+page).length){

        if(jQuery('.node-press-release').length){
            location.replace("/press/#!"+page)
        }
        else if(jQuery('.node-home').length){
            location.replace("/#!"+page)
        }
        else{}



    }

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


    var lastPSA;
    function gotohash(e) {
        var lochash = window.location.hash;
        var slideloc = slidetoHash.indexOf(lochash);
        if(jQuery('#container-slide-press').length != 0){
					if(lastPSA){
						lastPSA[0].src = lastPSA[0].src;
					}
	        
	        if(slideloc === 0 || slideloc === -1) {
	        	lastPSA = jQuery('#PSA-1');
	        }else if (slideloc === 1) {
	        	lastPSA = jQuery('#PSA-2');
	        }else if (slideloc === 2) {
	        	lastPSA = jQuery('#PSA-3');
	        }else if (slideloc === 3) {
	        	lastPSA = jQuery('#PSA-4');
	        }else {
	        	console.log ('else')
	        }
				}
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
            jQuery('#donation-overlay-container').addClass('hidden');
            jQuery('#screening-container').addClass('hidden');
            jQuery('#petition-overlay-container').removeClass('hidden');
            jQuery('#close-petition').click( function(){
              //  jQuery('#petition-overlay-container').AddClass('hidden');
            });
            //doc title
            document.title = "Great Nations Eat | Join";

        }

        if(lochash == '#!/donate'){
            jQuery('#petition-overlay-container').addClass('hidden');
            jQuery('#screening-container').addClass('hidden');
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
            jQuery('#donation-overlay-container').addClass('hidden');
            jQuery('#petition-overlay-container').addClass('hidden');
            jQuery('#screening-container').removeClass('hidden');
            //doc title
            document.title = "Great Nations Eat | Screening";

        }

        //on swipe
        slide.on('swipe', hashurl );

        //analytics page tracker
        ga('send', 'pageview', lochash)

    }

    function hashurl(){
        var currentSlide = slide.slick('slickCurrentSlide');
        var slidehas = slidetoHash[currentSlide];
        window.location.hash = slidehas;
    }

    function prev(e){
        jQuery(slide).slick('slickPrev');
        hashurl();

    }

    function next(e){
        jQuery(slide).slick('slickNext');
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
		var donateJoinButtons = jQuery('.donate-join');
		donateJoinButtons.click(function() {
			jQuery('#donation-overlay-container').removeClass('hidden');
		});
		
		//var invalidEmail = jQuery('.overlay-invalid-email');

		var hideOnSuccess = jQuery('#join, .petition-overlay-container, .add-voice, .petition-form-container-story, .story-join');
		var showOnSuccess = jQuery('.donate-join, .story-share, .add-donate, .thank-arrows');

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
		    	jQuery('.petition-input.emailOverlay').removeClass('petition-error');
		    	jQuery.post(jQuery(this).attr('action'),
		    	jQuery(this).serialize(),
		    		function(data) {
		    			hideOnSuccess.hide();
		    			showOnSuccess.removeClass('hidden');
		    			jQuery(thankyouContainer).removeClass('hidden');
		    			ga('send', 'event', 'button', 'join-confirmation');
		    		}).error(function(data) {
		    			console.log('error');
		    		});
	    	} else {
	    		// jQuery(invalidEmail).removeClass('hidden');
	    		jQuery('.petition-input.emailOverlay').addClass('petition-error');
	    	}
	    }else if(jQuery(this).hasClass('petition-form-2')) {
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
		    	jQuery('.petition-input.email2').removeClass('petition-error');
		    	jQuery('.story-1-error').addClass('hidden');
		    	jQuery.post(jQuery(this).attr('action'),
		    	jQuery(this).serialize(),
		    		function(data) {
		    			hideOnSuccess.hide();
		    			showOnSuccess.removeClass('hidden');
		    			jQuery(thankyouContainer).removeClass('hidden');
		    			ga('send', 'event', 'button', 'join-confirmation');
		    		}).error(function(data) {
		    			console.log('form error');
		    			// jQuery(error).show();	
		    			// jQuery('#petition-form').hide();
		    		});
	    	} else {
	    		jQuery('.petition-input.email2').addClass('petition-error');
	    		jQuery('.story-1-error').removeClass('hidden');
	    	}
	    }else if (jQuery(this).hasClass('screening-form')) {
		    var userEmail = jQuery('.screening-input.email').val();
		    if ( validateEmail(userEmail) ) {
		    	jQuery(screeningSubmit).hide();
		    	jQuery('.screening-input.email').removeClass('petition-error-box');
		    	jQuery('.screening-email-error').addClass('hidden');
		    	jQuery.post(jQuery(this).attr('action'),
		    	jQuery(this).serialize(),
		    		function(data) {
		    			hideOnSuccess.hide();
		    			showOnSuccess.removeClass('hidden');
		    			jQuery('#screening-container').addClass('hidden');
		    			jQuery(thankyouContainer).removeClass('hidden');
		    			ga('send', 'event', 'button', 'join-confirmation');
		    		}).error(function(data) {
		    			console.log('form error');
		    			// jQuery(error).show();	
		    			// jQuery('#petition-form').hide();
		    		});
	    	} else {
	    		jQuery('.screening-input.email').addClass('petition-error-box');
	    		jQuery('.screening-email-error').removeClass('hidden');
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
		    	jQuery('.petition-input.email3').removeClass('petition-error');
		    	jQuery('.story-2-error').addClass('hidden');
		    	jQuery.post(jQuery(this).attr('action'),
		    	jQuery(this).serialize(),
		    		function(data) {
		    			hideOnSuccess.hide();
		    			showOnSuccess.removeClass('hidden');
		    			jQuery(thankyouContainer).removeClass('hidden');
		    			ga('send', 'event', 'button', 'join-confirmation');
		    		}).error(function(data) {
		    			console.log('form error');
		    			// jQuery(error).show();	
		    			// jQuery('#petition-form').hide();
		    		});
	    	} else {
	    		jQuery('.petition-input.email3').addClass('petition-error');
	    		jQuery('.story-2-error').removeClass('hidden');
	    	}
	    }else {
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
		    	jQuery('.petition-input.email4').removeClass('petition-error');
		    	jQuery('.story-3-error').addClass('hidden');
		    	jQuery.post(jQuery(this).attr('action'),
		    	jQuery(this).serialize(),
		    		function(data) {
		    			hideOnSuccess.hide();
		    			showOnSuccess.removeClass('hidden');
		    			jQuery(thankyouContainer).removeClass('hidden');
		    			ga('send', 'event', 'button', 'join-confirmation');
		    		}).error(function(data) {
		    			console.log('form error');
		    			// jQuery(error).show();	
		    			// jQuery('#petition-form').hide();
		    		});
	    	} else {
	    		jQuery('.petition-input.email4').addClass('petition-error');
	    		jQuery('.story-3-error').removeClass('hidden');
	    	}
	    }
    });


});
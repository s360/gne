"use strict";jQuery(document).ready(function(){function e(e){var r=window.location.hash,i=h.length-1,s=0;if(r&&"#!/join"!=r&&"#!/donate"!=r&&"#!/join-thank-you"!=r&&"#!/donate-thank-you"!=r){var o=h.indexOf(r);jQuery("#container-slide-home").slick("slickGoTo",o),jQuery("#container-slide-press").slick("slickGoTo",o),o==s?jQuery(".arrow_right").removeClass("hide"):o==i?jQuery(".arrow_left").removeClass("hide"):(jQuery(".arrow_left").removeClass("hide"),jQuery(".arrow_right").removeClass("hide"))}"#!/join"==r&&(jQuery("#petition-overlay-container").removeClass("hidden"),jQuery("#close-petition").click(function(){})),"#!/donate"==r&&(jQuery("#donation-overlay-container").removeClass("hidden"),jQuery("#donate-close").click(function(){})),("#!/join-thank-you"==r||"#!/donate-thank-you"==r)&&(jQuery("#thank-container").removeClass("hidden"),jQuery("#thank-close").click(function(){jQuery("#thank-container").AddClass("hidden")}))}function r(e){jQuery("#container-slide-home").slick("slickPrev"),jQuery("#container-slide-press").slick("slickPrev");var r=window.location.hash,i=h.indexOf(r)-1,s=h[i];window.location.hash=s}function i(e){jQuery("#container-slide-home").slick("slickNext"),jQuery("#container-slide-press").slick("slickNext");var r=window.location.hash,i=h.indexOf(r)+1,s=h[i];window.location.hash=s}var s=64,o=51,n=jQuery(window).height(),a=jQuery(window).width(),t=jQuery(window).height()-s;jQuery("body").hasClass("toolbar-drawer")?(jQuery("#homepage").css({height:t}),jQuery("#container-slide-home").css({height:t}),jQuery("#container-slide-home .views-row").css({height:t}),jQuery("#wrap-page").css({height:t}),jQuery("#container-slide-press").css({height:t}),jQuery(".node-press-release").css({height:t})):(jQuery("#homepage").css({height:n}),jQuery("#container-slide-home").css({height:n}),jQuery("#container-slide-home .views-row").css({height:n}),jQuery("#wrap-page").css({height:n}),jQuery("#container-slide-press").css({height:n}),jQuery(".node-press-release").css({height:n})),jQuery("#container-slide-home").slick({slidesToShow:1,slidesToScroll:1,asNavFor:"#homepage .slider-nav .view-content ul",appendArrows:!1}),jQuery("#container-slide-press").slick({slidesToShow:1,slidesToScroll:1,asNavFor:".slider-nav .view-press .view-content ul",appendArrows:!1}),jQuery(".slider-nav .view-press .view-content ul").slick({slidesToShow:20,slidesToScroll:20,asNavFor:["#container-slide-press",""],dots:!0,centerMode:!0,focusOnSelect:!0});var l=jQuery("#container-slide-home").slick("slickCurrentSlide");jQuery(".navbar-toggle").click(function(){jQuery(".top-navigation").toggleClass("in")}),jQuery(".slider-nav a").each(function(){var e=jQuery(this).attr("href").replace(/\//g,"");jQuery(this).attr("href","#!/"+e)}),jQuery(".slick-prev").addClass("arrow_left"),jQuery(".slick-next").addClass("arrow_right");var c=jQuery(".slick-slide").map(function(){return jQuery(this).hasClass("slick-cloned")?void 0:jQuery(this).find(".node ").attr("data-hash")}).get(),h=c;jQuery(".arrow_left").click(r),jQuery(".arrow_right").click(i),jQuery(document).ready(e),jQuery(window).bind("hashchange",e);var d=jQuery("#overlay-submit"),u=jQuery("#petition-form");console.log("petitions"),console.log(u)});
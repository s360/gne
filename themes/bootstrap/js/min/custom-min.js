"use strict";jQuery(document).ready(function(){function e(){jQuery("#homepage").css({height:y}),jQuery("#container-slide-home").css({height:y}),jQuery("#container-slide-home .views-row").css({height:y}),jQuery("#wrap-page").css({height:y}),jQuery("#container-slide-press").css({height:y}),jQuery(".node-press-release").css({height:y}),700>=u&&jQuery(".petition-container").css({height:"auto","z-index":"99999"})}function i(){jQuery("#homepage").css({height:u}),jQuery("#container-slide-home").css({height:u}),jQuery("#container-slide-home .views-row").css({height:u}),jQuery("#wrap-page").css({height:u}),jQuery("#container-slide-press").css({height:u}),jQuery(".node-press-release").css({height:u})}function r(e){var i=window.location.hash,r=Q.indexOf(i),o=h[r];document.title="Great Nations Eat | "+o,""==i&&(document.title="Great Nations Eat | Stories"),i&&"#!/join"!=i&&"#!/donate"!=i&&"#!/join-thank-you"!=i&&"#!/donate-thank-you"!=i&&"#!/host-a-screening"!=i&&(jQuery("#container-slide-home").slick("slickGoTo",r),jQuery("#container-slide-press").slick("slickGoTo",r)),"#!/join"==i&&(jQuery("#petition-overlay-container").removeClass("hidden"),jQuery("#close-petition").click(function(){}),document.title="Great Nations Eat | Join"),"#!/donate"==i&&(jQuery("#donation-overlay-container").removeClass("hidden"),jQuery("#donate-close").click(function(){}),document.title="Great Nations Eat | Donate"),("#!/join-thank-you"==i||"#!/donate-thank-you"==i)&&(jQuery("#thank-container").removeClass("hidden"),jQuery("#thank-close").click(function(){jQuery("#thank-container").AddClass("hidden")}),document.title="Great Nations Eat | Thank You"),"#!/host-a-screening"==i&&(jQuery("#screening-container").removeClass("hidden"),document.title="Great Nations Eat | Screening"),v.on("swipe",n)}function n(){var e=v.slick("slickCurrentSlide"),i=Q[e];window.location.hash=i}function o(e){jQuery("#container-slide-home").slick("slickPrev"),jQuery("#container-slide-press").slick("slickPrev"),n()}function t(e){jQuery("#container-slide-home").slick("slickNext"),jQuery("#container-slide-press").slick("slickNext"),n()}function s(e){var i=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;return i.test(e)}var a=64,l=51,u=jQuery(window).height(),c=jQuery(window).width(),y=jQuery(window).height()-a;jQuery("body").hasClass("toolbar-drawer")?e():i(),jQuery("input.zip_sub").click(function(e){var i=jQuery(".zipcode").val(),r="http://actioncenter.nokidhungry.org/actions/altzip/"+i;return window.open(r,"_blank"),!1}),jQuery("input.zip_sub.mobile").click(function(e){var i=jQuery(".zipcode.mobile").val(),r="http://actioncenter.nokidhungry.org/actions/altzip/"+i;return window.open(r,"_blank"),!1}),jQuery(".navbar-toggle").click(function(){jQuery(".top-navigation").toggleClass("in")}),jQuery(".slider-nav .menu li a").click(function(){jQuery(".top-navigation").toggleClass("in")}),jQuery(".slider-nav a").each(function(){var e=jQuery(this).attr("href").replace(/\//g,"");jQuery(this).attr("data-hash","#!/"+e),jQuery(this).removeAttr("href"),jQuery(this).css("cursor","pointer")}),jQuery(".slider-nav a").click(function(){jQuery(".top-navigation").removeClass("in");var e=jQuery(this).attr("data-hash");setTimeout(function(){window.location.hash=e},500)}),jQuery("#container-slide-home").slick({slidesToShow:1,slidesToScroll:1,asNavFor:"#homepage .slider-nav .view-content ul",appendArrows:!1}),jQuery("#container-slide-press").slick({slidesToShow:1,slidesToScroll:1,asNavFor:".slider-nav .view-press .view-content ul",appendArrows:!1}),jQuery(".slider-nav .view-press .view-content ul").slick({slidesToShow:20,slidesToScroll:20,asNavFor:["#container-slide-press",""],dots:!0,centerMode:!0,focusOnSelect:!0}),jQuery(".slick-prev").addClass("arrow_left"),jQuery(".slick-next").addClass("arrow_right");var j=jQuery(".slick-slide").map(function(){return jQuery(this).hasClass("slick-cloned")?void 0:jQuery(this).find(".node ").attr("data-hash")}).get(),h=jQuery(".slick-slide").map(function(){return jQuery(this).hasClass("slick-cloned")?void 0:jQuery(this).find(".node ").attr("title")}).get(),Q=j,d=jQuery("#container-slide-home"),m=jQuery("#container-slide-press");if(d.length)var v=d;if(m.length)var v=m;jQuery(".arrow_left").click(o),jQuery(".arrow_right").click(t),jQuery(document).ready(r),jQuery(window).bind("hashchange",r);var p=jQuery("#overlay-submit"),g=jQuery("#petition-form"),f=jQuery("#petition-form-2"),k=jQuery("#story-submit-2"),w=jQuery("#petition-form-3"),b=jQuery("#story-submit-3"),C=jQuery("#petition-form-4"),z=jQuery("#story-submit-4"),S=jQuery("#screening-form"),N=jQuery("#screening-submit"),T=jQuery("#thank-container");jQuery(g).add(f).add(w).add(C).add(S).on("submit",function(e){if(e.preventDefault(),jQuery(this).hasClass("overlay-form")){console.log("overlay submit");var i=jQuery(".petition-input.nameOverlay").val().trim(),r=i.split(" ").slice(-1).join(" "),n=i.split(" ").slice(0,-1).join(" "),o=jQuery(".petition-input.emailOverlay").val();i&&o&&(n?jQuery("#first-name-overlay").val(n):jQuery("#first-name-overlay").val("Blank"),r?jQuery("#last-name-overlay").val(r):jQuery("#last-name-overlay").val("Smith")),s(o)?(jQuery(p).hide(),jQuery.post(jQuery(this).attr("action"),jQuery(this).serialize(),function(e){console.log("submit success"),console.log(e),jQuery("#petition-overlay-container").hide(),jQuery("#join").hide(),jQuery(T).removeClass("hidden")}).error(function(e){console.log("form error")})):console.log("invalid email")}else if(jQuery(this).hasClass("petition-form-2")){console.log("story 1 submit");var i=jQuery(".petition-input.name2").val().trim(),r=i.split(" ").slice(-1).join(" "),n=i.split(" ").slice(0,-1).join(" "),o=jQuery(".petition-input.email2").val();i&&o&&(n?jQuery("#first-name-2").val(n):jQuery("#first-name-2").val("Blank"),r?jQuery("#last-name-2").val(r):jQuery("#last-name-2").val("Smith")),s(o)?(jQuery(k).hide(),jQuery.post(jQuery(this).attr("action"),jQuery(this).serialize(),function(e){console.log("submit success"),console.log(e),jQuery(f).hide(),jQuery(T).removeClass("hidden")}).error(function(e){console.log("form error")})):console.log("invalid email")}else if(jQuery(this).hasClass("screening-form")){var o=jQuery(".screening-input.email").val();s(o)?(jQuery(N).hide(),jQuery.post(jQuery(this).attr("action"),jQuery(this).serialize(),function(e){console.log("submit success"),console.log(e),jQuery("#screening-container").hide(),jQuery(T).removeClass("hidden")}).error(function(e){console.log("form error")})):console.log("invalid email")}else if(jQuery(this).hasClass("petition-form-3")){var i=jQuery(".petition-input.name3").val().trim(),r=i.split(" ").slice(-1).join(" "),n=i.split(" ").slice(0,-1).join(" "),o=jQuery(".petition-input.email3").val();i&&o&&(n?jQuery("#first-name-3").val(n):jQuery("#first-name-3").val("Blank"),r?jQuery("#last-name-3").val(r):jQuery("#last-name-3").val("Smith")),s(o)?(jQuery(b).hide(),jQuery.post(jQuery(this).attr("action"),jQuery(this).serialize(),function(e){console.log("submit success"),console.log(e),jQuery(w).hide(),jQuery(T).removeClass("hidden")}).error(function(e){console.log("form error")})):console.log("invalid email")}else{console.log("story 3 submit");var i=jQuery(".petition-input.name4").val().trim(),r=i.split(" ").slice(-1).join(" "),n=i.split(" ").slice(0,-1).join(" "),o=jQuery(".petition-input.email4").val();i&&o&&(n?jQuery("#first-name-4").val(n):jQuery("#first-name-4").val("Blank"),r?jQuery("#last-name-4").val(r):jQuery("#last-name-4").val("Smith")),s(o)?(jQuery(z).hide(),jQuery.post(jQuery(this).attr("action"),jQuery(this).serialize(),function(e){console.log("submit success"),console.log(e),jQuery(C).hide(),jQuery(T).removeClass("hidden")}).error(function(e){console.log("form error")})):console.log("invalid email")}})});
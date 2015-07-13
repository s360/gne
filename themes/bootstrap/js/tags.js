/**
 * Created by Upwardstech on 6/24/15.
 */


var lochash = window.location.hash;

function dc_tracker(cat_name, id) {
		var a;
    var axel = Math.random() + "";
    if(id){
    	a = id;
    	console.log('id: ' + id);
    }else {
    	a = axel * 10000000000000;	
    	console.log('a: ' + a);
    }
    
   // document.write("<iframe src=\"https://4652923.fls.doubleclick.net/activityi;src=4652923;type=2015_0;cat="+cat_name+";ord=" + a + "?\" width=\"1\" height=\"1\" frameborder=\"0\" style=\"display:none\"><\/iframe>");
    iframe = jQuery('<iframe src="https://4652923.fls.doubleclick.net/activityi;src=4652923;type=2015_0;cat='+cat_name+';ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none">');
    iframe.appendTo('body');
}


if(location.pathname == "/" && lochash == '') {
    dc_tracker('home0');
}

jQuery( document ).ready(function() {
    //jQuery("#overlay-submit").click( function() { dc_tracker('join0') });
    jQuery('#donate-nav').click( function() { dc_tracker('donate0', null) });
    jQuery('input.zip_sub').click( function() { dc_tracker('involve0', null) });
    //jQuery('.petition-submit').not('#donate-submit').click( function() { dc_tracker('join0') });
    jQuery('#overlay-submit').click( function() { dc_tracker('join0', null) });
    jQuery('#story-submit-2').click( function() { dc_tracker('join0', null) });
    jQuery('#story-submit-3').click( function() { dc_tracker('join0', null) });
    jQuery('#story-submit-4').click( function() { dc_tracker('join0', null) });
    jQuery('.fb-footer').click( function() { dc_tracker('share_fb', null) });
    jQuery('.tw-footer').click( function() { dc_tracker('share_tw', null) });

    //GA Tags
    jQuery('#overlay-submit').click(function(){ ga('send', 'event', 'button', 'join'); });
    jQuery('#story-submit-2').click(function(){ ga('send', 'event', 'button', 'hanno-join')});
    jQuery('#story-submit-3').click(function(){ ga('send', 'event', 'button', 'adrianna-join')});
    jQuery('#story-submit-4').click(function(){ ga('send', 'event', 'button', 'jahnique-join')});
    jQuery('#screening-submit').click(function(){ ga('send', 'event', 'button', 'host-a-screening'); });
    jQuery('.fb-footer').click(function(){ ga('send', 'event', 'button', 'footer facebook')});
    jQuery('.tw-footer').click(function(){ ga('send', 'event', 'button', 'footer twitter')});
    jQuery('.press-footer').click(function(){ ga('send', 'event', 'button', 'footer press')});
    jQuery('.privacy-footer').click(function(){ ga('send', 'event', 'button', 'footer privacy')});

    jQuery('.sp_14354.sp_fb_large').click(function(){ ga('send', 'event', 'social-share', 'facebook(total)') });
    jQuery('.sp_14426.sp_fb_small').click(function(){ ga('send', 'event', 'social-share', 'facebook - mobile(total)') });
    jQuery('.sp_14355.sp_tw_large').click(function() { ga('send', 'event', 'social-share', 'twitter(total)') });
    jQuery('.sp_14425.sp_tw_small').click(function() { ga('send', 'event', 'social-share', 'twitter - mobile(total)') });

    jQuery('.zip_sub').click(function() { ga('send', 'event', 'act-page', 'zip code') });
    jQuery('.stand-up').click(function(){ ga('send', 'event', 'act-page', 'stand up') });
    jQuery('.help-kids').click(function(){ ga('send', 'event', 'act-page', 'help kids') });

    jQuery('#donate-submit').click(function(){ ga('send', 'event', 'donate', 'donate submit(click only)'); });
    jQuery('#key-next-step').click(function(){ 
    	ga('send', 'event', 'donate', 'donate - step one');
    	dc_tracker('donate1', 2551299);
    });
    jQuery('.nextBtn-old.step2').click(function(){ 
    	ga('send', 'event', 'donate', 'donate - step two');
    	dc_tracker('donate2', 2551127);
    });

    

});

jQuery(document).on('click','.sp_fb_large a',function(){dc_tracker('share_fb');})
jQuery(document).on('click','.sp_tw_large a',function(){dc_tracker('share_tw');})



/**
 * Created by Upwardstech on 6/24/15.
 */


var lochash = window.location.hash;

function dc_tracker(cat_name) {
    var axel = Math.random() + "";
    var a = axel * 10000000000000;
   // document.write("<iframe src=\"https://4652923.fls.doubleclick.net/activityi;src=4652923;type=2015_0;cat="+cat_name+";ord=" + a + "?\" width=\"1\" height=\"1\" frameborder=\"0\" style=\"display:none\"><\/iframe>");
    iframe = jQuery('<iframe src="https://4652923.fls.doubleclick.net/activityi;src=4652923;type=2015_0;cat='+cat_name+';ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none">');
    iframe.appendTo('body');
}


if(location.pathname == "/" && lochash == '') {
    dc_tracker('home0');
}

jQuery( document ).ready(function() {
    //jQuery("#overlay-submit").click( function() { dc_tracker('join0') });
    jQuery("#donate-nav").click( function() { dc_tracker('donate0') });
    jQuery("input.zip_sub").click( function() { dc_tracker('involve0') });
    jQuery(".petition-submit").click( function() { dc_tracker('join0') });
    jQuery(".fb-footer").click( function() { dc_tracker('share_fb') });
    jQuery(".tw-footer").click( function() { dc_tracker('share_tw') });

    jQuery("#overlay-submit").click(function(){ga('send', 'event', 'button', 'join');});
    jQuery("#screening-submit").click(function(){ga('send', 'event', 'button', 'host-a-screening');});

});



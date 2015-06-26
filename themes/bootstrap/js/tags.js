/**
 * Created by Upwardstech on 6/24/15.
 */

  /*  function gotohash(e) {
        var lochash = window.location.hash;
        *//*var hurl = window.location.host ;
        var axel = Math.random() + "";
        var a = axel * 10000000000000;*//*



    }

    jQuery( document ).ready( gotohash );
    jQuery( window ).bind( 'hashchange', gotohash );*/
var lochash = window.location.hash;
    var axel = Math.random() + "";
    var a = axel * 10000000000000;
    var cat = '';
    var iframe = null;
if(location.pathname == "/" && lochash == '') {
    iframe = jQuery('<iframe src="https://4652923.fls.doubleclick.net/activityi;src=4652923;type=2015_0;cat=home0;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none">');
    iframe.appendTo('body');
//    document.body.insertAdjacentHTML('afterbegin', '<script type="text/javascript">'
//        + 'var axel = Math.random() + "";'
//        + 'var a = axel * 10000000000000;'
//        + 'document.write(\'<iframe src="https://4652923.fls.doubleclick.net/activityi;src=4652923;type=2015_0;cat=error404;ord=\' + a + \'?" width="1" height="1" frameborder="0" style="display:none"><\/iframe>\');'
//        + '<\/script>'
//        + '<noscript>'
//        + '<iframe src="https://4652923.fls.doubleclick.net/activityi;src=4652923;type=2015_0;cat=error404;ord=1?" width="1" height="1" frameborder="0" style="display:none"><\/iframe>'
//        + '<\/noscript>');
    // document.write("<iframe src=\"https://4652923.fls.doubleclick.net/activityi;src=4652923;type=2015_0;cat=home0;ord=' + a + '?\" width=\"1\" height=\"1\" frameborder=\"0\" style=\"display:none\"><\/iframe>");
}

if(lochash == "#!/donate" ) {
    iframe.remove();
    iframe = jQuery('<iframe src="https://4652923.fls.doubleclick.net/activityi;src=4652923;type=2015_0;cat=donate0;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none">');
    iframe.appendTo('body');

}

jQuery(function(){
    jQuery('#overlay-submit').bind('click', function(){

    });
});


//jQuery('<iframe src="https://4652923.fls.doubleclick.net/activityi;src=4652923;type=2015_0;cat=home0;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none">').appendTo('body');


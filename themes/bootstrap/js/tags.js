/**
 * Created by Upwardstech on 6/24/15.
 */

jQuery(document).ready(function($) {
   /* jQuery('input.zip_sub').click(function(event) {
        var tags = '' +
            '<script type="text/javascript">' +
            'var axel = Math.random() + "";' +
            'var a = axel * 10000000000000;' +
            'document.write(' +
            '<iframe></iframe>' +
            ');' +
            '</script>' +
            '<noscript>' +
            '<iframe src=""https://4652923.fls.doubleclick.net/activityi;src=4652923;type=2015_0;cat=involve0;ord=1?"" width=""1"" height=""1"" frameborder=""0"" style=""display:none""></iframe>' +
            '</noscript>' +
            '<!-- End of DoubleClick Floodlight Tag: Please do not remove -->';

        $( "#tags" ).append( tags );
    });*/
/*
    if (lochash == ''){
        var tags = "<script type='text/javascript'>" + " var axel = Math.random() + ''; var a = axel * 10000000000000; docum" + "</" + "script>";
        $('#tags').append(tags);
        var tags = "<script type='text/javascript'>";
        tags+="var axel = Math.random() + '';";
        tags+="<";
        tags+="/script>";
        $( "#tags" ).append( tags );
    }
*/

    var lochash = window.location.hash;
    var hurl = window.location.host ;

    if(location.pathname == "/" && lochash == "") {
        var tags ='<script type="text/javascript"> ';
            tags +='var axel = Math.random() + "";';
            tags +='var a = axel * 10000000000000;';
            tags +="document.write('<iframe src=\"https://4652923.fls.doubleclick.net/activityi;src=4652923;type=2015_0;cat=home0;ord=' + a + '?\" width=\"1\" height=\"1\" frameborder=\"0\" style=\"display:none\"></iframe>');";
            tags +="<noscript>";
            tags += "<iframe src=\"https://4652923.fls.doubleclick.net/activityi;src=4652923;type=2015_0;cat=home0;ord=1?\" width=\"1\" height=\"1\" frameborder=\"0\" style=\"display:none\"></iframe>";
            tags +="</noscript>";
            tags +=' </script>';
        $( "#tags" ).append( tags );


    }


});
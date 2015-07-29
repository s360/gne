<?php
/**
 * @file
 * Default theme implementation to display a single Drupal page.
 *
 * The doctype, html, head and body tags are not in this template. Instead they
 * can be found in the html.tpl.php template in this directory.
 *
 * Available variables:
 *
 * General utility variables:
 * - $base_path: The base URL path of the Drupal installation. At the very
 *   least, this will always default to /.
 * - $directory: The directory the template is located in, e.g. modules/system
 *   or themes/bartik.
 * - $is_front: TRUE if the current page is the front page.
 * - $logged_in: TRUE if the user is registered and signed in.
 * - $is_admin: TRUE if the user has permission to access administration pages.
 *
 * Site identity:
 * - $front_page: The URL of the front page. Use this instead of $base_path,
 *   when linking to the front page. This includes the language domain or
 *   prefix.
 * - $logo: The path to the logo image, as defined in theme configuration.
 * - $site_name: The name of the site, empty when display has been disabled
 *   in theme settings.
 * - $site_slogan: The slogan of the site, empty when display has been disabled
 *   in theme settings.
 *
 * Navigation:
 * - $main_menu (array): An array containing the Main menu links for the
 *   site, if they have been configured.
 * - $secondary_menu (array): An array containing the Secondary menu links for
 *   the site, if they have been configured.
 * - $breadcrumb: The breadcrumb trail for the current page.
 *
 * Page content (in order of occurrence in the default page.tpl.php):
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title: The page title, for use in the actual HTML content.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 * - $messages: HTML for status and error messages. Should be displayed
 *   prominently.
 * - $tabs (array): Tabs linking to any sub-pages beneath the current page
 *   (e.g., the view and edit tabs when displaying a node).
 * - $action_links (array): Actions local to the page, such as 'Add menu' on the
 *   menu administration interface.
 * - $feed_icons: A string of all feed icons for the current page.
 * - $node: The node object, if there is an automatically-loaded node
 *   associated with the page, and the node ID is the second argument
 *   in the page's path (e.g. node/12345 and node/12345/revisions, but not
 *   comment/reply/12345).
 *
 * Regions:
 * - $page['help']: Dynamic help text, mostly for admin pages.
 * - $page['highlighted']: Items for the highlighted content region.
 * - $page['content']: The main content of the current page.
 * - $page['sidebar_first']: Items for the first sidebar.
 * - $page['sidebar_second']: Items for the second sidebar.
 * - $page['header']: Items for the header region.
 * - $page['footer']: Items for the footer region.
 *
 * @see bootstrap_preprocess_page()
 * @see template_preprocess()
 * @see template_preprocess_page()
 * @see bootstrap_process_page()
 * @see template_process()
 * @see html.tpl.php
 *
 *
 * @ingroup themeable
 */
?>
<?php
drupal_add_css($directory.'/js/slick/slick.css', array('group' => CSS_THEME, 'every_page' => FALSE));
drupal_add_css($directory.'/js/slick/slick-theme.css', array('group' => CSS_THEME, 'every_page' => FALSE));
?>
<div id="wrap-page">
    <header id="header" role="banner" class="">
        <div class="navbar navbar-default navbar-fixed-top">
            <div class="navbar-header">
                <a class="logo navbar-btn pull-left" href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>">
                    <?php print '<img src="'.base_path() . path_to_theme() .'/images/gne_logo.png">'; ?>
                </a>

                <!-- .btn-navbar is used as the toggle for collapsed navbar content -->

            </div>
            <div class="pull-right">

                <a href="/#!/donate" id="donate-nav" class="btn-donate" style="cursor: pointer">Donate</a>
                <a href="/#!/join" id="join" class="btn-donate" style="margin-right: 5px;cursor: pointer;">Join</a>
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse" style="display: block">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <?php if (!empty($primary_nav) || !empty($secondary_nav) || !empty($page['navigation'])): ?>
                    <div class="top-navigation">
                        <nav role="navigation">
                            <?php if (!empty($page['navigation'])): ?>
                                <div class="slider-nav">
                                    <?php print render($page['navigation']); ?>
                                </div>
                            <?php endif; ?>

                        </nav>
                    </div>
                <?php endif; ?>
            </div>

        </div>
    </header>
    <div class="main-container">
        <div id="stories">
            <div class="page1-container">
                <div class="story_pics">
                    <div class="col-sm-4 col-xs-4 onethird one">
                        <div class="portrait-link one">
                            <a href="#!/hanno" class="front-page-btn">Sgt. Hanno's Story</a>
                        </div>
                    </div>
                    <div class="col-sm-4 col-xs-4 onethird two">
                        <div class="portrait-link two"><a href="/#!/adrianna" class="front-page-btn">Adrianna's Story</a></div>
                    </div>
                    <div class="col-sm-4 col-xs-4 onethird three">
                        <div class="portrait-link three"><a href=/"#!/jahnique" class="front-page-btn">Jahnique's Story</a></div>
                    </div>
                </div>
                <div class="bottom-overlay">
                    <h2 class="page1-title">Meet real families struggling with hunger - every day.</h2>
                    <div class="col-sm-4 col-xs-4 page1-btn-container"><a href="/#!/hanno" class="front-page-btn">Sgt. Hanno's Story</a></div>
                    <div class="col-sm-4 col-xs-4 page1-btn-container"><a href="/#!/adrianna" class="front-page-btn">Adrianna's Story</a></div>
                    <div class="col-sm-4 col-xs-4 page1-btn-container"><a href="/#!/jahnique" class="front-page-btn">Jahnique's Story</a></div>
                </div>
            </div></div>
        <div class="">
            <section class="wrap-content">
                <?php print render($page['content']); ?>

            </section>
        </div>
    </div>


<footer id="footer">
  <?php //print render($page['footer']); ?>
    <div class="social pull-left"></div>
    <div class="copyright pull-right">
        <ul>
            <li><a target="_blank" href="https://www.facebook.com/GreatNationsEat"><?php print '<img id="social-footer" class="fb-footer" src="'.base_path() . path_to_theme() .'/images/FB-button.png" alt="facebook">'; ?></a></li>
            <li><a target="_blank" href="https://twitter.com/GreatNationsEat"><?php print '<img id="social-footer" class="tw-footer" src="'.base_path() . path_to_theme() .'/images/TW-button.png" alt="Twitter">'; ?></a></li>
            <li><a target="_blank" href="https://www.youtube.com/channel/UCG9wH0Fv57djKxjC0UhEehQ/feed"><?php print '<img id="social-footer" class="yt-footer" src="'.base_path() . path_to_theme() .'/images/YT-button.png" alt="youtube">'; ?></a></li>
            <li><a target="_blank" href="https://instagram.com/greatnationseat"><?php print '<img id="social-footer" class="in-footer" src="'.base_path() . path_to_theme() .'/images/IN-button.png" alt="instagram">'; ?></a></li>
            <li><a class="press-footer" target="_blank" href="https://greatnationseat.org/press/">Press</a></li>
            <li><a href="mailto:info@greatnationseat.org?subject=Great Nations Eat website">Contact</a></li>
            <li><a class="privacy-footer" target="_blank" href="https://greatnationseat.org/privacy.html">Privacy</a></li>
            <li><a href="http://www.nokidhungry.org/" target="_blank" style="text-decoration:none;">&copy; 2015 GreatNationsEat.org - A Campaign of Share Our Strength</a></li>
        </ul>
    </div>
</footer>

</div>
<script type="text/javascript">
    jQuery(document).ready(function() {
        jQuery('#stories').height(jQuery(window).height());
        jQuery('#donate-navbar').click(function(e) {
            e.preventDefault();
            jQuery('#donation-overlay-container').removeClass('hidden');
        });

        /**********DONATION*********/
        //var nextDonate = jQuery('#key-next-step');
        var nextDonate = jQuery('.key-next-step');
        var donateCopy = jQuery('.donate-copy-col');
        var donateFunc = jQuery('.donate-func-col');
        //var stepOne    = jQuery('#step-one');
        var stepOne    = jQuery('.step-one');
        //var stepTwo    = jQuery('#step-two');
        var stepTwo    = jQuery('.step-two');
        //var stepThree  = jQuery('#step-three');
        var stepThree  = jQuery('.step-three');
        var amountSelected = false;

        jQuery('#sustaining_gift').click(function() {
            if(jQuery('#sustaining_gift').prop('checked')){
                jQuery('#sustaining_duration').val('0');
                console.log('sustaining');
            }else {
                jQuery('#sustaining_duration').val('');
            }
        });

        // function showIfChecked(checkCtrl, targetDiv) {
        //    if (document.getElementById(checkCtrl).checked == true) {
        //      document.getElementById(targetDiv).style.display = "inline";
        //    } else {
        //      document.getElementById(targetDiv).style.display = "none";
        //    }
        // 	}
        // jQuery('#one_time_gift').click(function() {
        // 	showIfChecked('sustaining_gift', 'sustaining_duration_field');
        // });
        // jQuery('#sustaining_gift').click(function() {
        // 	showIfChecked('sustaining_gift', 'sustaining_duration_field');
        // });

        if(!jQuery('body').find('.wrap-amount').find('input[type="radio"]').is(':checked')){
            nextDonate.addClass('btnDisabledHref');
        } else {
            nextDonate.removeClass('btnDisabledHref');
        }

        nextDonate.click(function(e) {
            console.log("Next pressed from: " + jQuery(this).parent().attr('id'));
            if(jQuery(this).hasClass('btnDisabledHref')){
                e.preventDefault();
                return;
            }
            if(jQuery('input[name="other_amount"]').length > 0 && !jQuery('input[name="other_amount"]').val()){
                e.preventDefault();
                return;
            }
            donateCopy.addClass('hidden');
            donateFunc.addClass('full-width');
        });

        stepOne.click(function() {
            donateFunc.removeClass('full-width');
            donateCopy.removeClass('hidden');
        });

        stepTwo.add(stepThree).click(function() {
            if(jQuery(this).css('cursor', 'pointer')) {
                donateCopy.addClass('hidden');
                donateFunc.addClass('full-width');
            }
        });

        //reset from donation
        jQuery('#donate-nav').click(function() {
            jQuery('.donation-form')[0].reset();
        });

    });
</script>

<script type="text/javascript">
    jQuery('#donate-close2').click( function() { window.location = "/#!/"; } );
    // var formId = "12181";


    //TODO: Clean this up and put in .js file

    var petitionOverlay  			 = document.getElementById('petition-overlay-container');
    var petitionClose 	 			 = document.getElementById('close-petition');
    var petitionButton   			 = document.getElementById('join');
    var petitionButton2  			 = document.getElementById('join-act');
    var thankContainer   			 = document.getElementById('thank-container');
    var donateThankContainer   = document.getElementById('donate-thank-container');
    var thankClose 	     			 = document.getElementById('thank-close');
    //var donateThankClose 			 = document.getElementById('thank-donate-close');
    var donateButton   	 			 = document.getElementById('donate-nav');
    var donateOverlay  	 			 = document.getElementById('donation-overlay-container');
    var donateOverlay2 	 			 = document.getElementById('block-donation-form-overlay');
    var donateClose 	 	 			 = document.getElementById('donate-close');
    var screeningClose   			 = document.getElementById('screening-close');
    var screeningOverlay 			 = document.getElementById('screening-container');
    var screeningSubmit  			 = document.getElementById('screening-submit');
    var screeningButton  			 = document.getElementById('host-screening');

    //donateThankClose.addEventListener('click', function() {
    //    donateThankContainer.classList.add('hidden');
    //});
    donateButton.addEventListener('click', function() {
        donateOverlay.classList.remove('hidden');
        donateOverlay2.classList.add('hidden');
    });
</script>
<script type="text/javascript">
    // RELOADS WEBPAGE WHEN MOBILE ORIENTATION CHANGES
    window.onorientationchange = function() {
        var orientation = window.orientation;
        switch(orientation) {
            case 0: window.location.reload();
                break;
            case 90: window.location.reload();
                break;
            case -90: window.location.reload();
                break;
        }
    }
</script>

<script>
 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
 (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
 m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
 })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

 ga('create', 'UA-60504111-1', 'auto');
 ga('send', 'pageview');

</script>
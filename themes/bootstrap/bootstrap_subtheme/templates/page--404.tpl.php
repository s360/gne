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
<!--
Start of DoubleClick Floodlight Tag: Please do not remove
Activity name of this tag: 404 Page Not Found > Landing Page
URL of the webpage where the tag is expected to be placed: https://greatnationseat.org/
This tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.
Creation Date: 06/23/2015
-->
<script type="text/javascript">
    var axel = Math.random() + "";
    var a = axel * 10000000000000;
    document.write('<iframe src="https://4652923.fls.doubleclick.net/activityi;src=4652923;type=2015_0;cat=error404;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
</script>
<noscript>
    <iframe src="https://4652923.fls.doubleclick.net/activityi;src=4652923;type=2015_0;cat=error404;ord=1?" width="1" height="1" frameborder="0" style="display:none"></iframe>
</noscript>
<!-- End of DoubleClick Floodlight Tag: Please do not remove -->
<div id="404">
<header id="header" role="banner" class="">
    <div class="navbar navbar-default navbar-fixed-top">
        <div class="navbar-header">
            <a class="logo navbar-btn pull-left" href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>">
                <?php print '<img  id="desktop-logo" src="'.base_path() . path_to_theme() .'/images/gne_logo.png">'; ?>
                <!-- <?php print '<img  id="mobile-logo" src="'.base_path() . path_to_theme() .'/images/gne_logo_white.png">'; ?>-->
            </a>

            <!-- .btn-navbar is used as the toggle for collapsed navbar content -->

        </div>
        <div class="pull-right">

            <a href="#!/donate" id="donate-nav" class="btn-donate" style="cursor: pointer">Donate</a>
            <a href="#!/join" id="join" class="btn-donate" style="margin-right: 5px;cursor: pointer;">Join</a>
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
    <div class="">
        <section class="wrap-homepage">
            <?php print render($page['content']); ?>

        </section>
    </div>
</div>


<footer id="footer">
    <?php //print render($page['footer']); ?>
    <div class="social pull-left"></div>
    <div class="copyright pull-right">
        <ul>
            <li><a target="_blank" href="https://www.facebook.com/GreatNationsEat"><?php print '<img id="social-footer" src="'.base_path() . path_to_theme() .'/images/FB-button.png" alt="facebook">'; ?></a></li>
            <li><a target="_blank" href="https://twitter.com/GreatNationsEat"><?php print '<img id="social-footer" src="'.base_path() . path_to_theme() .'/images/TW-button.png" alt="Twitter">'; ?></a></li>
            <li><a target="_blank" href="http://greatnationseat.org/privacy.html">Privacy</a></li>
            <li><a href="#">&copy; 2015 GreatNationsEat.org</a></li>
        </ul>
    </div>
</footer>

</div>

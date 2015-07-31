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
<div class="main-container container" style="overflow-y: auto;">

    <header role="banner" id="page-header">
        <?php if (!empty($site_slogan)): ?>
            <p class="lead"><?php print $site_slogan; ?></p>
        <?php endif; ?>

        <?php print render($page['header']); ?>
    </header> <!-- /#page-header -->

    <div class="row">

        <?php if (!empty($page['sidebar_first'])): ?>
            <aside class="col-sm-3" role="complementary">
                <?php print render($page['sidebar_first']); ?>
            </aside>  <!-- /#sidebar-first -->
        <?php endif; ?>

        <section<?php print $content_column_class; ?>>
            <?php if (!empty($page['highlighted'])): ?>
                <div class="highlighted jumbotron"><?php print render($page['highlighted']); ?></div>
            <?php endif; ?>
            <?php if (!empty($breadcrumb)): print $breadcrumb; endif;?>
            <a id="main-content"></a>
            <?php print render($title_prefix); ?>
            <?php if (!empty($title)): ?>
                <h1 class="page-header"><?php print $title; ?></h1>
            <?php endif; ?>
            <?php print render($title_suffix); ?>
            <?php print $messages; ?>
            <?php if (!empty($tabs)): ?>
                <?php print render($tabs); ?>
            <?php endif; ?>
            <?php if (!empty($page['help'])): ?>
                <?php print render($page['help']); ?>
            <?php endif; ?>
            <?php if (!empty($action_links)): ?>
                <ul class="action-links"><?php print render($action_links); ?></ul>
            <?php endif; ?>
            <?php print render($page['content']); ?>
        </section>

        <?php if (!empty($page['sidebar_second'])): ?>
            <aside class="col-sm-3" role="complementary">
                <?php print render($page['sidebar_second']); ?>
            </aside>  <!-- /#sidebar-second -->
        <?php endif; ?>

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

<script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-60504111-1', 'auto');
    ga('send', 'pageview');

</script>
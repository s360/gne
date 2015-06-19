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
<div id="homepage">
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

           <a href="!#/donate" id="donate-nav" class="btn-donate" style="cursor: pointer">Donate</a>
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
                <div class="btn-nav">
                    <button type="button" data-role="none" class="arrow_left" aria-label="prev" >Prev</button>
                    <button type="button" data-role="none" class="arrow_right" aria-label="next" >Next</button>
                </div>
            </section>
        </div>
</div>

<!-- PETITION OVERLAY -->
<div id="petition-overlay-container" class="petition-overlay-container hidden">
    <div class='full_overlay'></div>
    <div class="petition-container">
        <span id="close-petition" class="close-petition"></span>
        <div class="logo-container-mobile visible-xs"><img id="petition-logo" src="http://apatt.upward.st/sites/all/themes/bootstrap/images/gne_logo.png" alt="logo" /></div>

        <h1 class="petition-header hidden-xs">Hunger is closer than you think.</h1>
        <p class="petition-subheader hidden-xs">Hunger exists in every community and affects 1 in 6 Americans.</p>
        <p class="petition-subheader two hidden-xs">That doesn't happen in any other developed nation. It shouldn't happen here.</p>
        <h2 class="petition-cta">Add your name to the list of americans who demand we do better.</h2>
        <div class="petition-form-container">
            <form id="petition-form" name="petition-form">
                <div class="col-sm-4 col-xs-6">
                    <span class="petition-x">X</span><input id="petition-name" name="name" class="petition-input" placeholder="Judy Reeder"/>
                    <label class="petition-label">(Name)</label>
                </div>
                <div class="col-sm-4 col-xs-6">
                    <span class="petition-x">X</span><input id="petition-email" name="email" class="petition-input" placeholder="jreeder@hotmail.com"/>
                    <label class="petition-label">(Email)</label>
                </div>
                <div class="col-sm-4 col-xs-12 zip">
                    <span class="petition-x">X</span><input id="petition-zip" name="zip" class="petition-input" placeholder="98270" />
                    <label class="petition-label">(Zip)</label>
                </div>
                <button id="overlay-submit" class="petition-submit">Join The Movement</button>
            </form>
        </div>
    </div>
</div>
<!-- END PETITION OVERLAY -->
<!-- DONATION OVERLAY -->
<div class="donation-container" style="display: none;">
    <div class="donation-copy-container">
        <h1 class="donate-title">HUNGER HURTS KIDS EVERY DAY.</h1>
        <h1 class="donate-title">YOUR DONATION HELPS FEED THEM.</h1>
        <p class="donate-copy1">Your tax-deductible gift will provide vulnerable kids with nutritious food and teach their families how to cook healthy, affordable meals.</p>
        <p class="donate-copy2">Every $10 you give can provide up to 100 meals for a child who is still facing hunger.</p>

    </div>
    <div class="donation-dynamic-container">
        <div class="static-donation-container">
            <span class="donate-close">X</span>

            <nav class="donate-page-selector">
                <div class="amount active"></div>
                <div class="billing"></div>
                <div class="cc-info"></div>
            </nav>

        </div>
        <div class="donate-amount-container">
            <form class="luminateApi donation-form" method="POST" action="https://secure.nokidhungry.org/site/CRDonationAPI" data-luminateApi='{"callback": "donateCallback"}'>
                <input type="hidden" name="method" id="method" value="donate" />
                <input type="hidden" name="form_id" id="form_id" value="" />
                <input type="hidden" name="validate" value="true" />
                <fieldset class="donate-amount-form" id="donation_level">
                    <legend class="donate-amount-header">Select an amount</legend>
                    <!-- Gets overwritten by convio-start.js - used for local testing-->
                    <ul class="donate-amount-ul">
                        <li><input type="radio" name="level_id" value="15628" /> <label class="donate-amount">$5</label></li>
                        <li><input type="radio" name="level_id" value="15629" /> <label class="donate-amount">$10</label></li>
                        <li><input type="radio" name="level_id" value="15630" /> <label class="donate-amount">$20</label></li>
                        <li><input type="radio" name="level_id" value="15631" /> <label class="donate-amount">$30</label></li>
                        <li><input type="radio" name="level_id" value="15632" /> <label class="donate-amount">$50</label></li>
                        <li><input type="radio" name="level_id" value="15633" /> <label class="donate-amount">$100</label></li>
                        <li><input type="radio" name="level_id" value="15634" /> <label class="donate-amount">$200</label></li>
                        <li><input type="radio" name="level_id" value="15635" /> <label class="donate-amount">$500</label></li>
                        <li><input type="radio" id="level-other" name="level_id" value="15633" /><label for="level-other" class="level-other">other amount</label></li>
                        <li class="other-input-li"><input type="text" id="other-amount" name="other_amount" class="other-amount" disabled /></li>
                    </ul>

                </fieldset>

                <fieldset class="donate-billing-info" style="display:none;">
                    <legend class="billing-info-header">Billing Info</legend>
                    <input type="text" placeholder="First Name*" name="billing.name.first" class="input-half">
                    <input type="text" placeholder="Last Name*" name="billing.name.last" class="input-half">
                    <input type="text" placeholder="Billing Street 1*" name="billing.address.street1" class="input-full">
                    <input type="text" placeholder="Street 2" name="billing.address.street2" class="input-full">
                    <input type="text" placeholder="City*" name="billing.address.city" class="input-full">

                    <div>
                        <select name="billing.address.state" class="input-full">
                            <option>State</option>
                            <option value="AK">AK</option>
                            <option value="AL">AL</option>
                            <option value="AR">AR</option>
                            <option value="AZ">AZ</option>
                            <option value="CA">CA</option>
                            <option value="CO">CO</option>
                            <option value="CT">CT</option>
                            <option value="DC">DC</option>
                            <option value="DE">DE</option>
                            <option value="FL">FL</option>
                            <option value="GA">GA</option>
                            <option value="HI">HI</option>
                            <option value="IA">IA</option>
                            <option value="ID">ID</option>
                            <option value="IL">IL</option>
                            <option value="IN">IN</option>
                            <option value="KS">KS</option>
                            <option value="KY">KY</option>
                            <option value="LA">LA</option>
                            <option value="MA">MA</option>
                            <option value="MD">MD</option>
                            <option value="ME">ME</option>
                            <option value="MI">MI</option>
                            <option value="MN">MN</option>
                            <option value="MO">MO</option>
                            <option value="MS">MS</option>
                            <option value="MT">MT</option>
                            <option value="NC">NC</option>
                            <option value="ND">ND</option>
                            <option value="NE">NE</option>
                            <option value="NH">NH</option>
                            <option value="NJ">NJ</option>
                            <option value="NM">NM</option>
                            <option value="NV">NV</option>
                            <option value="NY">NY</option>
                            <option value="OH">OH</option>
                            <option value="OK">OK</option>
                            <option value="OR">OR</option>
                            <option value="PA">PA</option>
                            <option value="RI">RI</option>
                            <option value="SC">SC</option>
                            <option value="SD">SD</option>
                            <option value="TN">TN</option>
                            <option value="TX">TX</option>
                            <option value="UT">UT</option>
                            <option value="VA">VA</option>
                            <option value="VT">VT</option>
                            <option value="WA">WA</option>
                            <option value="WI">WI</option>
                            <option value="WV">WV</option>
                            <option value="WY">WY</option>
                            <option value="AS">AS</option>
                            <option value="FM">FM</option>
                            <option value="GU">GU</option>
                            <option value="MH">MH</option>
                            <option value="MP">MP</option>
                            <option value="PR">PR</option>
                            <option value="PW">PW</option>
                            <option value="VI">VI</option>
                            <option value="AA">AA</option>
                            <option value="AE">AE</option>
                            <option value="AP">AP</option>
                            <option value="AB">AB</option>
                            <option value="BC">BC</option>
                            <option value="MB">MB</option>
                            <option value="NB">NB</option>
                            <option value="NL">NL</option>
                            <option value="NS">NS</option>
                            <option value="NT">NT</option>
                            <option value="NU">NU</option>
                            <option value="ON">ON</option>
                            <option value="PE">PE</option>
                            <option value="QC">QC</option>
                            <option value="SK">SK</option>
                            <option value="YT">YT</option>
                            <option value="None">None</option>
                        </select>
                    </div>
                    <input type="text" placeholder="Zip/Postal Code" name="billing.address.zip" class="input-full">
                    <input type="text" placeholder="Email Address*" name="donor.email" class="input-full">

                    <div class="checkbox-wrap">
                        <label>
                            <input type="checkbox" name="donor.email_opt_in" value="true" checked> Yes, I'd like to receive email from American Health Society
                        </label>
                    </div>
                    <div class="checkbox-wrap">
                        <label>
                            <input type="checkbox" name="df_preview" value="true" checked> Test Drive?
                        </label>
                    </div>
                </fieldset>
                <fieldset class="donate-cc-info" style="display:none;">
                    <legend class="cc-info-header">Payment Information</legend>
                    <input type="text" placeholder="Card Number" name="card_number" class="card-number">
                    <input type="text" placeholder="CVV"name="card_cvv" class="card-cvv">
                    <div>
                        <label>Expiration Date:</label>
                        <div>
                            <select name="card_exp_date_month">
                                <option>Month</option>
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                                <option value="07">07</option>
                                <option value="08">08</option>
                                <option value="09">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                        </div>
                        <div class="small-12 large-3 pull-3 columns">
                            <select name="card_exp_date_year">
                                <option>Year</option>
                                <option value="2013">2013</option>
                                <option value="2014">2014</option>
                                <option value="2015">2015</option>
                                <option value="2016">2016</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                            </select>
                        </div>
                    </div>



                    <div>
                        <button type="submit" class="btn btn-success complete-donation" id="donate-submit">Complete Donation</button>
                    </div>
                </fieldset>
        </div>
        </form>
        <nav class="next-step1">NEXT STEP</nav>
        <nav class="prev-step1" style="display:none;">PREVIOUS STEP</nav>
        <nav class="next-step2" style="display:none;">NEXT STEP</nav>
        <nav class="prev-step2" style="display:none;">PREVIOUS STEP</nav>
    </div>
</div>
<div class="donation-overlay-image" style="display:none;"></div>
<div class="donation-overlay" style="display:none;"></div>
<div id="thank-container" class="thankyou-overlay-container hidden">
    <span id="thank-close">X</span>
    <img class="thank-image" src="/sites/all/themes/bootstrap/images/join-thank.png" alt="Thank you image" />
    <div class="thank-share-container">
        <button class="thank-facebook-share">Facebook</button>
        <img class="thank-arrows" src="/sites/all/themes/bootstrap/images/arrows.png" alt="thank arrows"/>
        <button class="thank-twitter-share">Twitter</button>
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

<script type="text/javascript">
    // TODO: if petition showing and mobile - header should hide
    var petitionOverlay  = document.getElementById('petition-overlay-container');
    var petitionClose 	 = document.getElementById('close-petition');
    var petitionButton   = document.getElementById('join');
    var petitionButton2  = document.getElementById('join-act');
    var thankContainer   = document.getElementById('thank-container');
    var thankClose 	     = document.getElementById('thank-close');
    var storySubmit      = document.getElementById('story-submit');
    var overlaySubmit    = document.getElementById('overlay-submit');
    var orientation;
    thankClose.addEventListener('click', function() {
        thankContainer.classList.add('hidden');
    });
    storySubmit.addEventListener('click', function () {
        thankContainer.classList.remove('hidden');
    });
    overlaySubmit.addEventListener('click', function () {
        thankContainer.classList.remove('hidden');
        petitionOverlay.classList.add('hidden');
    });
    petitionButton.addEventListener('click', function() {
        petitionOverlay.classList.remove('hidden');
    });
    petitionButton2.addEventListener('click', function() {
        petitionOverlay.classList.remove('hidden');
    });
    petitionClose.addEventListener('click', function() {
        petitionOverlay.classList.add('hidden');
    });

    if(window.innerHeight > window.innerWidth && window.innerWidth < 768){
        console.log('portrait');
        orientation = 'portrait';
    }else {
        console.log('landscape');
        orientation = 'landscape';
    }
    window.addEventListener('orientationchange', function() {
        console.log('change');
        console.log(window.orientation);
    }, false);
    console.log(window.location);
</script>
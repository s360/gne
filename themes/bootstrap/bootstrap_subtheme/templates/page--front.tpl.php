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
drupal_set_title("Unite and Fight To End Hunger");
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
                <div class="btn-nav">
                    <button type="button" data-role="none" class="arrow_left" aria-label="prev" >Prev</button>
                    <button type="button" data-role="none" class="arrow_right" aria-label="next" >Next</button>
                </div>
            </section>
        </div>
</div>

<!-- PETITION OVERLAY -->
<div id="petition-overlay-container" class="petition-overlay-container">
    <div class='full_overlay'></div>
    <div class="petition-container">
        <span id="close-petition" class="close-petition"></span>
        <div class="logo-container-mobile visible-xs"><img id="petition-logo" src="/sites/all/themes/bootstrap/images/gne_logo.png" alt="logo" /></div>

        <h1 class="petition-header hidden-xs">Hunger is closer than you think.</h1>
        <p class="petition-subheader hidden-xs">Hunger exists in every community and affects 1 in 6 Americans.</p>
        <p class="petition-subheader two hidden-xs">That doesn't happen in any other developed nation. It shouldn't happen here.</p>
        <h2 class="petition-cta">Add your name to the list of americans who demand we do better.</h2>
        <div class="petition-form-container">
            <form id="petition-form" class="overlay-form" name="petition-form" method="POST" action="http://greatnationseat.org/api/convio/post.php">
            <input type="hidden" name="api_key" id="api_key" value="sosapikey" />
        		<input type="hidden" name="v" id="v" value="1.0" />
        		<input type="hidden" name="add_interest_ids" id="add_interest_ids" value="2641" />
        		<input type="hidden" name="login_name" id="login_name" value="apatt" /> 
        		<input type="hidden" name="login_password" id="login_password" value="test123456" /> 
        		<input type="hidden" name="response_format" id="response_format" value="json" />
        		<input type="hidden" name="add_group_ids" id="add_group_ids" value="104402,104361" />
        		<input type="hidden" name="name.first" id="first-name-overlay" />
       			<input type="hidden" name="name.last" id="last-name-overlay" />
                <div class="col-sm-4 col-xs-6 petition">
                    <span class="petition-x">X</span><input id="petition-name" name="name" class="petition-input nameOverlay"/>
                    <label class="petition-label">Full Name</label>
                </div>
                <div class="col-sm-4 col-xs-6 petition">
                    <span class="petition-x">X</span><input id="petition-email" name="primary_email" class="petition-input emailOverlay"/>
                    <label class="petition-label">Email (Required)</label>
                </div>
                <div class="col-sm-4 col-xs-12 zip">
                    <span class="petition-x">X</span><input id="petition-zip" name="primary_address.zip" class="petition-input" />
                    <label class="petition-label">Zip Code</label>
                </div>
                <div class="petition-sub">
                <button id="overlay-submit" class="petition-submit">Join The Movement</button>
              </div>
            </form>
        </div>
    </div>
</div>
<!-- END PETITION OVERLAY -->
<!-- DONATION OVERLAY -->
<div id="donation-overlay-container" class="donation-overlay-container hidden">
<div class='full_overlay'></div>
<div class="donation-container petition-container">
    <span id="donate-close" class="donate-close close-petition"></span>
    <div class="logo-container-mobile visible-xs"><img id="petition-logo" src="/sites/all/themes/bootstrap/images/gne_logo.png" alt="logo" /></div>
    <div class="col-md-6" id="donate-copy-col">
        <div class="donation-copy-container">
            <h1 class="donate-title petition-header hidden-xs">HUNGER HURTS KIDS EVERY DAY.</h1>
            <p class="donate-copy1 petition-subheader hidden-xs">Your tax-deductible gift will provide vulnerable kids with nutritious food and teach their families how to cook healthy, affordable meals.</p>
            <p class="donate-copy2 petition-subheader hidden-xs"><b>Every $10 you give can provide up to 100 meals for a hungry child.</b></p>
            <p class="donate-copy3 petition-subheader hidden-xs">All donations to Great Nations Eat support No Kid Hungry’s efforts to feed kids healthy food, every day.</p>
            <img src="/sites/all/themes/bootstrap/images/nkh-logo.gif">

        </div>
    </div>
    <div class="col-md-6" id="donate-func-col">
    <div class="donation-dynamic-container">
        <div class="static-donation-container">

            <!-- donation form by pdf -->

            <div class="stepwizard">
                <div class="stepwizard-row setup-panel">
                    <div class="stepwizard-step">
                        <a id="step-one" href="#step-1" type="button" class="btn btn-primary btn-circle">1</a>
                    </div>
                    <div class="stepwizard-step">
                        <a id="step-two" href="#step-2" type="button" class="btn btn-default btn-circle" disabled="disabled">2</a>
                    </div>
                    <div class="stepwizard-step">
                        <a id="step-three" href="#step-3" type="button" class="btn btn-default btn-circle" disabled="disabled">3</a>
                    </div>
                </div>
            </div>

            <form role="form" class="luminateApi donation-form" method="POST" action="https://secure.nokidhungry.org/site/CRDonationAPI" data-luminateApi='{"callback": "donateCallback"}'>
                <input type="hidden" name="method" id="method" value="donate">
								<input type="hidden" name="form_id" id="form_id" value="12860">
								<input type="hidden" name="validate" value="true">
                <div class="row setup-content" id="step-1">
                    <div class="col-xs-12">
                        <div class="col-md-12">
                            <h3 style="text-align: center;"> Select Amount</h3>
							
							<!-- AMOUNT FROM CONVIO -->
							 <div id="donation_level">
								
							 </div>
							 
                             
		<div class="nextBtn">
                            <img src="/sites/all/themes/bootstrap/images/blue-arrow.png" class="donate-arrow">
                            <a id="key-next-step" href="#" class="nextBtn-old">Next Step</a>
                            <img src="/sites/all/themes/bootstrap/images/blue-arrow.png" class="donate-arrow">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row setup-content " id="step-2">
                    <div class="col-xs-12">
                        <div class="col-md-12">
                            <h3 style="text-align: center">Enter your Information</h3>
                            <div class="form-inline">
                                <div class="form-group">
                                    <div class="col-md-6">
                                        <label class="sr-only control-label">First Name</label>
                                        <input maxlength="200" type="text"  required="required" name="billing.name.first" class="form-control" placeholder="First Name*" />
                                    </div>
                                    <div class="col-md-6">
                                        <label class="sr-only control-label">Last Name</label>
                                        <input maxlength="200" type="text" required="required"  name="billing.name.last" class="form-control" placeholder="Last Name*"  />
                                    </div>

                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-md-12">
                                    <label class="sr-only control-label">Billing Street 1*</label>
                                    <input maxlength="200" type="text"  required="required" name="billing.address.street1" class="form-control" placeholder="Billing Street 1*" />
                                </div>

                            </div>
                            <div class="form-group">
                                <div class="col-md-12">
                                <label class="sr-only control-label">Street 2</label>
                                <input maxlength="200" type="text"   name="billing.address.street2" class="form-control" placeholder="Street 2" />
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-md-12">
                                <label class="sr-only control-label">City*</label>
                                <input maxlength="200" type="text" required="required"  name="billing.address.city" class="form-control" placeholder="City*" />
                                </div>
                            </div>
                            <div class="form-inline">
                            <div class="form-group">
                                <div class="col-md-6">
                                    <label class="sr-only control-label">State</label>
                                    <select name="billing.address.state" class="input-full form-control">
                                        <option >State</option>
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
                                <div class="col-md-6">
                                    <label class="sr-only control-label">Zip/Postal Code</label>
                                    <input maxlength="200" type="text" required="required" name="billing.address.zip" class="form-control" placeholder="Zip/Postal Code*"  />
                                </div>
                            </div>
                            </div>
                            <div class="form-group">
                                <div class="col-md-12">
                                    <label class="sr-only control-label">Email Address*</label>
                                    <input maxlength="200" type="email" required="required" name="donor.email" class="form-control" placeholder="Email Address*" />
                                </div>
                            </div>
	<div class="nextBtn">
                            <img src="/sites/all/themes/bootstrap/images/blue-arrow.png" class="donate-arrow">
                            <a href="#" class="nextBtn-old">Next Step</a>
                            <img src="/sites/all/themes/bootstrap/images/blue-arrow.png" class="donate-arrow">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row setup-content" id="step-3">
                    <div class="col-xs-12">
                        <div class="col-md-12">
                            <div class="form-group">
                                <!--<img id="" src="/sites/all/themes/bootstrap/images/btn-pp.png" alt="logo" style="  width: 100%;"/>
                                <div class="row or-line"><div class="col-md-5"><hr></div> <div class="col-md-2"><h4>OR</h4></div><div class="col-md-5"><hr></div></div>-->
                                <h3 style="text-align: center">Enter Your Payment</h3>


                            </div>
                            <div class="form-group">
                                <div class="col-md-12">
                                    <label class="sr-only control-label">Credit Card Number*</label>
                                    <input maxlength="200" type="text" name="card_number" required="required" class="form-control card-number" placeholder="Credit Card Number*" />

                                </div>
                            </div>
                            <div class="form-inline">
                                <div class="form-group">
                                    <div class="col-md-3">
                                        <select name="card_exp_date_month" class="form-control">
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
                                    <div class="col-md-4">
                                        <select name="card_exp_date_year" class="form-control">
                                            <option>Year</option>
                                            <option value="2015">2015</option>
                                            <option value="2016">2016</option>
                                            <option value="2017">2017</option>
                                            <option value="2018">2018</option>
                                            <option value="2019">2019</option>
                                        </select>
                                    </div>
                                    <div class="col-md-5 ">
                                        <label class="sr-only control-label">CVV Code*</label>
                                        <input maxlength="200" type="text" required="required" name="card_cvv" class="card-cvv form-control" placeholder="CVV Code*"  />
                                    </div>
                                </div>
                            </div>
                            <input type="radio" id="one_time_gift" name="sustaining.frequency" value="" checked="true"/>One-time gift<br/>
        									  <input type="radio" id="sustaining_gift" name="sustaining.frequency" value="monthly"/> Monthly Gift<br/>
                						<div id="sustaining_duration_field" style="display:none;"><br />
        											<label for="sustaining_duration">Continue giving </label>
        											<select name="sustaining.duration" id="sustaining_duration">
					      						    <option value="3">3 months</option>
					      						    <option value="6">6 months</option>
					      						    <option value="12">1 year</option>
					      						    <option value="0">Indefinitely</option>
					      						  </select><br />
       											</div>
                            <div class="form-group">
                            <input type="hidden" name="send_receipt" value="true">
                                <input type="hidden" name="df_preview" value="test">
                                <button id="donate-submit" class="petition-submit complete-donation" style="width: 100%;">Donate to help end hunger</button>
                            </div>
                            <!-- Begin DigiCert site seal HTML and JavaScript -->
                            <div id="DigiCertClickID_d6BMwOpS" data-language="en">
                              <a href="https://www.digicert.com/ssl-certificate.htm">SSL Certificates</a>
                            </div>
                            <script type="text/javascript">
                            var __dcid = __dcid || [];__dcid.push(["DigiCertClickID_d6BMwOpS", "5", "s", "black", "d6BMwOpS"]);(function(){var cid=document.createElement("script");cid.async=true;cid.src="//seal.digicert.com/seals/cascade/seal.min.js";var s = document.getElementsByTagName("script");var ls = s[(s.length - 1)];ls.parentNode.insertBefore(cid, ls.nextSibling);}());
                            </script>
                            <!-- End DigiCert site seal HTML and JavaScript -->
                        </div>
                    </div>
                </div>
            </form>
            <!-- end donation form -->
        </div>
        </div>
    </div>
</div>
</div>

<div id="screening-container" class="screening-overlay-container hidden">
    <span id="screening-close"></span>
    <div class="screening-copy col-md-6">
        <h1 class="screening-header">Host a Screening</h1>
        <img src="/sites/all/themes/bootstrap/images/IMG_movie-title.jpg" alt="screening image"/>
        <p class="screening-p">Please enter your information and we'll contact you about hosting a screening of "A Place at the Table" in your community</p>
    </div>
    <div class="screening-form-container col-md-6">
        <form id="screening-form" name="screening-form" class="screening-form" method="POST" action="http://greatnationseat.org/api/convio/post.php">
        		<input type="hidden" name="api_key" id="api_key" value="sosapikey" />
						<input type="hidden" name="v" id="v" value="1.0" />
						<input type="hidden" name="add_interest_ids" id="add_interest_ids" value="2641" />
						<input type="hidden" name="login_name" id="login_name" value="apatt" /> 
						<input type="hidden" name="login_password" id="login_password" value="test123456" /> 
						<input type="hidden" name="response_format" id="response_format" value="json" />
						<input type="hidden" name="add_group_ids" id="add_group_ids" value="104402,104361,104423" />
            
            <input type="text" class="screening-input half one" name="name.first" placeholder="First Name" required/>
            <input type="text" class="screening-input half" name="name.last" placeholder="Last Name"required />
            <input type="text" class="screening-input" placeholder="organization" />
            <input type="text" class="screening-input email" name="primary_email" placeholder="Email Address" required/>
            <input type="text" class="screening-input" name="home_phone" placeholder="Contact Number" />
            <button id="screening-submit" class="btn-content screening">Submit Form</button>
        </form>
    </div>
    </div>
</div>
<div class="donation-overlay-image" style="display:none;"></div>
<div class="donation-overlay" style="display:none;"></div>
<div id="thank-container" class="thankyou-overlay-container hidden">
    <span id="thank-close"></span>
    <img class="thank-image" src="/sites/all/themes/bootstrap/images/join-thank.png" alt="Thank you image" />
    <div class="thank-share-container">
        <div class='sp_14354 sp_fb_large' ></div>
        <img class="thank-arrows hidden-xs" src="/sites/all/themes/bootstrap/images/arrows.png" alt="thank arrows"/>
        <div class='sp_14355 sp_tw_large' ></div>
    </div>
</div>
<div id="donate-thank-container" class="thankyou-overlay-container hidden">
    <span id="thank-donate-close"></span>
    <img class="thank-image" src="/sites/all/themes/bootstrap/images/donate-thank.png" alt="Thank you image" />
    <div class="thank-share-container">
        <div class='sp_14354 sp_fb_large' ></div>
        <img class="thank-arrows hidden-xs" src="/sites/all/themes/bootstrap/images/arrows.png" alt="thank arrows"/>
        <div class='sp_14355 sp_tw_large' ></div>
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
	jQuery(document).ready(function() {
		jQuery('.leaf.visible-xs.join').click(function() {
			jQuery('#petition-overlay-container').removeClass('hidden');
		});
		jQuery('#donate-navbar').click(function(e) {
			e.preventDefault();
			jQuery('#donation-overlay-container').removeClass('hidden');
		});
		jQuery('.story-join').click(function() {
			jQuery('#petition-overlay-container').removeClass('hidden');
		});
		jQuery('#act-add-voice').click(function() {
			jQuery('#petition-overlay-container').removeClass('hidden');
		});
	/**********DONATION*********/
		var nextDonate = jQuery('#key-next-step');
		var donateCopy = jQuery('#donate-copy-col');
		var donateFunc = jQuery('#donate-func-col');
		var stepOne    = jQuery('#step-one');
		var stepTwo    = jQuery('#step-two');
		var stepThree  = jQuery('#step-three');
		var amountSelected = false;

		function showIfChecked(checkCtrl, targetDiv) {
	    if (document.getElementById(checkCtrl).checked == true) {
	      document.getElementById(targetDiv).style.display = "inline";
	    } else {
	      document.getElementById(targetDiv).style.display = "none";
	    }
  	}
		jQuery('#one_time_gift').click(function() {
			showIfChecked('sustaining_gift', 'sustaining_duration_field');
		});
		jQuery('#sustaining_gift').click(function() {
			showIfChecked('sustaining_gift', 'sustaining_duration_field');
		});

		if(!jQuery('body').find('.wrap-amount').find('input[type="radio"]').is(':checked')){
			nextDonate.addClass('btnDisabledHref');
		} else {
			nextDonate.removeClass('btnDisabledHref');
		}
		
		nextDonate.click(function(e) {
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

        //petition overlay
        var petOverlay = jQuery("#petition-overlay-container");
        if( window.location.hash == ''){
            petOverlay.removeClass('hidden');
        }
	});
</script>

<script type="text/javascript">

    var formId = "12860";

    //TODO: Clean this up and put in .js file

    var petitionOverlay  			 = document.getElementById('petition-overlay-container');
    var petitionClose 	 			 = document.getElementById('close-petition');
    var petitionButton   			 = document.getElementById('join');
    var petitionButton2  			 = document.getElementById('join-act');
    var thankContainer   			 = document.getElementById('thank-container');
    var donateThankContainer   = document.getElementById('donate-thank-container');
    var thankClose 	     			 = document.getElementById('thank-close');
    var donateThankClose 			 = document.getElementById('thank-donate-close');
    var donateButton   	 			 = document.getElementById('donate-nav');
    var donateOverlay  	 			 = document.getElementById('donation-overlay-container');
    var donateClose 	 	 			 = document.getElementById('donate-close');
    var screeningClose   			 = document.getElementById('screening-close');
    var screeningOverlay 			 = document.getElementById('screening-container');
    var screeningSubmit  			 = document.getElementById('screening-submit');
    var screeningButton  			 = document.getElementById('host-screening');
    var orientation;

    thankClose.addEventListener('click', function() {
        thankContainer.classList.add('hidden');
    });
    donateThankClose.addEventListener('click', function() {
        donateThankContainer.classList.add('hidden');
    });
    screeningButton.addEventListener('click', function() {
        screeningOverlay.classList.remove('hidden');
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
    donateButton.addEventListener('click', function() {
        donateOverlay.classList.remove('hidden');
    });
    donateClose.addEventListener('click', function() {
        donateOverlay.classList.add('hidden');
    });
    screeningClose.addEventListener('click', function() {
        screeningOverlay.classList.add('hidden');
    })

    //TODO: Refresh browser on mobile rotate - utilize cookies/local storage to prevent petition overlay from showing up again
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


<script src="/sites/all/themes/bootstrap/js/convio.js"></script>
<script src="/sites/all/themes/bootstrap/js/convio-start.js"></script>
<script>
 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
 (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
 m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
 })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

 ga('create', 'UA-60504111-1', 'auto');
 ga('send', 'pageview');

</script>

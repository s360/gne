<?php
/**
 * Created by PhpStorm.
 * User: Upwardstech
 * Date: 7/15/15
 * Time: 10:09 AM
 */
$node = node_load($nid);
//var_dump($node);
$body_content = $node->body['und'][0]['value'];
$nid = $node->vid;
$title = $node->title;
$alias = drupal_get_path_alias('node/'.$nid);
$formID = $node->field_donation_form_id['und'][0]['value'];

?>
<!-- DONATION FORM FOR: <?php echo $alias; ?> -->
<div id="donation-overlay-container" class="donation-overlay-container <?php echo $alias; ?>">
<div class="full_overlay"></div>
<div class="donation-container petition-container">
<div class="donation-relative">
<span id="donate-close2" class="donate-close2 close-petition"></span>
<div class="logo-container-mobile visible-xs"><img id="petition-logo" src="/sites/all/themes/bootstrap/images/gne_logo.png" alt="logo" /></div>
<div class="col-md-6 donate-copy-col" id="donate-copy-col">
    <div class="donation-copy-container">
        <?php echo $body_content ?>

    </div>
</div>
<div class="col-md-6 donate-func-col" id="donate-func-col">
<div class="donation-dynamic-container">
<div class="static-donation-container">

<!-- donation form by pdf -->

<div class="stepwizard">
    <div class="stepwizard-row setup-panel">
        <div class="stepwizard-step">
            <a id="step-one" href="#step-1" type="button" class="btn btn-primary btn-circle step-one">1</a>
        </div>
        <div class="stepwizard-step">
            <a id="step-two" href="#step-2" type="button" class="btn btn-default btn-circle step-two" disabled="disabled">2</a>
        </div>
        <div class="stepwizard-step">
            <a id="step-three" href="#step-3" type="button" class="btn btn-default btn-circle step-three" disabled="disabled">3</a>
        </div>
    </div>
</div>

<form role="form" class="luminateApi donation-form" method="POST" action="https://secure.nokidhungry.org/site/CRDonationAPI" data-luminateApi='{"callback": "donateCallback"}'>
<input type="hidden" name="method" id="method" value="donate">
<input type="hidden" name="form_id" id="form_id" class="form_id" value=<?php echo $formID?>>
<input type="hidden" name="source" class="ref_source" value="">
<input type="hidden" name="sub_source" class="ref_sub_source" value="">
<input type="hidden" name="validate" value="true">
<div class="row setup-content" id="step-1">
    <div class="col-xs-12">
        <div class="col-md-12">
            <h3 style="text-align: center;"> Select Amount</h3>

            <!-- AMOUNT FROM CONVIO -->
            <div id="donation_level" class="donation_level">

            </div>


            <div id="key-next-step" class="key-next-step nextBtn">
                <img src="/sites/all/themes/bootstrap/images/blue-arrow.png" class="donate-arrow">
                <a  href="#" class="nextBtn-old">Next Step</a>
                <img src="/sites/all/themes/bootstrap/images/blue-arrow.png" class="donate-arrow">
            </div>
        </div>
    </div>
</div>
<div class="row setup-content" id="step-2">
    <div class="col-xs-12">
        <div class="col-md-12">
            <h3 style="text-align: center">Enter Billing Information</h3>
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
                    <label class="sr-only control-label">City*</label>
                    <input maxlength="200" type="text" required="required"  name="billing.address.city" class="form-control" placeholder="City*" />
                </div>
            </div>
            <div class="form-inline">
                <div class="form-group">
                    <div class="col-md-6">
                        <label class="sr-only control-label">State*</label>
                        <select name="billing.address.state" class="input-full form-control">
                            <option >State*</option>
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
            <div class="nextBtn step2">
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
                    <input maxlength="200" type="text" name="card_number" required="required" class="form-control card-number" placeholder="Credit Card Number*" autocomplete="off" />

                </div>
            </div>
            <div class="form-inline">
                <div class="form-group">
                    <div class="col-md-3">
                        <select name="card_exp_date_month" class="form-control">
                            <option>Month*</option>
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
                            <option>Year*</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                        </select>
                    </div>
                    <div class="col-md-5 ">
                        <label class="sr-only control-label">CVV Code*</label>
                        <input maxlength="200" type="text" required="required" name="card_cvv" class="card-cvv form-control" placeholder="CVV Code*" autocomplete="off" />
                    </div>
                </div>
            </div>

            <div class="monthly-container">
                <input type="checkbox" id="sustaining_gift" name="sustaining.frequency" value="monthly"/>&nbsp;Want to give monthly? A monthly gift does even more to help hungry kids.<br/>
                <input type="hidden" id="sustaining_duration" name="sustaining.duration" />
            </div>
            <div class="form-group">
                <input type="hidden" name="send_receipt" value="true">
                <!-- <input type="hidden" name="df_preview" value="test"> -->
                <button id="donate-submit" class="petition-submit complete-donation">Donate to help end hunger</button>
            </div>

        </div>
    </div>
</div>
</form>
<!-- end donation form -->
</div>
</div>
</div>
<div class="col-md-12 ssl-container">                            <!-- Begin DigiCert site seal HTML and JavaScript -->
    <div id="DigiCertClickID_d6BMwOpS" class="digicert-container" data-language="en">
        <a href="https://www.digicert.com/ssl-certificate.htm">SSL Certificates</a>
    </div>
    <script type="text/javascript">
        var __dcid = __dcid || [];__dcid.push(["DigiCertClickID_d6BMwOpS", "5", "s", "black", "d6BMwOpS"]);(function(){var cid=document.createElement("script");cid.async=true;cid.src="//seal.digicert.com/seals/cascade/seal.min.js";var s = document.getElementsByTagName("script");var ls = s[(s.length - 1)];ls.parentNode.insertBefore(cid, ls.nextSibling);}());
    </script>
    <!-- End DigiCert site seal HTML and JavaScript --></div>
</div>
</div>

</div>

<!-- END OF DONATION FORM FOR: <?php echo $alias; ?> -->

<div id="screening-container" class="screening-overlay-container hidden">
    <span id="screening-close"></span>
    <div class="screening-copy col-md-6">
        <h1 class="screening-header">Host a Screening</h1>
        <img src="/sites/all/themes/bootstrap/images/IMG_movie-title.jpg" alt="screening image"/>
        <p class="screening-p">Please enter your information and we'll contact you about hosting a screening of "A Place at the Table" in your community</p>
    </div>
    <div class="screening-form-container col-md-6">
        <form id="screening-form" name="screening-form" class="screening-form" method="POST" action="https://greatnationseat.org/api/convio/post.php">
            <input type="hidden" name="api_key" id="api_key" value="sosapikey" />
            <input type="hidden" name="v" id="v" value="1.0" />
            <input type="hidden" name="add_interest_ids" id="add_interest_ids" value="2641" />
            <input type="hidden" name="response_format" id="response_format" value="json" />
            <input type="hidden" name="add_group_ids" id="add_group_ids" value="104402,104361,104423" />
            <input type="hidden" name="source" class="ref_source" value="" />
            <input type="hidden" name="sub_source" class="ref_sub_source" value="" />

            <input type="text" class="screening-input half one" name="name.first" placeholder="First Name*" required/>
            <input type="text" class="screening-input half" name="name.last" placeholder="Last Name*"required />
            <input type="text" class="screening-input" placeholder="Organization" />
            <span class="screening-email-error hidden">*Invalid Email</span>
            <input type="text" class="screening-input email" name="primary_email" placeholder="Email Address*" required/>
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
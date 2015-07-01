(function ($) {
    /* define init variables for your organization */
    luminateExtend({
        apiKey: 'sosapikey',
        path: {
            nonsecure: 'https://secure.nokidhungry.org/site/',
            secure: 'https://secure.nokidhungry.org/site/'
        }
    });

    $(function () {
/* for email maybe?
    	<input type="hidden" name="send_receipt" id="send_receipt" value="false" />
      <input type="hidden" name="send_registration_email" id="send_registration_email" value="false" />
      */
		var formId = 12181;
        var tracking = '<iframe id="tracking-donate" src="https://4652923.fls.doubleclick.net/activityi;src=4652923;type=apatt;cat=donate1;qty=1;cost=[Revenue];ord=[OrderID]?" width="1" height="1" frameborder="0" style="display:none"></iframe>';
        /* UI handlers for the donation form example */
        if ($('.donation-form').length > 0) {
            luminateExtend.api.request({
                api: 'CRDonationAPI',
                data: 'method=getDonationFormInfo&form_id=' + formId,
                callback: function (data) {
                    //console.log(data.getDonationFormInfoResponse.donationLevels);
                    var donationLevelEl = $('#donation_level');
                    donationLevelEl.empty();
                    var html = "";
                    if (data.getDonationFormInfoResponse.donationLevels && data.getDonationFormInfoResponse.donationLevels.donationLevel.length > 0) {
                        for (var i = 0; i < data.getDonationFormInfoResponse.donationLevels.donationLevel.length; i++) {
                            var donationLevel = data.getDonationFormInfoResponse.donationLevels.donationLevel[i];
                            var donateAmount = donationLevel.amount.formatted;
                            var linebreakClass = "";
                            if (i === 2) { linebreakClass = " break-line"; }

                            if (donationLevel.userSpecified === "true") {
                                html += '<div class="radio-wrap wrap-amount' + linebreakClass + '">' +
                                '<input type="radio" id="level-other" name="level_id" value="' + donationLevel.level_id + '">' +
                                '<label class="donation_amount donation_amount_other " for="level-other"> Other </label>' +
                                '</div>' +

                                '<div  id="wrap-amount_other" style="display: none">' +
                                '<input type="text" id="other-amount" class="other-amount" name="other_amount" disabled>' +
                                '</div>';
                            } else {
                                html += '<div class="radio-wrap wrap-amount' + linebreakClass + '">' +
                                '<input type="radio" id="'+ donationLevel.level_id +'" name="level_id" value="' + donationLevel.level_id + '"> ' +
                                '<label class="donation_amount" for="'+ donationLevel.level_id +'" >' +
                                donateAmount.substr(0, donateAmount.length-3) +
                                '</label>' +
                                '</div>';
                            }

                        }
                    }
                    donationLevelEl.html(html);
                }
            });
            $('body').on('click', 'input[name="level_id"]', function () {
                if ($(this).is('#level-other')) {
                    $('#other-amount').removeAttr('disabled');
                    $('#other-amount').attr('name', 'other_amount');
                    $('#other-amount').focus();

                    $('#wrap-amount_other').css('display', 'inline-block');
                }
                else {
                    $('#other-amount').attr('disabled', 'disabled');
                    $('#other-amount').removeAttr('name');
                    $('#wrap-amount_other').css('display', 'none');
		    $('#key-next-step').removeClass('btnDisabledHref');
                }
		
            });

    	    $('body').on('keypress', 'input[name="other_amount"]', function(event){
        	  	if ( event.which == 13 ) {
        	  	   event.preventDefault();
        	  	}
        		var val = parseInt($(this).val());
        		if(val > 0){
        			$('#key-next-step').removeClass('btnDisabledHref');
        		} else {
        			$('#key-next-step').addClass('btnDisabledHref');
        		}
    	    });

            $('.donation-form').submit(function () {
                window.scrollTo(0, 0);
                $('#form_id').val(formId);
                $('#donate-submit').prop('disabled', true);
                $(this).hide();
                $(this).before('<div class="well donation-loading">' +
                'Loading ...' +
                '</div>');
            });
        }

        /* example: handle the donation form submission */
        /* if the donation is successful, display a thank you message */
        /* if there is an error with the donation, display it inline */
        window.donateCallback = {
            error: function (data) {
            		console.log('donate error');
            		console.log(data);
                $('#donation-errors').remove();

                $('.donation-form').prepend('<div id="donation-errors">' +
                '<div class="alert alert-danger">' +
                data.errorResponse.message +
                '</div>' +
                '</div>');

                $('.donation-loading').remove();
                $('.donation-form').show();
		        $('#donate-submit').prop('disabled', false);
            },
            success: function (data) {
            	var donationErrorMessage = '';
            		console.log(data);
                $('#donation-errors').remove();
		          	$('#donate-submit').prop('disabled', false);
                if (data.donationResponse.errors) {
                	if(data.donationResponse.errors.fieldError) {
                		donationErrorMessage += data.donationResponse.errors.fieldError;
                	}else if (data.donationResponse.errors.declineUserMessage) {
                		donationErrorMessage += data.donationResponse.errors.declineUserMessage;
                	} else {
                		donationErrorMessage += (data.donationResponse.errors.message + ' Please check your info.');
                	}
                  $('.donation-form').prepend('<div id="donation-errors">' + '<div class="alert alert-danger">' + donationErrorMessage + '</div>' + '</div>');

                    /*if (data.donationResponse.errors.fieldError) {
                        var fieldErrors = luminateExtend.utils.ensureArray(data.donationResponse.errors.fieldError);
                        $.each(fieldErrors, function () {
                            $('#donation-errors').append('<div class="alert alert-danger">' +
                            this +
                            '</div>');
                        });
                    }*/

                    $('.donation-loading').remove();
                    $('.donation-form').show();
                }
                else {
                	$('#donate-close').click(function() {
                    $('#donate-thank-container').removeClass('hidden');
                    $('#donation-overlay-container').addClass('hidden');
                	});

                    ga('send', 'event', 'donate', 'successful donation');

                    $('.donation-loading').remove();
                    $('.donation-form').before('<div class="alert alert-success">' +
                    'Your donation has been processed!' +
                    '</div>' +
                    '<div class="well">' +
                    '<p>Thank you for your donation of $' + data.donationResponse.donation.amount.decimal + '.</p>' +
                    (typeof data.donationResponse.donation.confirmation_code === 'string' ? '<p>Your confirmation code is ' + data.donationResponse.donation.confirmation_code + '.</p>' : '') +
                    '</div>');
                    var trackingHtml = tracking.replace('[OrderID]', data.donationResponse.donation.transaction_id).replace('[Revenue]', data.donationResponse.donation.amount.decimal);
                    
                    if($('#tracking-donate').length > 0) $('#tracking-donate').remove();

                    console.log(trackingHtml);
                    
                    $(trackingHtml).appendTo('body');
                }
            }
        };

        /* UI handlers for the Survey example */
        if ($('.survey-form').length > 0) {

            luminateExtend.api.request({
                api: 'CRSurveyAPI',
                data: 'method=getSurvey&survey_id=' + surveyId,
                requestType: 'POST',
                requiresAuth: true,
                callback: function (data) {
                    if(data.errorResponse && data.errorResponse.message){
                        $('.survey-form').prepend('<div id="survey-errors">' +
                        '<div class="alert alert-danger">' +
                        data.errorResponse.message +
                        '</div>' +
                        '</div>');
                    } else {

                        if (data.getSurveyResponse.survey.surveyQuestions && data.getSurveyResponse.survey.surveyQuestions.length > 0) {
                            var surveyContent = $('#survey-content');
                            surveyContent.empty();
                            var html = "";
                            for (var i = 0; i < data.getSurveyResponse.survey.surveyQuestions.length; i++) {
                                var question = data.getSurveyResponse.survey.surveyQuestions[i];
                                var questionName = 'question_' + question.questionId;
                                var req = question.questionRequired == "true" ? '<span class="required"> *</span>' : '';
                                if (question.hidden == "false") {
                                    html += '<div>' +
                                    '<label for="survey-' + questionName + '">' + question.questionText + req + '</label>' +
                                    '<div>' +
                                    '<input type="text" name="' + questionName + '" id="survey-' + questionName + '" data-convio-text="' + question.questionText + '"/>' +
                                    '</div>' +
                                    '</div>';
                                } else {
                                    html += '<input type="hidden" id="' + questionName + '" name="' + questionName + '" value="">';
                                }

                            }
                            surveyContent.html(html);
                        }
                    }

                }
            });
            $('#survey_id').val(surveyId);
            $('.survey-form').submit(function(e){

                e.preventDefault();

                if(!$(this).attr('id')) {
                    $(this).attr('id', 'luminateApi-' + new Date().getTime());
                }

                var formAction = $(this).attr('action'),
                    formActionQuery = formAction.split('?'),
                    formApiData = $(this).data('luminateapi'),

                    requestApi = (formActionQuery[0].indexOf('/site/') != -1) ?
                        formActionQuery[0].split('/site/')[1] : formActionQuery[0],
                    requestCallback,
                    requestContentType = $(this).attr('enctype'),
                    requestData = (formActionQuery.length > 1) ? formActionQuery[1] : '',
                    requestForm = '#' + $(this).attr('id');
                /**
                 * Checking the data
                 */
                var form = $(this);
                var email = null;
                $('[data-convio-text]').each(function(){
                    var nm  = $(this).data('convio-text').toLowerCase().split(' ').join('_');
                    if(nm == 'email'){
                        email = $(this).val();
                    } else {
                        $('<input />').attr('type', 'hidden')
                            .attr('name', "cons_"+nm)
                            .attr('value', $(this).val())
                            .appendTo(form);

                    }
                });


                if(formApiData) {
                    if(formApiData.callback) {
                        requestCallback = luminateExtend.utils.stringToObj(formApiData.callback);
                    }
                    if(formApiData.requiresAuth && formApiData.requiresAuth == 'true') {
                        requestRequiresAuth = true;
                    }
                    if(formAction.indexOf('https:') == 0 ||
                        (window.location.protocol == 'https:' && formAction.indexOf('http') == -1)) {
                        requestUseHTTPS = true;
                    }
                }
                var submitSurveyAPI = function(token, cons_id){
                    if(token){
                        uminateExtend.global.update({
                            auth: {
                                token: token,
                                type: 'auth'
                            }
                        });
                    }
                    if(cons_id) {
                        $('<input />').attr('type', 'hidden')
                            .attr('name', "cons_id")
                            .attr('value', cons_id)
                            .appendTo(form);
                    }
                    luminateExtend.api.request({
                        api: requestApi,
                        callback: submitSurveyCallback,
                        contentType: requestContentType,
                        data: requestData,
                        form: requestForm,
                        requestType: 'POST',
                        requiresAuth: true,
                        useHTTPS: true
                    });
                };
                var errorShow = function(errorMsg){
                    $('#survey-errors').remove();
                    $('.survey-form .form-group .alert').remove();

                    form.prepend('<div id="survey-errors">' +
                    '<div class="alert alert-danger">' +
                    (typeof errorMsg == 'string' ? errorMsg : errorMsg.errorResponse.message) +
                    '</div>' +
                    '</div>');

                    $('.survey-loading').remove();
                    form.show();
                };
                if(!email){
                    errorShow('Email required');
                    return;
                }
                window.scrollTo(0, 0);
                $(this).hide();
                $(this).before('<div class="well survey-loading">' +
                'Loading ...' +
                '</div>');

                luminateExtend.api.request({
                    api: 'cons',
                    callback: {
                        success: function(data){
                            console.log("SUCCESS");
                            //try update here
                            //luminateExtend.api({
                            //    api: 'cons',
                            //    callback: {
                            //        success: function (data) {
                            //            console.log(data);
                            //        },
                            //        error: function(data){
                            //            console.log("SOMETHINGS ERROR");
                            //        }
                            //    },
                            //    data: 'method=authenticateUser',
                            //    requestType: 'POST'
                            //});

                            submitSurveyAPI(data.createConsResponse.token);
                        },
                        error: function(data){
                            if(data.errorResponse && data.errorResponse.code == 11){
                                //try update here
                                luminateExtend.api({
                                        api: 'cons',
                                        callback: {
                                            success: function (data) {
                                                console.log(data.loginResponse.token);
                                            },
                                            error: function(data){
                                                console.log("SOMETHINGS ERROR");
                                            }
                                        },
                                        data: 'method=authenticateUser',
                                        requestType: 'POST'
                                });
                            } else {
                                errorShow(data);
                            }
                        }
                    },
                    data: 'method=create&primary_email='+email+'&get_single_sign_on_token=true',
                    requestType: 'POST',
                    requiresAuth: true
                });
            });
            /*
            $('.survey-form').submit(function (e) {
                //e.preventDefault();
                var form = $(this);
                var email = null;
                $('[data-convio-text]').each(function(){
                    var nm  = $(this).data('convio-text').toLowerCase().split(' ').join('_');
                    if(nm == 'email'){
                        email = $(this).val();
                    } else {
                        $('<input />').attr('type', 'hidden')
                            .attr('name', "cons_"+nm)
                            .attr('value', $(this).val())
                            .appendTo(form);

                    }
                });
                if(email){
                    luminateExtend.api({
                        async: false,
                        api: 'cons',
                        callback: {
                            success: function (data) {
                                console.log(data);
                                if (data.createOrUpdateConsResponse && data.createOrUpdateConsResponse.cons_id) {

                                    //luminateExtend.api({
                                    //    api: 'cons',
                                    //    callback: {
                                    //        success: function (data) {
                                    //            console.log(data.loginResponse.token);
                                    //        },
                                    //        error: function(data){
                                    //            console.log("SOMETHINGS ERROR");
                                    //        }
                                    //    },
                                    //    data: 'method=authenticateUser&primary_email='+email,
                                    //    requestType: 'POST'
                                    //});
                                } else {
                                    console.log("Not Good");
                                }
                            },
                            error: function(data){
                                e.preventDefault();
                                if(data.errorResponse && data.errorResponse.message){
                                    $('.survey-form').prepend('<div id="survey-errors">' +
                                    '<div class="alert alert-danger">' +
                                    data.errorResponse.message +
                                    '</div>' +
                                    '</div>');
                                }
                            }
                        },
                        data: 'method=create&primary_email='+email,
                        requestType: 'POST',
                        requiresAuth: true
                    });
                }

                window.scrollTo(0, 0);
                $(this).hide();
                $(this).before('<div class="well survey-loading">' +
                'Loading ...' +
                '</div>');

            });*/
        }

        /* example: handle the Survey form submission */
        /* if the Survey is submitted succesfully, display a thank you message */
        /* if there is an error, display it inline */
        window.submitSurveyCallback = {
            error: function (data) {
                $('#survey-errors').remove();
                $('.survey-form .form-group .alert').remove();

                $('.survey-form').prepend('<div id="survey-errors">' +
                '<div class="alert alert-danger">' +
                data.errorResponse.message +
                '</div>' +
                '</div>');

                $('.survey-loading').remove();
                $('.survey-form').show();
            },
            success: function (data) {
                $('#survey-errors').remove();
                $('.survey-form .form-group .survey-alert-wrap').remove();
                //console.log(data);
                if (data.submitSurveyResponse.success == 'false') {
                    $('.survey-form').prepend('<div id="survey-errors">' +
                    '<div class="alert alert-danger">' +
                    (data.submitSurveyResponse.errors ? data.submitSurveyResponse.errors.errorMessage : 'There was an error with your submission. Please try again.') +
                    '</div>' +
                    '</div>');

                    var surveyErrors = luminateExtend.utils.ensureArray(data.submitSurveyResponse.errors);
                    $.each(surveyErrors, function () {
                        if (this.errorField) {
                            $('input[name="' + this.errorField + '"]').closest('div')
                                .prepend('<div class="survey-alert-wrap">' +
                                '<div class="alert alert-danger">' +
                                this.errorMessage +
                                '</div>' +
                                '</div>');
                        }
                    });

                    $('.survey-loading').remove();
                    $('.survey-form').show();
                } else {
                    $('.survey-loading').remove();
                    $('.survey-form').before('<div class="alert alert-success">' +
                    'You\'ve been signed up!' +
                    '</div>' +
                    '<div class="well">' +
                    '<p>Thanks for joining. You should receive your first issue of the e-newsletter shortly.</p>' +
                        //(data.submitSurveyResponse.thankYouPageContent ? data.submitSurveyResponse.thankYouPageContent : '')+
                    '</div>');

                }
            }
        };

        /* bind any forms with the "luminateApi" class */
        luminateExtend.api.bind();
    });
})(jQuery);

/**
 * Custom Javascript for donation form
 */

function donate(){
    jQuery('div#donation-errors').remove();
    jQuery('div.alert.alert-success').remove();
    jQuery('div.well').remove();
    jQuery('.donation-form').show();
    jQuery('.stepwizard-step').find('a').attr('disabled', 'disabled');
    jQuery('#key-next-step').removeClass('btnDisabledHref').addClass('btnDisabledHref');
    jQuery('.stepwizard-step').find('a#step-one').trigger('click');
    jQuery('#other-amount').attr('disabled', 'disabled');
    jQuery('#other-amount').removeAttr('name');
    jQuery('#wrap-amount_other').css('display', 'none');
}

jQuery(document).ready(function($) {
    var navListItems = $('div.setup-panel div a'),
        allWells = $('.setup-content'),
        allNextBtn = $('.nextBtn');
        btnDOnate = $('#donate-nav');

    allWells.hide();
	
    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
            $item = $(this);
        jQuery("#step-one").removeAttr("disabled");

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-primary').addClass('btn-default');
            $item.addClass('btn-primary');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function(e){
	if($(this).hasClass('btnDisabledHref')){
		e.preventDefault();
		return;
	}
	if($('input[name="other_amount"]').length > 0 && !$('input[name="other_amount"]').val()){
		e.preventDefault();
		return;
	}
      var curStep = $(this).closest(".setup-content"),
          curStepBtn = curStep.attr("id"),
          nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
          curInputs = curStep.find("input[type='text'],input[type='url'], input[type='email']"),
          isValid = true;

        $(".form-group").removeClass("has-error");
        for(var i=0; i<curInputs.length; i++){
            if (!curInputs[i].validity.valid){
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }
      
        if (isValid)
            nextStepWizard.removeAttr('disabled').trigger('click');
    });

    setTimeout(function(){ $('div.setup-panel div a.btn-primary').trigger('click'); }, 1000);


    if( window.location.hash == '#!/donate'){
        donate();
    }

    btnDOnate.click(donate);

    jQuery("#donate-close").click(donate);

});


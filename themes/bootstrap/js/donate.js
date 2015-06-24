/**
 * Custom Javascript for donation form
 */


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

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-primary').addClass('btn-default');
            $item.addClass('btn-primary');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function(){
      var curStep = $(this).closest(".setup-content"),
          curStepBtn = curStep.attr("id"),
          nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
          curInputs = curStep.find("input[type='text'],input[type='url']"),
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

    $('div.setup-panel div a.btn-primary').trigger('click');





    if( window.location.hash == '#!/donate'){
        donate();
    }

    btnDOnate.click(donate);

    jQuery("#donate-close").click(donate);

    function donate(){
      /*  console.log('click')
        navListItems.has('#step-one').removeAttr("disabled")
        navListItems.has('#step-one').addClass("btn-primary");
        navListItems.attr("disabled", "disabled");
        navListItems.removeClass("btn-primary");

        if(allWells.has('#step-1')){
            $(this).css('display', 'block');
        }
        else{
            allWells.hide();
        }*/
    }
});


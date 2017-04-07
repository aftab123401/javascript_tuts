$('input.payment-plan-amount').number( true, 2 );

success: function (jsonResult) {

                $('.select-reservation-building').removeAttr('disabled');
                var result = '<option value="">Select Building</option>';
                $.each(jsonResult.data, function (key, value) {
                    result += '<option value=' + value.id + '>' + value.m_name + '</option>'
                });
                $('.select-reservation-building').html(result);
                $('.select-reservation-building').val('').change();

            }


 success: function (jsonResult) {
                
                if(jsonResult.buildingData != null){
                    $('.reservation-transfer-fee-input').val(jsonResult.buildingData.transfer_fee);
                }
                $('.select-reservation-unit').removeAttr('disabled');
                var result = '<option value="">Select Unit</option>';
                $.each(jsonResult.data, function (key, value) {
                    result += '<option value=' + value.id + '>' + value.unit_no + '</option>';
                });
                var disCount = $('.discount-input').val();
                if(disCount == ''){
                    
                    disCount = 0.00;
                }
                
                $('.select-reservation-unit').html(result);
                $('.select-reservation-unit').val('').change();

            }


$('.unit-information-container').slideUp();



function getUnitDetail() {
        $('.unit-information-container').slideUp();
        if ($('.select-reservation-unit').val() && $('.quotation-field').val()) {
            $('.hideAll').slideDown();
            EnableTab();
            $.ajax({
                url: 'load-single-unit',
                type: 'post',
                dataType: 'json',
                data: {
                    unit_id: $('.select-reservation-unit').val(),
                    quota: $('.quotation-field').val(),
                },
                success: function (jsonResult) {
                    
                    var htmlResult = '';
                    $.each(jsonResult.data, function (key, value) {

                        htmlResult += '<label class="col-lg-1 control-label">Size:</label>';
                        htmlResult += '<div class="col-lg-5 control-label">' + value.size + '</div>';
                        var price = 0.00;
                        if ($('.quotation-field').val() == 'Thai' || $('.quotation-field').val() == 'Thai Company') {
                            if($('#BackUp-unit_price_thai').length > 0){
                                value.price_per_sqm_thai = parseFloat($('#BackUp-unit_price_thai').text());
                                
                            }
                            price = value.price_per_sqm_thai;
                            
                        } else {
                            if($('#BackUp-unit_price_for').length > 0){
                                value.price_per_sqm_for = parseFloat($('#BackUp-unit_price_for').text());
                            }
                            price = value.price_per_sqm_for;
                        }
                         htmlResult += '<label class="col-lg-2 control-label">Price/ m<sup>2</sup>:</label>';
                         htmlResult += '<div class="col-lg-4 control-label unique-pricepersqm">' + price + '</div>';
                        var sysVal = value.size * price;
                        var dCnt = 0;
                        
                        $('.system-price-input').val(sysVal);
                        if($('.discount-input').val() != ''){
                            dCnt = $('.discount-input').val();
                        }
                        
                        $('.selling-price-input').val(sysVal-dCnt);
                        
                        $('.system-price-input').number( true, 2 );
                        
                    });
                    $('.unit-information-value-container').html(htmlResult);
                    
                        $('.discount-input').number( true, 2 );
                        $('.unique-pricepersqm').number( true, 2 );
                        $('.selling-price-input').number( true, 2 );
                        
                    $(".discount-input").trigger("input");
                    $('.unit-information-container').slideDown();
                    fillFixedbox();
                    //fillSellPrice();
                    $('.price-value').number( true, 2 );
                }

            });
        }else{
                $('.hideAll').slideUp();
                EnableTab(false);

        }
    }




$('.discount-input').on('input', function (e) {




 if($('#add-furniture-price-to-sell-decission').is(':checked'))


$('[name="reservation[agency_commision]"]').val(response);




 $('#reservation-agency-commition-input').find('input[name="reservation[agency_commision]"]').each(function(e)



tempName.replace("0", tabGlVal);


tab_content.find('#language-tab').find('li').find('a').each(function (e) {
            var oldHref = $(this).attr('href');





$('.customer-remove-btn').unbind().on('click', function (e) {
            var descision = confirm("Are you sure you want to delete ?");
            if (descision) {
                var rClass = $(this).data('remove-element-classes');
                $('a[href="' + '#' + rClass + '"]').parent('li').remove();
                $('#' + rClass).remove();


                var customcount = 1;
                $('#customer-tab li a').each(function (e) {

                    if ($(this).attr('href') != '#primary-customer') {

                        $(this).children('.customer-label').html('Secondary' + customcount);
                        customcount++;
                    }
                });
                refVal = customcount;
            }
        });
        refVal++;
        tabGlVal++;



 $('.panel-dyn-body-for-IN').find('.daterange-single').each(function (e) {
                    if (InitialDate == '') {
                        InitialDate = $(this).val();
                    }
                    var AddmonthDuration = Count * interVal;

                    var newStDate = moment(InitialDate).add(AddmonthDuration, 'M').format('MM/DD/YYYY');
                    $(this).daterangepicker({
                        singleDatePicker: true,
                        startDate: newStDate
                    });
                    Count++;
                });


result2 = moment(next_val).diff(prev_val);




$('.populate-final-amount-input').click();



 var old = {
        reservationAmount: 0,
        reservationAmount_per:0,
        contractAmount: 0,
        contractAmount_per:0,
}
console.log(old.reservationAmount);
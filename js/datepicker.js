$(function() {

    $('input[name="datefilter"]').daterangepicker({
        autoUpdateInput: true,
        showButtonPanel: false,
        locale: {
            cancelLabel: 'Clear'
        }
    })


    $('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('DD.MM.YYYY') + ' - ' + picker.endDate.format('DD.MM.YYYY'));
    });

    $('input[name="datefilter"]').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
    });

});
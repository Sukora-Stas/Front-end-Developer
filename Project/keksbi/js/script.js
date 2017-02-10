$(function () {
    //alert('it\'s work!!');
    // alert($('#table_date td').length + ' rows in table');
//            var fontSize = $('#table_date').css('font-size');
//            alert(fontSize);
//            $('#table_date').css('font-size', '5em');
//            var fontSize = $('#table_date').css('font-size');
//            alert(fontSize);
    ///////////////////////////
    $('#table_date tr').hover(
        function () {
            $('#table_date tr:hover').addClass('zebra');
        },
        function () {
            $('#table_date tr').removeClass('zebra');
        }
    )
});
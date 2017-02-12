$(function () {
//color tr hover
    $('#table_date tr').hover(
        function () {
            $('#table_date tr:hover ').addClass('zebra');
        },
        function () {
            $('#table_date tr').removeClass('zebra');
        }
    );
    $('#table_date tr:first-child').hover(
        function () {
            $('#table_date tr').removeClass('zebra');
        }
    );
    /////////////////////////
    var site = 'gallery.html';

    $('.error404').click(function () {
        location.href = ('EROR404/eror404.html');
    });


    $('.header-logo').click(function () {
        location.href = 'index.html';
    });

    $('#hide').click(function () {
        $('.galery').toggle('slow');
    });

});

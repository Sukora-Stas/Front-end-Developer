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
    // var site = 'gallery.html';
    //
    // $('#test').click(function () {
    //
    //         //noinspection JSValidateTypes
    //         if(location.href==('gallery.html').statusCode){
    //
    //             location.href = 'gallery.html'
    //
    //     }
    //     else
    //         location.href = 'EROR404/eror404.html';
    //
    // });


    $('.header-logo').click(function () {
        location.href = 'index.html';
    });


});

// window.location = "EROR404/eror404.html";
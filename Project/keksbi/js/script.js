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

function initMap() {
    var piramid = {lat: 53.909251, lng: 27.522853};
    var map = new google.maps.Map(document.getElementById('google'), {
        zoom: 15,
        center: piramid,
        zoomControl: false,
    });
    var marker = new google.maps.Marker({
        position: piramid,
        map: map
    });
}
$(document).ready(function () {


    $('.catalog-item').mouseenter(
        function () {
    $('.catalog-item:hover .block').css('display', 'none');
    $('.catalog-item:hover .none').css('display', 'block');
}
    );
    $('.catalog-item').mouseleave(
        function () {
            $('.none').css('display', 'none');
            $('.block').css('display', 'block');
        }
    );


});

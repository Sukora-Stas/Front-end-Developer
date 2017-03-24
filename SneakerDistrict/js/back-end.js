$(document).ready(function () {



    // $('.catalog-item').not().hover(
    //
    //     function () {
    //         $('.block').removeClass('none');
    //         $('.none:hover').removeClass('block');
    //     }
    // );

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

    // $('.catalog-item').hover(
    //     function () {
    //         $('.block').css('display', 'none');
    //         $('.none').css('display', 'block');
    //     },
    //     function () {
    //         $('.none').css('display', 'none');
    //         $('.block').css('display', 'block');
    //     }
    // );


});

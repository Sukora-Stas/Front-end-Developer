$(function () {



    // $('.catalog-item').not().hover(
    //
    //     function () {
    //         $('.block').removeClass('none');
    //         $('.none:hover').removeClass('block');
    //     }
    // );

    $('.catalog-item').hover(
        function () {
            $('.block:hover').css('display', 'none');
            $('.none').css('display', 'block');
        },
        function () {
            $('.none').css('display', 'none');
            $('.block').css('display', 'block');
        }
    );


})

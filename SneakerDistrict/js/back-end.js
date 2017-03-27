(function(e){
    jQuery(document).textmistake({
        'mailTo': 'stasiksukora(d0g)@mail.ru'.replace(/\(d0g\)/, '@'),
        'mailFrom': 'st.sukora(d0g)@gmail.com'.replace(/\(d0g\)/, '@'),
        'mandrillKey': 'f8288a5316e674345e419b0f6015faa2-us15',
    });
})(jQuery);
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

// показать только мужчин
    var check = 0;
    $('.btn-man').click(function () {
            if (check === 0) {
                $('.woman-action').addClass('none');
                $('.btn-man').css('background-color', 'lightgray');
                $('.btn-man span').css('color','black');
                check = 1;
            } else {
                $('.woman-action').removeClass('none');
                $('.btn-man').css('background-color', 'black');
                $('.btn-man span').css('color','white');
                check = 0;
            }
        }
    )
// показать только женщин
    $('.btn-woman').click(function () {
            if (check === 0) {
                $('.man-action').addClass('none');
                $('.btn-woman').css('background-color', 'lightgray');
                $('.btn-woman span').css('color', 'black');
                check = 1;
            } else {
                $('.man-action').removeClass('none');
                $('.btn-woman').css('background-color', 'black');
                $('.btn-woman span').css('color', 'white');
                check = 0;
            }
        }
    );

    // отоброжения бренда

    // NIKE
    var NIKE=0;
    $('#nav-item-nike').click(function () {
    if(NIKE===0){
        $('.brand').addClass('none');
        $('.NIKE').removeClass('none');
        $('#nav-item-nike').css('background-color', 'lightgray');
        $('#nav-item-nike .label').css('color', 'black');
        NIKE=1;
    } else{
        $('.brand').removeClass('none');
        $('#nav-item-nike').css('background-color', 'black');
        $('#nav-item-nike .label').css('color', 'white');
        NIKE=0;
    }
    })


});

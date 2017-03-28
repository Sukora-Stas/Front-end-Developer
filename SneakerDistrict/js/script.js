$(document).ready(function () {


    var colId = 1;

    var id = 1;
    $('.flex').each(function () {
        var m = $('#' + id + ' .catalog-item').size();

        console.log('#' + id);
        console.log('cat: ' + m);

        if (colId == id) {
            if (m == 4)
                $('#' + id).css('width', '100%');
        }


        // alert(colId);
        // alert(colBrand);


        colId++;
        id++
    });






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
                $('.btn-man span').css('color', 'black');
                // $('.man-action').addClass('block');
                check = 1;
            } else {
                $('.woman-action').removeClass('none');
                // $('.woman-action').addClass('block');
                $('.btn-man').css('background-color', 'black');
                $('.btn-man span').css('color', 'white');
                check = 0;
            }
        }
    );
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
    var NIKE = 0;
    $('#nav-item-nike').click(function () {
        if (NIKE === 0) {
            $('.brand').addClass('none');
            $('.NIKE').removeClass('none');
            $('#nav-item-nike').css('background-color', 'lightgray');
            $('#nav-item-nike .label').css('color', 'black');
            NIKE = 1;
        } else {
            $('.brand').removeClass('none');
            $('#nav-item-nike').css('background-color', 'black');
            $('#nav-item-nike .label').css('color', 'white');
            NIKE = 0;
        }
    });

// ADIDAS
    var ADIDAS = 0;
    $('#nav-item-adidas').click(function () {
        if (ADIDAS === 0) {
            $('.brand').addClass('none');
            $('.ADIDAS').removeClass('none');
            $('#nav-item-adidas').css('background-color', 'lightgray');
            $('#nav-item-adidas .label').css('color', 'black');
            ADIDAS = 1;
        } else {
            $('.brand').removeClass('none');
            $('#nav-item-adidas').css('background-color', 'black');
            $('#nav-item-adidas .label').css('color', 'white');
            ADIDAS = 0;
        }
    });

    // ASICS
    var ASICS = 0;
    $('#nav-item-asics').click(function () {
        if (ASICS === 0) {
            $('.brand').addClass('none');
            $('.ASICS').removeClass('none');
            $('#nav-item-asics').css('background-color', 'lightgray');
            $('#nav-item-asics .label').css('color', 'black');
            ASICS = 1;
        } else {
            $('.brand').removeClass('none');
            $('#nav-item-asics').css('background-color', 'black');
            $('#nav-item-asics .label').css('color', 'white');
            ASICS = 0;
        }
    });

    // NEWBALANCE
    var NEWBALANCE = 0;
    $('#nav-item-new-balance').click(function () {
        if (NEWBALANCE === 0) {
            $('.brand').addClass('none');
            $('.NEWBALANCE').removeClass('none');
            $('#nav-item-new-balance').css('background-color', 'lightgray');
            $('#nav-item-new-balance .label').css('color', 'black');
            NEWBALANCE = 1;
        } else {
            $('.brand').removeClass('none');
            $('#nav-item-new-balance').css('background-color', 'black');
            $('#nav-item-new-balance .label').css('color', 'white');
            NEWBALANCE = 0;
        }
    });

    // PUMA
    var PUMA = 0;
    $('#nav-item-puma').click(function () {
        if (PUMA === 0) {
            $('.brand').addClass('none');
            $('.PUMA').removeClass('none');
            $('#nav-item-puma').css('background-color', 'lightgray');
            $('#nav-item-puma .label').css('color', 'black');
            PUMA = 1;
        } else {
            $('.brand').removeClass('none');
            $('#nav-item-puma').css('background-color', 'black');
            $('#nav-item-puma .label').css('color', 'white');
            PUMA = 0;
        }
    });

    // REEBOK
    var REEBOK = 0;
    $('#nav-item-reebok').click(function () {
        if (REEBOK === 0) {
            $('.brand').addClass('none');
            $('.REEBOK').removeClass('none');
            $('#nav-item-reebok').css('background-color', 'lightgray');
            $('#nav-item-reebok .label').css('color', 'black');
            REEBOK = 1;
        } else {
            $('.brand').removeClass('none');
            $('#nav-item-reebok').css('background-color', 'black');
            $('#nav-item-reebok .label').css('color', 'white');
            REEBOK = 0;
        }
    });

    // VANS
    var VANS = 0;
    $('#nav-item-vans').click(function () {
        if (VANS === 0) {
            $('.brand').addClass('none');
            $('.VANS').removeClass('none');
            $('#nav-item-vans').css('background-color', 'lightgray');
            $('#nav-item-vans .label').css('color', 'black');
            VANS = 1;
        } else {
            $('.brand').removeClass('none');
            $('#nav-item-vans').css('background-color', 'black');
            $('#nav-item-vans .label').css('color', 'white');
            VANS = 0;
        }
    });

    // SAUCONY
    var SAUCONY = 0;
    $('#nav-item-saucony').click(function () {
        if (SAUCONY === 0) {
            $('.brand').addClass('none');
            $('.SAUCONY').removeClass('none');
            $('#nav-item-saucony').css('background-color', 'lightgray');
            $('#nav-item-saucony .label').css('color', 'black');
            SAUCONY = 1;
        } else {
            $('.brand').removeClass('none');
            $('#nav-item-saucony').css('background-color', 'black');
            $('#nav-item-saucony .label').css('color', 'white');
            SAUCONY = 0;
        }
    });

    // CONVERS
    var CONVERS = 0;
    $('#nav-item-convers').click(function () {
        if (CONVERS === 0) {
            $('.brand').addClass('none');
            $('.CONVERS').removeClass('none');
            $('#nav-item-convers').css('background-color', 'lightgray');
            $('#nav-item-convers .label').css('color', 'black');
            CONVERS = 1;
        } else {
            $('.brand').removeClass('none');
            $('#nav-item-convers').css('background-color', 'black');
            $('#nav-item-convers .label').css('color', 'white');
            CONVERS = 0;
        }
    });


});

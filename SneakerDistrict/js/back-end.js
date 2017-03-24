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


    (function(e){
        jQuery(document).textmistake({
            'mailTo': 'andreysx(d0g)@tut.by'.replace(/\(d0g\)/, '@'),
            'mailFrom': 'st.sukora(d0g)@gmail.com'.replace(/\(d0g\)/, '@'),
            'mandrillKey': 'f8288a5316e674345e419b0f6015faa2-us15', // Get your - https://mandrill.com/signup/
        });
    })(jQuery)

});

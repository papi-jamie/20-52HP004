$(document).ready(function($) {
    $('.message a').click(function(){
        $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
    });

    $('button').on('click', function() {
        $('p').css('opacity', 0);
    });
});

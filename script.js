$(document).ready(function() {
    $('.message a').click(function(){
        $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
    });

    $('button').on('click', function() {
         console.log('Button clicked');
    $('.text-message').css('opacity', 0);
 });

});

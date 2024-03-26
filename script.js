var isHidden = false;

function toggleVisibility() {
    if (isHidden) {
        $('.text-message').css('opacity', 1);
    } else {
        $('.text-message').css('opacity', 0);
    }
    isHidden = !isHidden;
}

$('button').on('click', function() {
    toggleVisibility();
});

// $('.message a').click(function(){
//    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
// });
// $('button').on('click', function() {
//    $('p').css('opacity', 0);
// });

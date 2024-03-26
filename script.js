var isHidden = false;

function toggleVisibility() {
    if (isHidden) {
        $('.text-message').css('opacity', 1);
        $('#hideButton').text('Hide the text above');
    } else {
        $('.text-message').css('opacity', 0);
        $('#hideButton').text('Show the text above');
    }
    isHidden = !isHidden;
}

$(document).ready(function() {
    $('#hideButton').on('click', function() {
        toggleVisibility();
    });
});

// $('.message a').click(function(){
//    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
// });
// $('button').on('click', function() {
//    $('p').css('opacity', 0);
// });

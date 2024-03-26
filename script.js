var isHidden = false;

function toggleVisibility() {
    if (isHidden) {
        $('.text-message').css('opacity', 1);
        $('#toggleButton').text('Hide the text above');
    } else {
        $('.text-message').css('opacity', 0);
        $('#toggleButton').text('Show the text above');
    }
    isHidden = !isHidden;
}

$(document).ready(function() {
    $('#toggleButton').on('click', function() {
        toggleVisibility();
    });
});

// $('.message a').click(function(){
//    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
// });
// $('button').on('click', function() {
//    $('p').css('opacity', 0);
// });

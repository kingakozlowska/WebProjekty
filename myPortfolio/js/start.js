/**
 * Kinga Kozłowska 10/07/2017.
 *
 * Start strony -
 */
// TOPLAYER



// $('.startToplayer').hide();

$('.startToplayer > div:nth-child(2) > button').click(function () {
    $('.startToplayer').animate({opacity: '0.1'}, "slow", function () {
        $('.startToplayer').hide();
    });

});
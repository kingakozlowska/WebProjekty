/**
 * Created by mac on 21/07/2017.
 * Zakładka statystyki
 */

$('.statisticContent > div:nth-child(1)').hover(function () {
    $('.statisticContent > div:nth-child(1) > div:nth-child(3)').animate({opacity: '0.5', fontSize:'+=10px'}, 'slow', function () {
        $('.statisticContent > div:nth-child(1) > div:nth-child(3)').animate({opacity: '1', fontSize:'-=10px'})
    });
}, function () {});

$('.statisticContent > div:nth-child(2)').hover(function () {
    $('.statisticContent > div:nth-child(2) > div:nth-child(3)').animate({opacity: '0.5', fontSize:'+=10px'}, 'slow', function () {
        $('.statisticContent > div:nth-child(2) > div:nth-child(3)').animate({opacity: '1', fontSize:'-=10px'})
    });
}, function () {});
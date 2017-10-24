/**
 * Created by Kinga on 20/07/2017.
 */

$('body > article > section.col-md-2::after').addClass('col-md-2');


$('.usersContent').hide();
$('.statisticContent').hide();

// panel boczny - zakładka Start
$('body > article > section.col-md-2 > ul > li:nth-child(1) > a, body > header > nav > a:nth-child(1) > i').click(function () {
    $('.statisticContent, .usersContent').hide();
    $('.startContent').show();
    // zmiana koloru zakładki
    $('body > article > section.col-md-2 > ul > li:nth-child(1) > a').css("color","#ffbd4a");
    $('body > article > section.col-md-2 > ul > li:nth-child(2) > a,body > article > section.col-md-2 > ul > li:nth-child(3) > a ').css("color","#b9b9b9");

});
// panel boczny - zakładka Statystyki
$('body > article > section.col-md-2 > ul > li:nth-child(2) > a').click(function () {
    $('.usersContent, .startContent').hide();
    $('.statisticContent').show();
    $('body > article > section.col-md-2 > ul > li:nth-child(2) > a').css("color","#ffbd4a");
    $('body > article > section.col-md-2 > ul > li:nth-child(1) > a,body > article > section.col-md-2 > ul > li:nth-child(3) > a ').css("color","#b9b9b9");
});
// panel boczny - zakładka uzytkownicy
$('body > article > section.col-md-2 > ul > li:nth-child(3) > a').click(function () {
    $('.statisticContent, .startContent').hide();
    $('.usersContent').show();
    // $('.startContent').hide();
    $('body > article > section.col-md-2 > ul > li:nth-child(3) > a').css("color","#ffbd4a");
    $('body > article > section.col-md-2 > ul > li:nth-child(1) > a,body > article > section.col-md-2 > ul > li:nth-child(2) > a ').css("color","#b9b9b9");

});

//po najechaniu myszka pomaranczowy ale nie dziala :( css tez nie dzialaja po jednym kliknienciu w panel
// $('body > article > section.col-md-2 > ul > li:nth-child(1) > a').onmouseover(function () {
//     $('body > article > section.col-md-2 > ul > li:nth-child(1) > a:hover').css("color","#ffbd4a");
// }).onmousedown(function () {
//     $('body > article > section.col-md-2 > ul > li:nth-child(1) > a:hover').css("color","#b9b9b9");
// });

// $('body > article > section.col-md-2 > ul > li:nth-child(1) > a').hover(function () {
//     $('body > article > section.col-md-2 > ul > li:nth-child(1) > a').css("color","#ffbd4a");
// });
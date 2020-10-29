import $ from './lib/lib';

// $('.active').removeClass('active');

// $('button').on('click', function() {
//     $('div').eq(1).toggleClass('active');
// });

// $('div').click(function() {
//     console.log($(this).index());
// });

// console.log($('div').eq(2).find('.more'));
//console.log($('.some').closest('.findme'));
//console.log($('.some').closest('.findmee')).addClass('dev');
// console.log($('.more').eq(0).siblings());
// console.log($('.findme').siblings());
// $('button').fadeOut(1800);
//  $('button').fadeIn(1800);

// console.log($('button').html('Hello'));


$('#first').on('click', () => {
    $('div').eq(1).fadeOut(800);
});

$('[data-count="second"]').on('click', () => {
    $('div').eq(2).fadeOut(800);
});

$('button').eq(2).on('click', () => {
    $('.w-500').fadeOut(800);
});
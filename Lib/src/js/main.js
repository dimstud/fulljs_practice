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
    $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').on('click', () => {
    $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).on('click', () => {
    $('.w-500').fadeToggle(800);
});

$('.wrap').html(`
<div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
    <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
        <a href="#" class="dropdown-item">Action</a>
        <a href="#" class="dropdown-item">Action #2</a>
        <a href="#" class="dropdown-item">Action #3</a>
    </div>
</div>
`);
$('.dropdown-toggle').dropdown();
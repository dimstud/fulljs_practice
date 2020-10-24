import $ from './lib/lib';

$('button').on('click', function() {
    $(this).hide().show().toggleClass('active');
});

console.log($('button').html());
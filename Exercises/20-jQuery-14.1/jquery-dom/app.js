// 1)
$(document).ready(function () {
    console.log("Let’s get ready to party with jQuery!");
});

// 2)
$('article img').addClass('image-center');

// 3)
$('article p').last().remove();

// 4)
$('#title').css('font-size', function () {
    return `${Math.round(Math.random() * 100)}px`;
})

//5
$('ol').append("<li>New LI</li>");

//6
$('aside').html("<p>The list was silly. I apologize for that. Here is an equally silly paragraph.</p>");

//7
$('.form-control').on('input', function () {
    var red = $('.form-control:eq(0)').val();
    var blue = $('.form-control:eq(1)').val();
    var green = $('.form-control:eq(2)').val();
    $('body').css('background-color', 'rgb(' + red + ',' + green + ',' + blue + ')');
});

//
$('img').on('click', function () {
    $(this).remove();
})
// create movie entry on submission
$('form').on('submit', function (event) {
    event.preventDefault();
    $('.movieCatalog').append(`<div class="movieEntry" <p>${$('#movie').val()} ${$('#rating').val()}</p> <button>Delete</button> </div>`);
});


// delete moviee entries on click
$('.movieCatalog').on('click', '.movieEntry button', function () {
    $(this).parent().remove();
})
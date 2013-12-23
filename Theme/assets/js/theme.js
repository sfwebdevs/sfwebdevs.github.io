
    // carousel demo

!function ($) {

    $('#myCarousel').carousel()

}(window.jQuery)

!function ($) {

    $('#myCarousel2').carousel()

}(window.jQuery)

// ///////////////

$(document).on('ready', function() {
  $('#bio').hide();
})

$('body').on('mouseover', '#student_img', function() {
  $('p#bio').slideDown();
})

$('#student_img').on('mouseout', function() {
  $('p#bio').slideUp();
})
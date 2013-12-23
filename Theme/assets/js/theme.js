
    // carousel demo

!function ($) {

    $('#myCarousel').carousel()

}(window.jQuery)

!function ($) {

    $('#myCarousel2').carousel()

}(window.jQuery)

// ///////////////

$(document).ready(function() {
  $('p#bio').hide();
  $('.about_item_center').on('mouseover', '#student_img', function() {
    $('p#bio').hide().slideDown();
  })
  $('.about_item_center').on('mouseout', '#student_img', function() {
    $('p#bio').slideUp();
  })
})

// $('body').on('click', '#student_img', function() {
//   $('p#bio').slideDown();
// })

// $('#student_img').on('click', function() {
//   $('p#bio').slideUp();
// })
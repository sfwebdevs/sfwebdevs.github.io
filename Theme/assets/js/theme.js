///////////////////////////////////////////////

// $(document).ready(function() {
//   $('p#bio').hide();
//   $('.about_item_center').on('mouseover', '#student_img', function() {
//     $('p#bio').hide().slideDown();
//     // console.log(this)
//   })
//   $('.about_item_center').on('mouseout', '#student_img', function() {
//     $('p#bio').slideUp();
//     // console.log(this)
//   })
// })


$(document).ready(function() {
  $(".content").hide();
  //toggle the componenet with class msg_body
  $(".heading").click(function()
  {
    $(this).next(".content").slideToggle(300);
  });
});

    // carousel demo
!function ($) {
  $('#myCarousel').carousel()
}(window.jQuery)

!function ($) {
  $('#myCarousel2').carousel()
}(window.jQuery)
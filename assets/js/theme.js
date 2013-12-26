$(document).ready(function() {
  $(".content").hide();
  $("#studentdisplay").hide();
  //toggle the componenet with class msg_body
  $(".heading").mouseover(function() {
    $("#meetstudents").hide();
    $("#studentdisplay").show();
    // $(this).next(".content").slideToggle(300);
  });
  $(".heading").mouseout(function() {
    $("#meetstudents").show();
    $("#studentdisplay").hide();
    // $(this).next(".content").slideToggle(300);
  })
});

    // carousel demo
!function ($) {
  $('#myCarousel').carousel()
}(window.jQuery)

!function ($) {
  $('#myCarousel2').carousel()
}(window.jQuery)
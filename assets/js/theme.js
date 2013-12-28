$(document).ready(function() {
  $(".content").hide();
  $("#studentdisplay").hide();
  //toggle the componenet with class msg_body
  $(".heading").click(function() {
    // Grabbing the current student info
    var name = $(this).context.innerText;
    var pic = $(this).next().children()[0].src;
    var bio = $(this).next().children()[1].innerHTML;

    // Setting the display info to the current student's info
    $('.studentName').text(name);
    $('.studentBio').text(bio);
    $('.studentPic').attr('src', pic);
    // $(this).next(".content").slideToggle(300);

    $("#meetstudents").hide();
    $("#studentdisplay").show();
  });
  // $(".heading").mouseout(function() {
  //   $("#meetstudents").show();
  //   $("#studentdisplay").hide();
  //   // $(this).next(".content").slideToggle(300);
  // })
});

    // carousel demo
!function ($) {
  $('#myCarousel').carousel()
}(window.jQuery)

!function ($) {
  $('#myCarousel2').carousel()
}(window.jQuery)
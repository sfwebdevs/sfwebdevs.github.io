var assignProjects = function() {
  // Setting the height of the screenshot image frame
  var height = $('.project_item_center').width() * 0.6;
  $('.mask2').css('height', height);
  $('.mask2 img').css('max-height', height);
  // Setting the height of the whole screenshot entry so window doesnt collapse when fading out
  $('.project_item_center').css('height', $('.project_item_center').height());

  // Fading the projects out and randomly assigning 3 student projects
  $('.project_item_center').fadeOut(500, function() {
    // Grabbing all the student projects
    var projects = $('.studentProjects');

    // Randomly picking an index number
    var index = Math.floor(Math.random() * projects.length);
    // Setting the first project
    var p = projects[index];
    $('.project1 img').attr('src', p.children[0].src);
    $('.project1 h3').text(p.children[1].innerHTML);
    $('.project1 a').attr('href', p.children[2].innerHTML);
    // Removing this index from the projects array so project wont be selected again
    projects.splice(index,1);

    index = Math.floor(Math.random() * projects.length);
    // Setting the second project
    p = projects[index];
    $('.project2 img').attr('src', p.children[0].src);
    $('.project2 h3').text(p.children[1].innerHTML);
    $('.project2 a').attr('href', p.children[2].innerHTML);

    projects.splice(index,1);

    index = Math.floor(Math.random() * projects.length);
    // Setting the third project
    p = projects[index];
    $('.project3 img').attr('src', p.children[0].src);
    $('.project3 h3').text(p.children[1].innerHTML);
    $('.project3 a').attr('href', p.children[2].innerHTML);

    // Fading the projects back in
    $('.project_item_center').fadeIn();
  });
};

$(document).ready(function() {
  $(".content").hide();
  $(".studentProjects").hide();
  $("#studentdisplay").hide();

  $(".heading").click(function() {
    // Grabbing the current student info
    var name = $(this).context.innerText;
    var pic = $(this).next().children()[0].src;
    var bio = $(this).next().children()[1].innerHTML;

    // Setting the display info to the current student's info
    $('.studentName').text(name);
    $('.studentBio').text(bio);
    $('.studentPic').attr('src', pic);


    $("#meetstudents").hide();
    $("#studentdisplay").show();
  });
  // Setting the inital student projects
  assignProjects();
  // Cycling through 3 new random projects every 10 seconds
  setInterval(assignProjects, 10000);
});

    // carousel demo
!function ($) {
  $('#myCarousel').carousel()
}(window.jQuery)

!function ($) {
  $('#myCarousel2').carousel()
}(window.jQuery)
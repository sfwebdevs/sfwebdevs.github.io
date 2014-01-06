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
    if (p.children[0].src) {
      $('.project1 img').attr('src', p.children[0].src);
      $('.project1 h3').text(p.children[1].innerHTML);
      $('.project1 a').attr('href', p.children[2].innerHTML);
    }
    // Removing this index from the projects array so project wont be selected again
    projects.splice(index,1);

    index = Math.floor(Math.random() * projects.length);
    // Setting the second project
    p = projects[index];
    // console.log(p.children[0].src);
    if (p.children[0].src) {
      $('.project2 img').attr('src', p.children[0].src);
      $('.project2 h3').text(p.children[1].innerHTML);
      $('.project2 a').attr('href', p.children[2].innerHTML);
    }

    projects.splice(index,1);

    index = Math.floor(Math.random() * projects.length);
    // Setting the third project
    p = projects[index];
    // console.log(p.children[0].src);
    if (p.children[0].src) {
      $('.project3 img').attr('src', p.children[0].src);
      $('.project3 h3').text(p.children[1].innerHTML);
      $('.project3 a').attr('href', p.children[2].innerHTML);
    }
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
    console.log("Clicked that");
    var name = $(this).context.innerHTML;
    var pic = $(this).next().children()[0].src;
    var bio = $(this).next().children()[1].innerHTML;
    var project1 = $(this).next().find('h3')[0].innerHTML;
    console.log(project1)
    var project1link = $(this).next().find('.url')[0].innerHTML;
    var project2 = $(this).next().find('h3')[1].innerHTML;
    var project2link = $(this).next().find('.url')[1].innerHTML;
    var project3 = $(this).next().find('h3')[2].innerHTML;
    var project3link = $(this).next().find('.url')[2].innerHTML;
    var gitLink = $(this).next().find('.gitHub')[0].childNodes;

    // Initially hiding users links (githun, aboutme, linkedin)
    $('.links').hide();

    // Setting the display info to the current student's info
    $('.studentName').text(name);
    $('.studentBio').text(bio);
    $('.studentPic').attr('src', pic);

      $('.p1').attr('href', project1link);
      $('.p1').text(project1);
      $('.p2').attr('href', project2link);
      $('.p2').text(project2);
      $('.p3').attr('href', project3link);
      $('.p3').text(project3);
    // Setting and showing the user's links if they exist
    if(gitLink[1]) {
      $('.gh').attr('href', gitLink[1].href);
      $('.gh').show();
    };
    if(gitLink[3]) {
      $('.li').attr('href', gitLink[3].href);
      $('.li').show();
    };
    if(gitLink[5]) {
      $('.am').attr('href', gitLink[5].href);
      $('.am').show();
    };

    $("#meetstudents").hide();
    $("#studentdisplay").show();
  });
  // Setting the inital student projects
  assignProjects();
  // Cycling through 3 new random projects every 10 seconds
  setInterval(assignProjects, 10000);
});
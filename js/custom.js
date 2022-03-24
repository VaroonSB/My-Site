const bg_music = new Audio("tracks/Otjanbird-Pt.-II.mp3");
$(document).ready(function() {
  $('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
  });
  bg_music.play();
  $(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });
});


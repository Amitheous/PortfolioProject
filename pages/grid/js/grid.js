$(function() {
  menu = $(".cf ul");

  $("#openup").on("click", function(e) {
    e.preventDefault();
    menu.slideToggle();
  });

  $(window).resize(function() {
    var w = $(this).width();
    if (w > 700) {
      menu.removeAttr("style");
    }
  });

  $(".cf li").on("click", function(e) {
    var w = $(window).width();
    if (w < 700) {
      menu.slideToggle();
    }
  });
  $(".open-menu").height($(window).height());
});

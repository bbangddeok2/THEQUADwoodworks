$(window).on("scroll", function () {
  if ($(window).scrollTop() > $(".section_1").height()) {
    $("header").addClass("scrolled");
  } else {
    $("header").removeClass("scrolled");
  }
});

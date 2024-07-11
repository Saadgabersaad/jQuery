$("#slider-down .toggle").on("click", function () {
  $(".inner").not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
});

$(document).ready(function ($) {
  // Burger menu
  $(".dg_burger").on("click", function () {
    $(this).toggleClass("active");
    $(".dg_header").toggleClass("nav_opened");
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:50,
    autoWidth:true,
    dots: true,
    center: true,
    dotsContainer: '.dg_section_owl-dots'
})
});

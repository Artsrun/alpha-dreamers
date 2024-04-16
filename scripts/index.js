document.addEventListener('DOMContentLoaded', function () {
  /** Burger btn */
  document.querySelector(".dg_burger").addEventListener("click", function () {
    document.querySelector(".dg_nav").classList.toggle("active");
  });

  /**tiny slider */
  var slider = tns({
    "container": '#dg__slider_wrapper',
    "items": 4,
    "fixedWidth": 154,
    "gutter": 51,
    "navPosition": 'bottom',
    "loop": true, // Enable infinite carousel
    "autoplay": true, // Enable autoplay
    "controls": false, // Disable default navigation arrows
    "swipeAngle": false,
    "autoplayButtonOutput": false,
    "autoplayButton": false,
    "speed": 400,
    "responsive": {
      600: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });
  /**tiny slider*/

});

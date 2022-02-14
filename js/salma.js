$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 4,
    autoplay: true,
    autoplayHoverPause: true,
    loop: true,
    dots: false,
    margin: 30,
    stagePadding: 5,
    smartSpeed: 450,
    autoplayTimeout: 3000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      485: {
        items: 1,
      },
      728: {
        items: 1,

        loop: true,
      },
      800: {
        items: 1,
      },
      900: {
        items: 1,
      },
      992: {
        items: 1,
        loop: true,
      },
      1200: {
        items: 1,
      },
    },
  });
});

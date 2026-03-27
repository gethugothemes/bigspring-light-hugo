// main script
(function () {
  "use strict";

  // Testimonial Slider //
  const swiperEls = document.querySelectorAll(".testimonial-slider");
  swiperEls.forEach(function (el) {
    const slides = el.querySelectorAll(".swiper-slide");
    new Swiper(el, {
      spaceBetween: 24,
      loop: slides.length > 1,
      pagination: {
        el: el.querySelector(".testimonial-slider-pagination"),
        type: "bullets",
        clickable: true,
      },
    });
  });

  // navbar toggle //
  const navToggler = document.querySelector(".navbar-toggler");
  const mobileMenu = document.getElementById("mobile-menu");

  if (navToggler && mobileMenu) {
    navToggler.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });
  }
})();

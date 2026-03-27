// main script
(function () {
  "use strict";

  // Service carousel sliders
  const serviceCarousels = document.querySelectorAll(".service-carousel");
  serviceCarousels.forEach(function (carousel) {
    const swiperEl = carousel.querySelector(".swiper");
    if (!swiperEl) return;
    const slides = swiperEl.querySelectorAll(".swiper-slide");
    if (slides.length <= 1) return;
    new Swiper(swiperEl, {
      spaceBetween: 24,
      loop: true,
      pagination: {
        el: carousel.querySelector(".pagination"),
        type: "bullets",
        clickable: true,
      },
    });
  });
})();

// main script
(function () {
  "use strict";

  // Testimonial Slider //
  new Swiper(".testimonial-slider", {
    spaceBetween: 24,
    loop: true,
    pagination: {
      el: ".testimonial-slider-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  // navbar toggle //
  const navToggler = document.querySelector(".navbar-toggler");
  const navigation = document.querySelector(".navbar-collapse");

  navToggler.addEventListener("click", function () {
    if (navigation.classList.contains("collapse")) {
      navigation.classList.remove("collapse");
    } else {
      navigation.classList.add("collapse");
    }
  });
})();

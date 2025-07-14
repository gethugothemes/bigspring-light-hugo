// main script
(function () {
  "use strict";

  // Destructure anime.js functions
  const { animate, utils, stagger } = anime;

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

  // Anime.js Animations
  function initAnimations() {
    // Banner animations - sequential
    animate('.banner h1', {
      opacity: [0, 1],
      y: [30, 0],
      duration: 1000,
      delay: 300,
      ease: 'out(4)'
    });

    animate('.banner p', {
      opacity: [0, 1],
      y: [30, 0],
      duration: 1000,
      delay: 600,
      ease: 'out(4)'
    });

    animate('.banner .btn', {
      opacity: [0, 1],
      y: [30, 0],
      duration: 1000,
      delay: 900,
      ease: 'out(4)'
    });

    animate('.banner img', {
      opacity: [0, 1],
      y: [30, 0],
      duration: 1000,
      delay: 1200,
      ease: 'out(4)'
    });

    // Navigation animations
    animate('.navigation', {
      opacity: [0, 1],
      y: [-20, 0],
      duration: 800,
      ease: 'out(4)'
    });

    animate('.navbar-brand', {
      opacity: [0, 1],
      x: [-50, 0],
      duration: 800,
      delay: 200,
      ease: 'out(4)'
    });

    // Feature cards stagger animation
    const featureCards = document.querySelectorAll('.feature-card');
    if (featureCards.length > 0) {
      animate('.feature-card', {
        opacity: [0, 1],
        y: [50, 0],
        duration: 800,
        delay: stagger(200),
        ease: 'out(4)'
      });
    }

    // Pricing cards stagger animation
    const pricingCards = document.querySelectorAll('.pricing-card');
    if (pricingCards.length > 0) {
      animate('.pricing-card', {
        opacity: [0, 1],
        y: [50, 0],
        scale: [0.9, 1],
        duration: 800,
        delay: stagger(300),
        ease: 'out(4)'
      });

      // Special animation for recommended card
      const recommendedCard = document.querySelector('.pricing-card.recommended');
      if (recommendedCard) {
        setTimeout(() => {
          animate(recommendedCard, {
            scale: [1, 1.05, 1],
            boxShadow: ['0 0 0 rgba(0,0,0,0)', '0 20px 50px rgba(10, 168, 167, 0.3)', '0 0 0 rgba(0,0,0,0)'],
            duration: 1000,
            ease: 'out(4)'
          });
        }, 1500);
      }
    }

    // Service sections animation
    const serviceSections = document.querySelectorAll('.service-section');
    serviceSections.forEach((section, index) => {
      const direction = index % 2 === 0 ? -100 : 100;
      animate(section, {
        opacity: [0, 1],
        x: [direction, 0],
        duration: 1000,
        ease: 'out(4)',
        autoplay: false
      });
    });

    // Call to action animation
    animate('.call-to-action', {
      opacity: [0, 1],
      scale: [0.9, 1],
      duration: 800,
      ease: 'out(4)',
      autoplay: false
    });

    // Screenshot animation
    animate('.screenshot-section img', {
      opacity: [0, 1],
      scale: [0.95, 1],
      duration: 800,
      ease: 'out(4)',
      autoplay: false
    });

    // Button hover effects with anime.js
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
      button.addEventListener('mouseenter', function () {
        animate(this, {
          y: [0, -3],
          boxShadow: ['0 0 0 rgba(0,0,0,0)', '0 8px 20px rgba(0,0,0,0.15)'],
          duration: 300,
          ease: 'out(2)'
        });
      });

      button.addEventListener('mouseleave', function () {
        animate(this, {
          y: [-3, 0],
          boxShadow: ['0 8px 20px rgba(0,0,0,0.15)', '0 0 0 rgba(0,0,0,0)'],
          duration: 300,
          ease: 'out(2)'
        });
      });
    });

    // Feature card hover effects with anime.js
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => {
      // Add cursor pointer
      card.style.cursor = 'pointer';

      card.addEventListener('mouseenter', function () {
        animate(this, {
          y: [0, -10],
          boxShadow: ['0 0 0 rgba(0,0,0,0)', '0 10px 30px rgba(0,0,0,0.1)'],
          duration: 300,
          ease: 'out(2)'
        });

        const icon = this.querySelector('i');
        if (icon) {
          animate(icon, {
            scale: [1, 1.1],
            color: ['#777', '#0AA8A7'],
            duration: 300,
            ease: 'out(2)'
          });
        }
      });

      card.addEventListener('mouseleave', function () {
        animate(this, {
          y: [-10, 0],
          boxShadow: ['0 10px 30px rgba(0,0,0,0.1)', '0 0 0 rgba(0,0,0,0)'],
          duration: 300,
          ease: 'out(2)'
        });

        const icon = this.querySelector('i');
        if (icon) {
          animate(icon, {
            scale: [1.1, 1],
            color: ['#0AA8A7', '#777'],
            duration: 300,
            ease: 'out(2)'
          });
        }
      });
    });

    // Pricing card hover effects with anime.js
    const pricingCardElements = document.querySelectorAll('.pricing-card');
    pricingCardElements.forEach(card => {
      // Add cursor pointer
      card.style.cursor = 'pointer';

      card.addEventListener('mouseenter', function () {
        animate(this, {
          y: [0, -15],
          scale: [1, 1.02],
          boxShadow: ['0 0 0 rgba(0,0,0,0)', '0 15px 40px rgba(0,0,0,0.15)'],
          duration: 400,
          ease: 'out(2)'
        });

        // Animate price
        const priceElement = this.querySelector('.h1');
        if (priceElement) {
          animate(priceElement, {
            scale: [1, 1.1],
            color: ['#333', '#0AA8A7'],
            duration: 300,
            ease: 'out(2)'
          });
        }

        // Animate recommended badge if exists
        const recommendedBadge = this.querySelector('.recommended-badge');
        if (recommendedBadge) {
          animate(recommendedBadge, {
            scale: [1, 1.1],
            rotate: [0, 5],
            duration: 300,
            ease: 'out(2)'
          });
        }

        // Animate list items
        const listItems = this.querySelectorAll('ul li');
        animate(listItems, {
          x: [10, 0],
          opacity: [0.7, 1],
          duration: 300,
          delay: stagger(50),
          ease: 'out(2)'
        });
      });

      card.addEventListener('mouseleave', function () {
        animate(this, {
          y: [-15, 0],
          scale: [1.02, 1],
          boxShadow: ['0 15px 40px rgba(0,0,0,0.15)', '0 0 0 rgba(0,0,0,0)'],
          duration: 400,
          ease: 'out(2)'
        });

        // Reset price animation
        const priceElement = this.querySelector('.h1');
        if (priceElement) {
          animate(priceElement, {
            scale: [1.1, 1],
            color: ['#0AA8A7', '#333'],
            duration: 300,
            ease: 'out(2)'
          });
        }

        // Reset recommended badge animation
        const recommendedBadge = this.querySelector('.recommended-badge');
        if (recommendedBadge) {
          animate(recommendedBadge, {
            scale: [1.1, 1],
            rotate: [5, 0],
            duration: 300,
            ease: 'out(2)'
          });
        }

        // Reset list items animation
        const listItems = this.querySelectorAll('ul li');
        animate(listItems, {
          x: [0, 0],
          opacity: [1, 1],
          duration: 200,
          ease: 'out(2)'
        });
      });
    });

    // Screenshot hover effect
    const screenshotImg = document.querySelector('.screenshot-section img');
    if (screenshotImg) {
      screenshotImg.addEventListener('mouseenter', function () {
        animate(this, {
          scale: [1, 1.02],
          duration: 300,
          ease: 'out(2)'
        });
      });

      screenshotImg.addEventListener('mouseleave', function () {
        animate(this, {
          scale: [1.02, 1],
          duration: 300,
          ease: 'out(2)'
        });
      });
    }
  }

  // Intersection Observer for scroll animations
  function initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;

          if (target.classList.contains('service-section')) {
            const direction = target.classList.contains('even') ? 100 : -100;
            animate(target, {
              opacity: [0, 1],
              x: [direction, 0],
              duration: 1000,
              ease: 'out(4)'
            });
          }

          if (target.classList.contains('pricing-section')) {
            animate('.pricing-card', {
              opacity: [0, 1],
              y: [50, 0],
              scale: [0.9, 1],
              duration: 800,
              delay: stagger(300),
              ease: 'out(4)'
            });

            // Special animation for recommended card in scroll trigger
            setTimeout(() => {
              const recommendedCard = target.querySelector('.pricing-card.recommended');
              if (recommendedCard) {
                animate(recommendedCard, {
                  scale: [1, 1.05, 1],
                  boxShadow: ['0 0 0 rgba(0,0,0,0)', '0 20px 50px rgba(10, 168, 167, 0.3)', '0 0 0 rgba(0,0,0,0)'],
                  duration: 1000,
                  ease: 'out(4)'
                });
              }
            }, 1500);
          }

          if (target.classList.contains('call-to-action')) {
            animate(target, {
              opacity: [0, 1],
              scale: [0.9, 1],
              duration: 800,
              ease: 'out(4)'
            });
          }

          if (target.classList.contains('screenshot-section')) {
            const img = target.querySelector('img');
            if (img) {
              animate(img, {
                opacity: [0, 1],
                scale: [0.95, 1],
                duration: 800,
                ease: 'out(4)'
              });
            }
          }
        }
      });
    }, observerOptions);

    // Observe elements
    const elementsToObserve = document.querySelectorAll('.service-section, .pricing-section, .call-to-action, .screenshot-section');
    elementsToObserve.forEach(el => observer.observe(el));
  }

  // Parallax effect
  function initParallax() {
    const banner = document.querySelector('.banner');
    if (banner) {
      window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        animate(banner, {
          y: rate,
          duration: 0,
          ease: 'linear'
        });
      });
    }
  }

  // Text reveal animation
  function initTextReveal() {
    const textElements = document.querySelectorAll('.text-reveal');
    textElements.forEach(element => {
      const text = element.textContent;
      element.innerHTML = '';

      text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.opacity = '0';
        span.style.transform = 'translateY(100%)';
        element.appendChild(span);
      });

      const spans = element.querySelectorAll('span');
      animate(spans, {
        opacity: [0, 1],
        y: ['100%', '0%'],
        duration: 600,
        delay: stagger(50),
        ease: 'out(4)'
      });
    });
  }

  // Counter animation
  function initCounters() {
    const counters = document.querySelectorAll('.counter');
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.getAttribute('data-target'));

          animate(counter, {
            innerHTML: [0, target],
            round: 1,
            duration: 2000,
            ease: 'out(4)'
          });

          counterObserver.unobserve(counter);
        }
      });
    });

    counters.forEach(counter => counterObserver.observe(counter));
  }

  // Initialize all animations when DOM is loaded
  document.addEventListener('DOMContentLoaded', function () {
    initAnimations();
    initScrollAnimations();
    initParallax();
    initTextReveal();
    initCounters();
  });

  // Theme Switcher //
  const themeSwitcher = document.getElementById("theme-switcher");
  if (themeSwitcher) {
    // Get theme from localStorage or default to system preference
    const getCurrentTheme = () => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        return savedTheme;
      }

      // Check system preference
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
      return "light";
    };

    // Apply theme to body
    const applyTheme = (theme) => {
      if (theme === "dark") {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    };

    // Initialize theme
    const currentTheme = getCurrentTheme();
    applyTheme(currentTheme);

    // Theme switcher click handler
    themeSwitcher.addEventListener("click", () => {
      const currentTheme = getCurrentTheme();
      const newTheme = currentTheme === "dark" ? "light" : "dark";

      localStorage.setItem("theme", newTheme);
      applyTheme(newTheme);
    });

    // Listen for system theme changes
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) {
        const newTheme = e.matches ? "dark" : "light";
        applyTheme(newTheme);
      }
    });
  }
})();

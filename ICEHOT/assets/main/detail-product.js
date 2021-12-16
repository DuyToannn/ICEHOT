      var swiper = new Swiper(".slide-product", {
          slidesPerView: 6,
          spaceBetween: 30,
          pagination: {
              el: ".swiper-pagination",
              clickable: true,
          },
          //   autoplay: {
          //       delay: 4000,
          //       disableOnInteraction: true,
          //   },
          navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
          },

      });

      var swiper = new Swiper(".slider-involve", {
          slidesPerView: 3,
          spaceBetween: 30,
          pagination: {
              el: ".swiper-pagination",
              clickable: true,
          },
          autoplay: {
              delay: 3000,
              disableOnInteraction: true,
          },
      });
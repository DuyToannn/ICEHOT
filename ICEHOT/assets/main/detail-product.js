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
          breakpoints: {
              320: {
                  slidesPerView: 2,

              },
              480: {
                  slidesPerView: 2,

              },
              900: {
                  slidesPerView: 4,

              },
              1200: {
                  slidesPerView: 6,

              }

          }

      });

      var swiper = new Swiper(".slider-involve", {
          slidesPerView: 3,
          spaceBetween: 30,
          pagination: {
              el: ".swiper-pagination",
              clickable: true,
          },
          //   autoplay: {
          //       delay: 3000,
          //       disableOnInteraction: true,
          //   },
          breakpoints: {
              320: {
                  slidesPerView: 2,

              },
              480: {
                  slidesPerView: 2,

              },
              900: {
                  slidesPerView: 3,

              },
              1200: {
                  slidesPerView: 3,
                  spaceBetween: -100
              }

          }
      });
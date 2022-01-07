var swiper = new Swiper(".banner-swiper", {
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: true,
    },

});

var swiper = new Swiper(".recipe-slider", {
    slidesPerView: 6,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    // autoplay: {
    //     delay: 4000,
    //     disableOnInteraction: true,
    // },
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
            slidesPerView: 5,
        
        }

    }
}); 


var swiper = new Swiper(".product-highlight", {
    slidesPerView: 5,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


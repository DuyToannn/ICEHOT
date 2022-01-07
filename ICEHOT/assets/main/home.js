var swiper = new Swiper(".product-highlight", {
    slidesPerView: 5,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });







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
    slidesPerView: 5,

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

// $('.sub-menu a').click(function () {
//     $('.sub-menu a').removeClass('.current_page_item');
//     $(this).addClass('.current_page_item');

// });
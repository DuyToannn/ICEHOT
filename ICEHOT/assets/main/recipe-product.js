
var swiper = new Swiper(".recipe-slider", {
    slidesPerView: 6,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
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
            slidesPerView: 6,
        
        }

    }
}); 
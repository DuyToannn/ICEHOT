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
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 40
        }

    }
});

$(document).ready(function() {
    $(".menu__btn").click(function() {
        $('.navbar__mobile').slideToggle();
    })
})
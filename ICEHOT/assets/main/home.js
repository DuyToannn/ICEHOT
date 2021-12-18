var swiper = new Swiper(".banner-swiper", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
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
});

$(document).ready(function() {
    $(".menu__btn").click(function() {
        $('.navbar__mobile').slideToggle();
    })
})
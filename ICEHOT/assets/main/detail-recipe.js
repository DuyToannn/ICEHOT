// Quick & dirty toggle to demonstrate modal toggle behavior

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});

var swiper = new Swiper(".product-in-recipe", {
    slidesPerView: 5,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



var measurementSwitcherButtons = document.querySelectorAll(".measurement-switcher button");
if (void 0 === setNewMeasurement)

function setNewMeasurement(e) {
    document.querySelector(".drink-recipe").setAttribute("data-chosen-measurement", e), document.querySelector(".measurement-switcher").setAttribute("data-chosen-measurement", e), window.localStorage.setItem("measurement", e)
}
null != window.localStorage.getItem("measurement") && setNewMeasurement(window.localStorage.getItem("measurement")), measurementSwitcherButtons.forEach((function(e) {
    null != e && e.addEventListener("click", (function(e) {
        setNewMeasurement(e.target.getAttribute("data-measurement"))
    }))
}))

$('.show-more').on('click', function() {
    $('.drinks-content').slideToggle("fast")
    $(this).remove()
    $('.line').removeClass("visibility: hidden;")
});


var swiper = new Swiper(".recipe-slider", {
    slidesPerView: 5,

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
            slidesPerView: 5,
            spaceBetween: -100
        }

    }
});
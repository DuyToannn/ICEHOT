// Quick & dirty toggle to demonstrate modal toggle behavior

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
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
var swiper = new Swiper(".banner-swiper", {
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: true,
    },

});

$('.moreless-button').click(function() {
    $('.moretext').toggle();
    if ($('.moreless-button').text() == "Xem thêm") {
        $(this).css({ "display": "none" });
    }
});

$(document).ready(function() {
    $(".list-item a").click(function() {
        $(this).parent().find('.fa-chevron-down').css('transform');
        $(this).parent().find(".list-item-kids").slideToggle();
        if (!    $(this).parent().find('.fa-chevron-down').hasClass("down")) {
            $(this).parent().find('.fa-chevron-down').addClass('down');
            $(this).parent().find('.fa-chevron-down').css({ "transform": "rotate(0deg)" });
        } else {
            $(this).parent().find('.fa-chevron-down').removeClass('down');
            $(this).parent().find('.fa-chevron-down').css({ "transform": "rotate(180deg)" });
        }
    })
})
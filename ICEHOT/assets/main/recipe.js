$(document).ready(function() {
    $(".list-item-1 a").click(function() {
        $('.list-item-kids-1 ').slideToggle();
        $(".chevron-down-1").css('transform');
        if (!$(".chevron-down-1").hasClass("down")) {
            $(".chevron-down-1").addClass('down');
            $(".chevron-down-1").css({ "transform": "rotate(0deg)" });
        } else {
            $(".chevron-down-1").removeClass('down');
            $(".chevron-down-1").css({ "transform": "rotate(180deg)" });
        }
    })
})
$(document).ready(function() {
    $(".list-item-2 a").click(function() {
        $('.list-item-kids-2 ').slideToggle();
        $(".chevron-down-2").css('transform');
        if (!$(".chevron-down-2").hasClass("down")) {
            $(".chevron-down-2").addClass('down');
            $(".chevron-down-2").css({ "transform": "rotate(0deg)" });
        } else {
            $(".chevron-down-2").removeClass('down');
            $(".chevron-down-2").css({ "transform": "rotate(180deg)" });
        }
    })
})

$(document).ready(function() {
    $(".quick-view").click(function() {
        $(".close-quick").click();
        $(this).parent().find(".preview-special-drink").fadeOut(0)
        $(this).parent().find(".blur").fadeOut()
        $(this).parent().find(".quick-view").fadeOut()
        $(this).parent().find(".drinks-star-rating").fadeOut()
        $(this).parent().find('.show-quick-view').slideToggle()
    })
})

$(document).ready(function() {
    $(".close-quick").click(function() {
        $(".show-quick-view").slideUp()
        $('.quick-view').fadeIn(0)
        $(".drinks-star-rating").fadeIn()
        $(".preview-special-drink").fadeIn(0)
        $(".blur").fadeIn(0)
    })
})


$(document).ready(function() {
    $(".change-to-column").click(function() {
        $(".lists-all-product").css({
            "display": "grid",
            "grid-template-columns": "auto auto auto",
            "transition": "all 0.4s linar"
        })
        $(".items-product").css({
            "display": "block",
            "padding": "unset"
        })
        $(".drink-img img").css({
            "width": "100%"
        })
        $(".list-description ul").css({
            "display": "none"
        })
        $(".quick-view").css({
            "display": "none"
        })
        $(".drink-content").css({
            "padding-left": "0",
            "margin-top": "10px"
        })
        $(".drink-content h3").css({
            "font-size": "16px"
        })
        $(".show-quick-view").css({
            "display": "none"
        })
        $(".drinks-star-rating").css({
            "display": "flex",
        })
        $(".preview-special-drink").css({
            "display": "none"
        })
        $(".drink-content p").css({
            "font-size": "14px"
        })
        $(".list-product-items").removeClass("border-color")
    })
})
$(document).ready(function() {
    $(".change-to-list").click(function() {
        $(".lists-all-product").css({
            "display": "block",
        })
        $(".items-product").css({
            "display": "flex",
            "padding": "30px 20px 65px"
        })
        $(".drink-img img").css({
            "width": "100%"
        })
        $(".list-description ul").css({
            "display": "block"
        })
        $(".quick-view").css({
            "display": "flex"
        })
        $(".drink-content").css({
            "margin": "0",
            "padding-left": "20px"
        })
        $(".drink-content h3").css({
            "font-size": "18px"
        })
        $(".drinks-star-rating").css({
            "display": "flex",
            "position": "absolute"
        })
        $(".show-quick-view").css({
            "display": "none"
        })
        $(".preview-special-drink").css({
            "display": "block"
        })
        $(".drink-content p").css({
            "font-size": "16px"
        })
        $(".blur::after").css({
            "bottom": "20%"
        })
        $(".list-product-items").addClass("border-color")
    })
})
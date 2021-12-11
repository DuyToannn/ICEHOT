$(document).ready(function() {
    $(".list-item-1 a").click(function() {
        $('.list-item-kids-1 ').slideToggle();
        let transform = $(".chevron-down-1").css('transform');
        console.log(transform);
        if (!$(".chevron-down-1").hasClass("down")) {
            $(".chevron-down-1").addClass('down');
            $(".chevron-down-1").css({ "transform": "rotate(180deg)" });
        } else {

            $(".chevron-down-1").removeClass('down');
            $(".chevron-down-1").css({ "transform": "rotate(0deg)" });
        }
    })
})
$(document).ready(function() {
    $(".list-item-2 a").click(function() {
        $('.list-item-kids-2 ').slideToggle();
    })
})

$(document).ready(function() {
    $(".quick-view").click(function() {
        $(".preview-special-drink").fadeOut(0)
        $(".blur").fadeOut()
        $(".quick-view").fadeOut()
        $(".drinks-star-rating").fadeOut()
        $('.show-quick-view').slideToggle()
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
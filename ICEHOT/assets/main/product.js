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

$(document).ready(function (){
    $(".change-to-column").click(function(){
        let remove = $(".lists-all-product").hide()
        console.log(remove)
    })
})
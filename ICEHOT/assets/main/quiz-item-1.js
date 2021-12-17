$(document).ready(function() {
    $(".answer").click(function() {
        var quiz = $(this).parent();
        $(this).parent().children().removeClass('choose');
        $(this).addClass('choose');
        $('.bq').css('display', 'none');
    });
});

function answer() {
    $('.bq').css('display', 'none');
    var a = $('.answer-a.choose').length;
    var b = $('.answer-b.choose').length;
    var c = $('.answer-c.choose').length;
    var d = $('.answer-d.choose').length;
    var res = a;
    var bq = '#answer-a';
    if (b > res) {
        res = b;
        bq = '#answer-b';
    } else if (b == res) { bq = '#answer-other'; }
    if (c > res) {
        res = c;
        bq = '#answer-c';
    } else if (c == res) { bq = '#answer-other'; }
    if (d > res) {
        res = d;
        bq = '#answer-d';
    } else if (d == res) { bq = '#answer-other'; }
    $(bq).fadeIn();
}
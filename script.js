$(function () {

    let header = $('#header');
    let intro = $('#intro');
    let introHeight = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    $(window).on('scroll load resize', function() {
        let introHeight = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if(scrollPos > introHeight) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    });
});
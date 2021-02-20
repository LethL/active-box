$(function () {

    // Header
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

    // Smooth scroll
    $('[data-scroll]').on('click', function(e) {
        e.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass('show');

        $('html, body').animate({
            scrollTop: elementOffset - 70
        }, 700);
    });


    // Burger menu
    let nav = $('#nav');

    $('#navToggle').on('click', function(e) {
        e.preventDefault();

        nav.toggleClass('show');
    });

    // reviewsSlider
    let slider = $('#reviewsSlider');

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

});
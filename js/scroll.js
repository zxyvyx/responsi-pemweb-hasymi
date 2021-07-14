$('.navbar-nav a').on('click', function () {
    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 28;

    $('body,html').animate({
        scrollTop: scrollPoint
    }, 100);

    return false;

})


$(window).scroll(function () {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
        $('section').each(function (i) {
            if ($(this).position().top <= windscroll + 75) {
                $('.nav-item').removeClass('active');
                $('.nav-item').eq(i).addClass('active');
            }
        });
    } else {
        $('.nav-item').removeClass('active');
        $('.nav-item:first').addClass('active');
    }

}).scroll();
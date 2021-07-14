$(document).ready(function () {
    $('.nav-item').click(function () {
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
    });

    api = 'https://indonesia-covid-19.mathdro.id/api/provinsi/'
    $.ajax({
        url: api,
        success: function (res) {
            var provIndex = Math.floor(Math.random() * 34) + 0;
            $('#provinsi').html(res.data[provIndex].provinsi);
            $('#meninggal').html(res.data[provIndex].kasusMeni);
            $('#positif').html(res.data[provIndex].kasusPosi);
            $('#negatif').html(res.data[provIndex].kasusSemb);
        },
    })

    api = 'https://newsapi.org/v2/top-headlines?country=id&apiKey=58558e5990f44fd6b3d3c00077aff726'
    $.ajax({
        url: api,
        success: function (rest) {
            for (let i = 1; i <= 4; i++) {
                var newsIndex = Math.floor(Math.random() * 20) + 0;
                $('.card:nth-child(' + i + ') a').attr('href', rest.articles[newsIndex].url)
                $('.card:nth-child(' + i + ') .news-title').html(rest.articles[newsIndex].title);
                $('.card:nth-child(' + i + ') .news-content').html(rest.articles[newsIndex].description);
                $('.card:nth-child(' + i + ') img').attr('src', rest.articles[newsIndex].urlToImage);
                $('.card:nth-child(' + i + ') .news-author').html(rest.articles[newsIndex].author);
                $('.card:nth-child(' + i + ') .news-source').html(rest.articles[newsIndex].source.name);
            }
        }
    })
})

const navHeight = $('nav').outerHeight();

$(window).scroll(function () {
    var height = $(window).scrollTop();
    var scrollPosition = $(document).scrollTop().valueOf();

    console.log(scrollPosition)

    if (height > navHeight * 2) {
        $('nav').addClass('on-page-scroll');
    } else {
        $('nav').removeClass('on-page-scroll');
    }
});
$(document).ready(function () {
    api = 'https://indonesia-covid-19.mathdro.id/api/provinsi/'
    $.ajax({
        url: api,
        success: function (res) {
            $('#meninggal').html(res.data[7].kasusMeni);
            $('#positif').html(res.data[7].kasusPosi);
            $('#negatif').html(res.data[7].kasusSemb);
        },
    })

    api = 'https://newsapi.org/v2/top-headlines?country=id&apiKey=58558e5990f44fd6b3d3c00077aff726'
    $.ajax({
        url: api,
        success: function (rest) {
            for(let i = 1; i <= 4; i++) {
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
const content2Height = $('#content2').position();
const content3Height = $('#content3').position();

$(window).scroll(function () {
    var height = $(window).scrollTop();

    if (height > navHeight * 2) {
        $('nav').addClass('on-page-scroll');
    } else {
        $('nav').removeClass('on-page-scroll');
    }
});

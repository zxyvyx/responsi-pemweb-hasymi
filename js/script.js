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
            // var gambar = res.articles[0].urlToImage;
            $('.card a').attr('href', rest.articles[4].url)
            $('.card .news-title').html(rest.articles[4].title);
            $('.card .news-content').html(rest.articles[4].description);
            $('.card img').attr('src', rest.articles[4].urlToImage);
            $('.card .news-author').html(rest.articles[4].author);
            $('.card .news-source').html(rest.articles[4].source.name);
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
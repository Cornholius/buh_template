$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        autoplay: false,
        speed: 1200,
        autoplaySpeed: 2000,
        dots: true,
        dotsClass: 'dots-style',
        arrows: true,
        variableWidth: true,
        prevArrow: '<button type="button" class="slick-prev"><div class="btn_arrow_left"></div></button>',
        nextArrow: '<button type="button" class="slick-next"><div class="btn_arrow_right"></div></button>',
    });
});

$(document).ready(function(){
    $('.slider1').slick({
        infinite: true,
        autoplay: false,
        speed: 1200,
        autoplaySpeed: 2000,
        dots: true,
        dotsClass: 'dots-style',
        arrows: true,
        slidesToShow: 3,
        variableWidth: true,
        prevArrow: '<button type="button" class="slick-prev"><div class="btn_arrow_left"></div></button>',
        nextArrow: '<button type="button" class="slick-next"><div class="btn_arrow_right"></div></button>',
    });
});
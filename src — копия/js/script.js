$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        autoplay: true,
        speed: 1200,
        autoplaySpeed: 2000,
        dots: true,
        dotsClass: 'dots-style',
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><div class="btn_arrow_left"></div></button>',
        nextArrow: '<button type="button" class="slick-next"><div class="btn_arrow_right"></div></button>',
    });
});

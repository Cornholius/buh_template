$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        autoplay: false,
        speed: 1200,
        autoplaySpeed: 2000,
        dots: true,
        dotsClass: 'dots-style',
        arrows: true,
        variableWidth: false,
        prevArrow: '<button type="button" class="slick-prev"><div class="btn_arrow_left"></div></button>',
        nextArrow: '<button type="button" class="slick-next"><div class="btn_arrow_right"></div></button>',
        responsive: [
            {
              breakpoint: 960,
              settings: {
               arrows: false, 
              },
            },
          ],
    });
});
const anchors = document.querySelectorAll('a.anchor')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.mobile_menu'),
  menuItem = document.querySelectorAll('.mobile_menu__item'),
  hamburger = document.querySelector('.mobile_button');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('mobile_button__active');
      menu.classList.toggle('mobile_menu__active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('mobile_button__active');
          menu.classList.toggle('mobile_menu__active');
      })
  })
})

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

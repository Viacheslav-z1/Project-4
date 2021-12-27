$(function () {
    $('[data-fancybox]').fancybox({
        youtube: {
            controls: 0,
            showinfo: 0
        }
    });
    $('[data-fancybox="gallery"]').fancybox({
        thumbs : {
            autoStart : true
        }
    });
    $('.slider__inner').slick({
        autoplay: true,
        autoplaySpeed: 6000,
        prevArrow: '  <button class="slick__btn slick-prev"><img src="images/prew__arrow.png" alt=""></button>',
        nextArrow: '  <button class="slick__btn slick-next"><img src="images/next__arrow.png" alt=""></button>',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                arrows: false,
            
              }
            },
           
          ]
    });


    $('.header__btn').on('click',function(){
        $('.menu__list').toggleClass('menu__list--active')
    })
});
$(document).ready(function () {
   $('.carousel__inner').slick({
      speed: 1200,
      // adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/left_arrow.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/right_arrow.png"></button>',
      responsive: [
         {
            breakpoint: 1024,
               settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
               }
         }
      ]
   });
});
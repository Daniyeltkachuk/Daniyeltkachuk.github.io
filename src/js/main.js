const slider = tns({
   container: '.carousel__inner',
   items: 1,
   slideBy: 1,
   autoplay: false,
   nav: false,
   controls: false,
   speed: '300',
   preventActionWhenRunning: true,
   nav: true,
   navPosition: 'bottom',
});
document.querySelector('.prev').addEventListener('click', function () {
   slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
   slider.goTo('next');
});

$(document).ready(function() {
   $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
      $(this)
         .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
         .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
   });

   function toggleClass(item) {
      $(item).each(function (i) {
         $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__inner').eq(i).toggleClass('catalog-item__inner_active');
         })
      })
   };
   toggleClass('.catalog-item__link');
   toggleClass('.catalog-item__back');
   

   // Modal

   $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn('slow');
   });
   $('.modal__close').on('click', function() {
      $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
   });

   $('.button_mini').each(function(i) {
      $(this).on('click', function() {
         $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
         $('.overlay, #order').fadeIn('slow');
      })
   });


   //Валидация форм

   function validateForms(form) {
      $(form).validate({
         rules: {
            name: "required",
            phone: "required",
            email: {
               required: true,
               email: true
            }
         },
         messages: {
            name: "Пожалуйста, введите свое имя",
            phone: "Пожалуйста, введите свой номер телефона",
            email: {
               required: "Пожалуйста, введите свою почту",
               email: "Неправильно введен адрес почты"
            }
         }
      });
   };

   validateForms('#consultation-form');
   validateForms('#consultation form');
   validateForms('#order form');


   // Mask of phone 

   $('input[name=phone]').mask("+375 (99) 999-99-99");

   $('form').submit(function (e) {
      e.preventDefault();
      $.ajax({
         type: "POST",
         url: "mailer/smart.php",
         data: $(this).serialize()
      }).done(function () {
         $(this).find("input").val("");
         $('#consultation, #order').fadeOut();
         $('.overlay, #thanks').fadeIn('slow');

         $('form').trigger('reset');
      });
      return false;
   });

   // Smooth scroll pageup

   $(window).scroll(function() {
      if ($(this).scrollTop() > 1600) {
         $('.pageup').fadeIn();
      } else {
         $('.pageup').fadeOut();
      }
   });
   $("a[href='#up']").click(function () {
      const _href = $(this).attr("href");
      $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
      return false;
   });

   //Animated js

   new WOW().init();
});
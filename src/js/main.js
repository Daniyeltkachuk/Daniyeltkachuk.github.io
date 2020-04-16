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
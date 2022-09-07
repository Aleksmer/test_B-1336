import Swiper from 'swiper';

document.addEventListener("DOMContentLoaded", ()=> {
  new Swiper('.swiper-container', {
    spaceBetween: 20,
    slidesPerView: 1,
    // simulateTouch: true,
    // touchRatio: 1,
    // touchAngle: 45,
    // grabCursor: true,
    // slideToClickedSlide: true,
    // keyboard: {
    //   enabled: true,
    //   onlyInVieport: true,
    //   pageUpDown: true
    // },
    // Навигация, текущее положение прогрессбар
    pagination: {
      el: '.swiper-pagination',
      // буллеты
      clickable: true,
      // dynamicBullets: true,
    },
    // стрелки
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    }
  })
});

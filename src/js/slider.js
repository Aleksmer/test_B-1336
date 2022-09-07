import Swiper from 'swiper';

document.addEventListener("DOMContentLoaded", () => {
  new Swiper('.swiper-container-first', {
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

document.addEventListener("DOMContentLoaded", () => {
  new Swiper('.swiper-container-staff', {
    spaceBetween: 20,
    slidesPerView: 5,
    slidesOffsetAfter: 0,
    // loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      prevEl: '.swiper-button-prev.swiper-button-prev--staff',
      nextEl: '.swiper-button-next.swiper-button-next--staff',
    },
    keyboard: {
      enabled: true,
      onlyInVieport: true,
      pageUpDown: true
    },
    grabCursor: true,
    breakpoints: {
      299: {
        slidesPerView: 1,
      },
      599: {
        slidesPerView: 2,
      },
      1099: {
        slidesPerView: 3,
      },
      1919: {
        slidesPerView: 5,
      }
    }
  })
});

document.addEventListener("DOMContentLoaded", () => {
  new Swiper('.swiper-container-result', {
    spaceBetween: 20,
    slidesPerView: 5,
    slidesOffsetAfter: 0,
    // loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      prevEl: '.swiper-button-prev.swiper-button-prev-result',
      nextEl: '.swiper-button-next.swiper-button-next-result',
    },
    keyboard: {
      enabled: true,
      onlyInVieport: true,
      pageUpDown: true
    },
    grabCursor: true,
    breakpoints: {
      299: {
        slidesPerView: 1,
      },
      599: {
        slidesPerView: 2,
      },
    }
  })
});


const slider = document.querySelector('.swiper-container-service');
let {clientWidth} = document.body;
let mySlider;

let getSlider = () => {mySlider = new Swiper('.swiper-container-service', {
  spaceBetween: 5,
  slidesPerView: 6,
  slidesOffsetAfter: 0,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '.swiper-button-prev.swiper-button-prev-service',
    nextEl: '.swiper-button-next.swiper-button-next-service',
  },
  keyboard: {
    enabled: true,
    onlyInVieport: true,
    pageUpDown: true
  },
  grabCursor: true,
  breakpoints: {
    0: {
      slidesPerView: 6,
    },
  }
})
}
let serviceSlider = document.addEventListener("DOMContentLoaded", getSlider);


const resizeHandlerSlider = () => {
  if (clientWidth >= '1500') {
    clientWidth = document.body.clientWidth;
    if (mySlider) {
      mySlider.destroy();
    }
  }
  if (clientWidth < '1500') {
    clientWidth = document.body.clientWidth;
    if (mySlider.destroyed === true) {
      console.log(444)
      getSlider();
      console.log(mySlider)
      console.log(serviceSlider)
    }
  }
  // console.log(222)
  // serviceSlider;
}

// getSlider()
window.addEventListener('resize', resizeHandlerSlider);
document.addEventListener("DOMContentLoaded", resizeHandlerSlider);
// const sliderInit = () => {
//   mySlider = new Swiper(slider, {...})
// }



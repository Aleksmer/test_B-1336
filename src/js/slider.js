import Swiper from 'swiper';

const generateSwiper = (name,spaceBetween, slidesPerView, breakpoints, loop) => {
  return new Swiper(`.swiper-container--${name}`, {
    breakpoints,
    spaceBetween,
    slidesPerView,
    loop,
    grabCursor: true,
    keyboard: {
      enabled: true,
      onlyInVieport: true,
      pageUpDown: true
    },
    // Навигация, текущее положение прогрессбар
    pagination: {
      el: '.swiper-pagination',
      // буллеты
      clickable: true,
      // dynamicBullets: true,
    },
    // стрелки
    navigation: {
      prevEl: '#button-prev-firstscreen',
      nextEl: '#button-next-firstscreen',
    },
    breakpoints
  })
}



/*firstscreen*/
document.addEventListener("DOMContentLoaded", () => {
  new Swiper('.swiper-container--firstscreen', {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    grabCursor: true,
    keyboard: {
      enabled: true,
      onlyInVieport: true,
      pageUpDown: true
    },
    // Навигация, текущее положение прогрессбар
    pagination: {
      el: '.swiper-pagination',
      // буллеты
      clickable: true,
      // dynamicBullets: true,
    },
    // стрелки
    navigation: {
      prevEl: '.swiper-button-prev--firstscreen',
      nextEl: '.swiper-button-next--firstscreen',
    },
    breakpoints: {
      1520: {
        allowTouchMove: false,
        grabCursor: false,
      }
    }
  })
});
/*staff*/
document.addEventListener("DOMContentLoaded", () => {
  new Swiper('.swiper-container-staff', {
    spaceBetween: 20,
    slidesPerView: 5,
    slidesOffsetAfter: 0,
    loop: true,
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
        slidesPerView: 1.5,
      },
      849: {
        slidesPerView: 2,
      },
      1099: {
        slidesPerView: 3,
      },
      1699: {
        slidesPerView: 4.5,
      },
      1899: {
        slidesPerView: 5,
      }
    }
  })
});
/*result*/
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
      1499: {
        slidesPerView: 3,
      },
    }
  })
});
/*service*/
document.addEventListener("DOMContentLoaded", () => {
  new Swiper('.swiper-container-service', {
    spaceBetween: 20,
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
        slidesPerView: 1,
      },
      699: {
        slidesPerView: 2,
      },
    }
  })
});
/*products*/
document.addEventListener("DOMContentLoaded", () => {
  new Swiper('.swiper-container-products', {
    spaceBetween: 5,
    slidesPerView: 6,
    slidesOffsetAfter: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      prevEl: '#button-prev-product',
      nextEl: '#button-next-product',
    },
    keyboard: {
      enabled: true,
      onlyInVieport: true,
      pageUpDown: true
    },
    grabCursor: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      699: {
        slidesPerView: 2,
      },
    }
  })
});
/*events*/
document.addEventListener("DOMContentLoaded", () => {
  new Swiper('.swiper-container--event', {
    spaceBetween: 20,
    slidesPerView: 1,
    slidesOffsetAfter: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      prevEl: '#button-prev-event',
      nextEl: '#button-next-event',
    },
    keyboard: {
      enabled: true,
      onlyInVieport: true,
      pageUpDown: true
    },
    grabCursor: true,
    breakpoints: {
      0: {
        slidesPerView: 1.2,
      },
    }
  })
});


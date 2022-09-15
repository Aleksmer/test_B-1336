import Swiper from 'swiper';

const generateSwiper = (name, spaceBetween, loop, slidesPerView, breakpoints) => {
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
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      prevEl: `.swiper-button-prev--${name}`,
      nextEl: `.swiper-button-next--${name}`,
    },
    breakpoints,
  })
}

/*firstscreen*/
generateSwiper('firstscreen', 0, true, 1, {
  1520: {
    allowTouchMove: false,
    grabCursor: false
  }
})

/*staff*/
generateSwiper('staff', 20, true, 5, {
  299: {
    slidesPerView: 1,
  },
  599: {
    slidesPerView: 1.5,
  },
  849: {
    slidesPerView: 2,
  },
  1149: {
    slidesPerView: 3,
  },
  1699: {
    slidesPerView: 4,
  },
  // 1899: {
  //   slidesPerView: 5,
  // }
})

/*result*/
generateSwiper('result', 20, true, 5, {
  299: {
    slidesPerView: 1,
  },
  599: {
    slidesPerView: 2,
  },
  1499: {
    slidesPerView: 3,
  }
})

/*service*/
generateSwiper('service', 20, false, 6, {
  0: {
    slidesPerView: 1,
  },
  550: {
    slidesPerView: 2,
  }
})

/*products*/
generateSwiper('products', 5, false, 6, {
  0: {
    slidesPerView: 1,
  },
  769: {
    slidesPerView: 2,
  }
})

/*events*/
generateSwiper('event', 20, false, 1, {
  0: {
    slidesPerView: 1,
  },
  520: {
    slidesPerView: 1.2,
  }
})



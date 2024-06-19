function swiperInt() {
  
// =============== Recennt Articles Swiper

  const recennt_articles_swiper = new Swiper(".recennt-articles-swiper", {
    slidesPerView: 1.2,
    spaceBetween: 20,

    breakpoints: {
      575: {
        slidesPerView: 1.8,
        spaceBetween: 20,
      },
      767: {
        slidesPerView: 1.8,
        spaceBetween: 20,
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 2.5,
        spaceBetween: 36,
      },

      1366: {
        spaceBetween: 40,
        slidesPerView: 2.5,
      },

      1600: {
        spaceBetween: 40,
        slidesPerView: 2.5,
      },

      1920: {
        slidesPerView: 3,
        spaceBetween: 48,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".recennt-articles-swiper-navigation .swiper-button-next",
      prevEl: ".recennt-articles-swiper-navigation .swiper-button-prev",
    },
  });

  // =============== Team Swiper

  const our_team_swiper = new Swiper(".team-swiper", {
    slidesPerView: 1.2,
    spaceBetween: 20,

    breakpoints: {
      575: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3.4,
        spaceBetween: 36,
      },

      1201: {
        spaceBetween: 40,
        slidesPerView: 3.5,
      },

      1367: {
        spaceBetween: 40,
        slidesPerView: 3.6,
      },

      1660: {
        slidesPerView: 4,
        spaceBetween: 48,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".team-swiper-navigation .swiper-button-next",
      prevEl: ".team-swiper-navigation .swiper-button-prev",
    },
  });

}

swiperInt();
barba.hooks.afterEnter(() => {
  swiperInt();
});

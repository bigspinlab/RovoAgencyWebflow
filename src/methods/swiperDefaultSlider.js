if (document.getElementById("rovo-slider-cards")) {
  new Swiper("#rovo-slider-cards", {
    grabCursor: true,
    simulateTouch: true,
    slidesPerView: 1,
    spaceBetween: 0,
    snapOnRelease: true,
    centeredSlides: false,
    watchSlidesProgress: true,
    shortSwipes: true,
    loop: true,
    pagination: {
      el: document.querySelector(".rovo-slider-cards .swiper-pagination"),
      clickable: false
    },

    breakpoints: {
      768: {
        slidesPerView: 1.5,
        spaceBetween: 32
      },
      1024: {
        slidesPerView: 1.5,
        spaceBetween: 32,
        slideToClickedSlide: true
      }
    }
  });
}

if (document.getElementById("rovo-slider-selected-clients")) {
  new Swiper("#rovo-slider-selected-clients", {
    simulateTouch: true,
    slidesPerView: 1,
    spaceBetween: 0,
    snapOnRelease: true,
    centeredSlides: false,
    watchSlidesProgress: true,
    shortSwipes: true,
    loop: true,
    pagination: {
      el: document.querySelector(".rovo-clients-swiper .swiper-pagination"),
      clickable: false
    }
  });
}

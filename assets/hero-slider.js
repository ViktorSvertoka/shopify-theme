const heroSliderConfig = {
  direction: 'horizontal',
  speed: 3000,
  autoplay: {
    delay: 9000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  loop: false,
  spaceBetween: 0,
  pagination: {
    el: '.hero__pagination',
    clickable: true,
    type: 'bullets',
    bulletClass: 'swiper-pagination-bullet',
    bulletActiveClass: 'swiper-pagination-bullet-active',
  },
  observer: true,
  observeParents: true,
};

const resetToFirstSlide = swiper => {
  setTimeout(() => {
    swiper.slideTo(0, swiper.params.speed);
  }, swiper.params.autoplay.delay);
};

const initHeroSlider = () => {
  const container = document.querySelector('.hero__slider');
  if (!container) return;

  const heroSwiper = new Swiper(container, {
    ...heroSliderConfig,
    on: {
      slideChange() {
        if (this.activeIndex === this.slides.length - 1) {
          resetToFirstSlide(this);
        }
      },
      reachEnd() {
        resetToFirstSlide(this);
      },
    },
  });

  window.heroSwiper = heroSwiper;
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHeroSlider);
} else {
  initHeroSlider();
}

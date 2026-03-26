const mySwiperListHistory = new Swiper('.list-history-university', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        320: { slidesPerView: 1, },
        576: { slidesPerView: 2, },
        768: { slidesPerView: 2, spaceBetween: 30 },
        992: { slidesPerView: 2.5, spaceBetween: 25 },
        1200: { slidesPerView: 4, spaceBetween: 20 }
    },
});
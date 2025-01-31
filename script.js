 new Swiper('.card-wrapper', {
    loop: true,
  
    // Pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768:{
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1020:{
            slidesPerView: 3,
            spaceBetween: 20,
        }
    }
    });
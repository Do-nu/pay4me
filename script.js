document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
  });
});


 
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

    let acc = document.getElementsByClassName('accordion');
    let i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener('click', function() {
        this.classList.toggle('active');
        this.parentElement.classList.toggle('active');
        let panel = this.nextElementSibling;
        if (panel.style.display == 'block') {
          panel.style.display = 'none';
        } else {
          panel.style.display = 'block';
        }
      });
    }
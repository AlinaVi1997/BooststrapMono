// section comments slider//
const swiper = new Swiper('.swiper-container',{
    slidesPerView: 2,
    spaceBetween: 20,
    speed: 800,
    freeMode: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-arrow-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
        breakpoints: {
            320: {
            slidesPerView: 1,
        },
            600: {
            slidesPerView: 2,
        },
    },
});

// header-hamburger-menu
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu--active');
});



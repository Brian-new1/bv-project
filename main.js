let swiperCard = new Swiper('.card__content',{
    loop: true,
    spaceBetween: 32,



    pagination: {
        el: '.Swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})
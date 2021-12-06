const banners = new Swiper('.banners', {
    loop: true, 
    autoplay: true,
    speed: 1800,   
    navigation: {
      nextEl: '.banners-button-next',
      prevEl: '.banners-button-prev',
      
    },
  });
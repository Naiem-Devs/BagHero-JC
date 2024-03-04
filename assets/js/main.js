(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  });

  $('.heroBook__btn a').click( function (){ 
    $('.heroBook__btn input').toggleClass('visible');   
  }); 

  $('.select').niceSelect();

  // owlCarousel
  $(".Reviews__slider").owlCarousel({
    loop: true,
    margin: 30,
    smartSpeed: 1000,
    items: 6,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      767: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });

  // owlCarousel
  $(".Blog__slider").owlCarousel({
    loop: true,
    margin: 30,
    stagePadding: 450,
    items: 1,
    smartSpeed: 1000,
    center: true,
    navText: [
      '<i class="far fa-chevron-left"></i>',
      '<i class="far fa-chevron-right"></i>'
    ],
    nav: true,
    dots: true,
    responsive: {
      0: {
        margin: 10,
        stagePadding: 40
      },
      480: {
        margin: 30,
        stagePadding: 80
      },
      767: {
        stagePadding: 160
      },
      992: {
        stagePadding: 220
      },
      1100: {
        stagePadding: 240
      },
      1300: {
        stagePadding: 300
      },
      1410: {
        stagePadding: 330
      },
      1550: {
        stagePadding: 370,
      },
      1800: {
        stagePadding: 450,
      }
    }
  });



  // page Animation
  AOS.init({
    mirror: true,
    duration: 1500,
    initClassName: 'aos-init',
    once: true,
  });

  // data-aos="fade-up" 
  // data-aos-delay="00" 

 
})(jQuery);

'use strict';

function Carousels() {
    const self = this;

    self.init = function() {
      const $ = require('jquery');

      // Documents in pages
      $(".projects-carousel").owlCarousel({
        nav : true,
        dots: false,
        loop: true,
        autoplayHoverPause: true,
        autoplay: true,
        autoplayTimeout: 3000,
        items : 4,
        responsive:{
          0:{
            items: 1,
          },
          600:{
            items: 2,
          },
          992:{
            items: 3,
          }
        }
      });

      // Person avatar
      $('.touch-slider').each(function(){
        const owl = $(this);
        owl.owlCarousel({
          nav : true,
          dots: false,
          loop: true,
          autoplayHoverPause: true,
          autoplay: true,
          autoplayTimeout: 3000,
          items : 1
        });
      });
    };
}

module.exports = Carousels;

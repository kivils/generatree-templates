'use strict';

function Carousels() {
    const self = this;

    self.init = function() {
      const $ = require('jquery');

      $(".projects-carousel").owlCarousel({
        navigation : true,
        pagination: false,
        slideSpeed : 400,
        stopOnHover: true,
        autoPlay: 3000,
        items : 4,
        itemsDesktopSmall : [900,3],
        itemsTablet: [600,2],
        itemsMobile : [479, 1]
      });
    };
}

module.exports = Carousels;

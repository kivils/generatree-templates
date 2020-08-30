'use strict';

function Lightboxes() {
    const self = this;

    self.init = function() {
      const $ = require('jquery');

      $('.lightbox').fancybox({
        caption : function() {
          let caption = $(this).parent('.portfolio-thumb').next('.portfolio-details') || '';

          return caption.length ? caption : '';
        }
      });
    };
}

module.exports = Lightboxes;

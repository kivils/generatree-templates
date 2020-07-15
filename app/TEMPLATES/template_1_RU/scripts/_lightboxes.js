'use strict';

function Lightboxes() {
    const self = this;

    self.init = function() {
      const $ = require('jquery');

      $('.lightbox').nivoLightbox({
        effect: 'fadeScale',
        keyboardNav: true,
        errorMessage: 'The requested content cannot be loaded. Please try again later.'
      });
    };
}

module.exports = Lightboxes;

'use strict';

function Lightboxes() {
    const self = this;

    self.init = function() {
      const $ = require('jquery');

      $('.lightbox').fancybox({
        //
      });
    };
}

module.exports = Lightboxes;

'use strict';

function ScrollToTop() {
    const self = this;

    self.init = function() {
      const $ = require('jquery');
      const offset = 200;
      const duration = 500;

      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
      });
      $('.back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
      })
    };

}

module.exports = ScrollToTop;

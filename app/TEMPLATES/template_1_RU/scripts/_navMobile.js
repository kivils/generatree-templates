'use strict';

function NavMobile() {
    const self = this;

    self.init = function() {
      const $ = require('jquery');

      $('.wpb-mobile-menu').slicknav({
        prependTo: '.navbar-header',
        parentTag: 'margo',
        allowParentLinks: true,
        duplicate: false,
        label: '',
        closedSymbol: '<i class="fa fa-angle-right"></i>',
        openedSymbol: '<i class="fa fa-angle-down"></i>',
      });
    };
}

module.exports = NavMobile;

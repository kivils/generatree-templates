'use strict';

function IsJS() {
    const self = this;

    self.init = function() {
        const container = document.querySelector('html');

        container.classList.remove('no-js');
        container.classList.add('js');
    };

}

module.exports = IsJS;

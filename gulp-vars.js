'use strict';

const browserify = require('browserify');
const watchify = require('watchify');

/**
 * Project configuration
 */
let GulpParams = (function () {
    function GulpParams() {
        this.hostnameTest = 'http://generatree-templates';

        /**
         * Source
         */
        this.sourcePath = 'app/TEMPLATES/template_1_RU';

        this.styleSourcePath = this.sourcePath + '/styles';
        this.cssWild = this.styleSourcePath + '/**/*.css';
        this.cssSourcePath = this.sourcePath + '/css';

        this.scriptsSourcePath = this.sourcePath + '/js';

        this.pagesWild = [
            this.sourcePath + '/**/*.html'
        ];

        this.imagesSourcePath = this.sourcePath + '/images';
        this.imagesWild = this.imagesSourcePath + '/**/*';

        this.fontsSourcePath = this.sourcePath + '/fonts';
        this.fontsWild = this.fontsSourcePath + '/**/*';

        this.fontsAssestsPath = this.sourcePath + '/asset/fonts';
        this.fontsAssests = this.fontsAssestsPath + '/**/*';

        /**
         * Dist
         */
        this.buildPath = 'dist/TEMPLATES/template_1_RU';

        this.imagesBuild = this.buildPath + '/images';
        this.fontsBuild = this.buildPath + '/fonts';
        /**
         * Custom browserify options
         * @type {{entries: *[], debug: boolean}}
         */
        this.browserifyOpts = {
            entries: [
                this.scriptsSourcePath + '/script.js'
            ],
            debug: true
        };

        /**
         * Custom browserify options for build
         * @type {{entries: *[], debug: boolean}}
         */
        this.browserifyOptsBuild = {
            entries: [this.scriptsSourcePath + '/script.js'],
            debug: true
        };

        /**
         * Watchify
         */
        this.b = watchify(browserify(watchify.args, this.browserifyOpts));

        /**
         * Browserify
          */
        this.br = browserify(this.browserifyOptsBuild);

    }
    return GulpParams;
})();

module.exports = GulpParams;

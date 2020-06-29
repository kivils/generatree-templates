'use strict';

const gulp = require('gulp');
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
        * Js vendors to inject
        */
        this.injectJs = gulp.src([
            './' + this.sourcePath + '/js/jquery-2.1.4.min.js',
            './' + this.sourcePath + '/js/jquery.migrate.js',
            './' + this.sourcePath + '/asset/js/bootstrap.min.js',
            './' + this.sourcePath + '/js/jquery.dataTables.min.js',
            './' + this.sourcePath + '/asset/js/dataTables.bootstrap.min.js',
            './' + this.sourcePath + '/asset/js/dataTables.colReorder.min.js',
            './' + this.sourcePath + '/asset/js/dataTables.responsive.min.js',
            './' + this.sourcePath + '/asset/js/responsive.bootstrap.min.js',
            './' + this.sourcePath + '/asset/js/dataTables.select.min.js',
            './' + this.sourcePath + '/asset/js/dataTables.buttons.min.js',
            './' + this.sourcePath + '/asset/js/buttons.colVis.min.js',
            './' + this.sourcePath + '/asset/js/dataTables.rowGroup.min.js',
            './' + this.sourcePath + '/js/owl.carousel.min.js',
            './' + this.sourcePath + '/js/nivo-lightbox.min.js',
            './' + this.sourcePath + '/js/jquery.appear.js',
            './' + this.sourcePath + '/js/jquery.nicescroll.min.js',
            './' + this.sourcePath + '/js/jquery.slicknav.js',
            './' + this.sourcePath + '/js/jquery.isotope.min.js',
            './' + this.sourcePath + '/asset/js/bootstrap-treeview.min.js'
          ],
          {read: false}
        );

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

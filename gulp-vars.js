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

        this.GTtemplateName = 'template_simple_RU';

        /**
         * Source
         */
        this.sourcePath = 'app/TEMPLATES/' + this.GTtemplateName;

        this.styleSourcePath = this.sourcePath + '/styles';
        this.cssWild = this.styleSourcePath + '/**/*.css';
        this.cssSourcePath = this.sourcePath + '/css';

        this.scriptsSourcePath = this.sourcePath + '/scripts';
        this.scriptsWild = this.scriptsSourcePath + '/**/*.js';
        this.jsSourcePath = this.sourcePath + '/js';

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
        this.buildPath = 'dist/TEMPLATES/' + this.GTtemplateName;

        this.imagesBuild = this.buildPath + '/images';
        this.fontsBuild = this.buildPath + '/fonts';
        this.jsBuild = this.buildPath + '/js';
        this.jsAssestsBuild = this.buildPath + '/asset/js';

        /**
        * CSS vendors to inject
        */
        this.injectCss = gulp.src([
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/datatables.net-bs/css/dataTables.bootstrap.min.css',
            'node_modules/datatables.net-colreorder-bs/css/colReorder.bootstrap.min.css',
            'node_modules/datatables.net-responsive-bs/css/responsive.bootstrap.min.css',
            'node_modules/datatables.net-select-bs/css/select.bootstrap.min.css',
            'node_modules/datatables.net-buttons-bs/css/buttons.bootstrap.min.css',
            'node_modules/datatables.net-rowgroup-bs/css/rowGroup.bootstrap.min.css',
            'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.css',
            'node_modules/font-awesome/css/font-awesome.min.css',
            './' + this.sourcePath + '/asset/css/bootstrap-treeview.min.css',
          ]
        );

        /**
        * JS vendors to inject
        */
        this.injectJs = gulp.src([
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
            'node_modules/datatables.net/js/jquery.dataTables.js',
            'node_modules/datatables.net-bs/js/dataTables.bootstrap.min.js',
            'node_modules/datatables.net-colreorder/js/dataTables.colReorder.min.js',
            'node_modules/datatables.net-colreorder-bs/js/colReorder.bootstrap.min.js',
            'node_modules/datatables.net-responsive/js/dataTables.responsive.min.js',
            'node_modules/datatables.net-responsive-bs/js/responsive.bootstrap.min.js',
            'node_modules/datatables.net-select/js/dataTables.select.min.js',
            'node_modules/datatables.net-select-bs/js/select.bootstrap.min.js',
            'node_modules/datatables.net-buttons/js/dataTables.buttons.min.js',
            'node_modules/datatables.net-buttons/js/buttons.colVis.min.js',
            'node_modules/datatables.net-rowgroup/js/dataTables.rowGroup.min.js',
            'node_modules/datatables.net-rowgroup-bs/js/rowGroup.bootstrap.min.js',
            'node_modules/owl.carousel/dist/owl.carousel.min.js',
            'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js',
            './' + this.sourcePath + '/asset/js/bootstrap-treeview.min.js',
            // './' + this.sourcePath + '/js/jquery.appear.js',
            // './' + this.sourcePath + '/js/jquery.isotope.min.js',
          ]
        );

        /**
         * Custom browserify options
         * @type {{entries: *[], debug: boolean}}
         */
        this.browserifyOpts = {
            entries: [
                this.scriptsSourcePath + '/main.js'
            ],
            debug: true
        };

        /**
         * Custom browserify options for build
         * @type {{entries: *[], debug: boolean}}
         */
        this.browserifyOptsBuild = {
            entries: [this.scriptsSourcePath + '/main.js'],
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

      /**
       * Zip folder
       */
      this.zipPath = 'build'

    }
  return GulpParams;
})();

module.exports = GulpParams;

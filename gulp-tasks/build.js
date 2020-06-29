/**
 * Task to build production folder
 */

const gulp = require('gulp');
const GulpParams = require('../gulp-vars.js');
const gulpParams = new GulpParams();

const gulpLoadPlugins = require('gulp-load-plugins');
const injectVersion = require('gulp-inject-version');
const del = require('del');
const $ = gulpLoadPlugins();

function cleanupDist(cb) {
  del('dist/**/*.*');

  cb();
}

function pages(cb) {
  const jsFilter = $.filter(['**/*.js', '!**/tree.init.js'], { restore: true }); // tree.init.js contains @ symbol: throws error when minifying
  const cssFilter = $.filter('**/*.css', { restore: true });
  const pagesFilter = $.filter('**/*.html', { restore: true });

  gulp.src(gulpParams.pagesWild)
    .pipe($.inject(gulpParams.injectJs, {relative: true}))

    .pipe($.useref())

    // js
    // .pipe(jsFilter)
    // .pipe($.uglify({preserveComments: '@license'}))
    // .pipe(jsFilter.restore)

    // css
    .pipe(cssFilter)
    .pipe( $.postcss([ require('precss'), require('autoprefixer'), require('cssnano') ]) )
    .pipe(cssFilter.restore)

    // html
    .pipe(pagesFilter)
    .pipe($.replace('.css', '.css?%%GULP_INJECT_VERSION%%'))
    .pipe($.replace('.js', '.js?%%GULP_INJECT_VERSION%%'))
    .pipe(injectVersion({
      replace: /%%GULP_INJECT_VERSION%%/g
    }))
    .pipe($.htmlmin({
      collapseWhitespace: true,
      conservativeCollapse: true,
      removeComments: true,
    }))
    .pipe(pagesFilter.restore)

    .pipe(gulp.dest(gulpParams.buildPath)); // Put files into build folder

  cb();
}

function copyFiles(cb) {
  gulp.src(gulpParams.imagesWild)
    .pipe(gulp.dest(gulpParams.imagesBuild)); // Put files into build folder

  gulp.src(gulpParams.fontsAssests)
    .pipe(gulp.dest(gulpParams.fontsBuild)); // Put files into build folder

  gulp.src(gulpParams.fontsWild)
    .pipe(gulp.dest(gulpParams.fontsBuild)); // Put files into build folder

  cb();
}

gulp.task('build', gulp.series(cleanupDist,  gulp.series(pages, copyFiles)));

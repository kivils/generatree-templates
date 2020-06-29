/**
 * Start server for dev, watch changes in files
 */

const gulp = require('gulp');
const GulpParams = require('../gulp-vars.js');
const gulpParams = new GulpParams();

const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();

const browserSync = require('browser-sync');
const reload = browserSync.reload;

function styles(cb) {
  gulp.src([gulpParams.styleSourcePath + '/style.css'])
    .pipe($.plumber()) // Fix streams
    .pipe( $.postcss([ require('precss'), require('autoprefixer') ]) )
    .pipe(gulp.dest(gulpParams.cssSourcePath))
    .pipe(reload({stream: true})) // Reload browsers
  ;

  cb();
}

function serve(cb) {
  browserSync({ // Sync and reload browsers
    notify: true,
    // proxy: { // Start proxy-server
    //   target: gulpParams.hostnameTest + gulpParams.sourcePath
    // },
    server: {
      baseDir: gulpParams.sourcePath
    }
  });

  gulp.watch(gulpParams.cssWild, { ignoreInitial: false }, styles);

  cb();
}

gulp.task('serve', gulp.series(serve));
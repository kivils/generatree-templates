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

const source = require('vinyl-source-stream');

function styles(cb) {
  gulp.src([gulpParams.styleSourcePath + '/style.css'])
    .pipe($.plumber()) // Fix streams
    .pipe( $.postcss([ require('precss'), require('autoprefixer') ]) )
    .pipe(gulp.dest(gulpParams.cssSourcePath))
    .pipe(reload({stream: true})) // Reload browsers
  ;

  cb();
}

function injectVendors(cb) {
  gulpParams.injectCss
    .pipe(gulp.dest(gulpParams.sourcePath + '/css'));
  gulpParams.injectJs
    .pipe(gulp.dest(gulpParams.sourcePath + '/js'));

  gulp.src(gulpParams.pagesWild)
    .pipe($.inject(gulpParams.injectCss, {relative: true}))
    .pipe($.inject(gulpParams.injectJs, {relative: true}))

    .pipe(gulp.dest('./' + gulpParams.sourcePath));

  cb();
}

function bundle() {
  gulpParams.b
    .transform('babelify')
    .bundle()
    .on('error', $.util.log.bind($.util, 'Browserify Error'))
    .pipe(source('scripts.js'))
    .pipe(gulp.dest('./' + gulpParams.jsSourcePath))
    .pipe(reload({stream: true})) // Reload browsers
  ;
}

function scripts(cb) {
  bundle();
  gulpParams.b.on('update', bundle);
  gulpParams.b.on('log', $.util.log);

  cb();
}

function serve(cb) {
  browserSync({ // Sync and reload browsers
    notify: true,
    // proxy: { // Start proxy-server
    //   target: gulpParams.hostnameTest + './' + gulpParams.sourcePath
    // },
    server: {
      baseDir: './' + gulpParams.sourcePath
    }
  });

  gulp.watch(gulpParams.pagesWild).on('change', reload); // Reload browsers

  gulp.watch(gulpParams.cssWild, { ignoreInitial: false }, styles);
  gulp.watch(gulpParams.scriptsWild, { ignoreInitial: false }, scripts);

  cb();
}

gulp.task('serve', gulp.series(injectVendors, serve));

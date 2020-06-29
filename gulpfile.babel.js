/**
 * Require gulp tasks
 * @see https://github.com/frankwallis/gulp-hub
 */
'use strict';

var gulp = require('gulp');
const HubRegistry = require('gulp-hub');

const hub = new HubRegistry(['gulp-tasks/**/*.js']);

/* tell gulp to use the tasks just loaded */
gulp.registry(hub);

/* global require */
'use strict';
var gulp = require('gulp');
var clean = require('gulp-clean');
var jsdoc = require('gulp-jsdoc');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var noop = function() {};
var stylish = require('gulp-jscs-stylish');
var jsonlint = require('gulp-jsonlint');
var csslint = require('gulp-csslint');
var sloc = require('gulp-sloc');
// inherit center configs
var webapplateConfigs = require('./config');

var options = {
  param: { // Project settings
    debug: webapplateConfigs.debug,
    src: 'public',
    build: 'build',
    tmp: '.tmp',
    dst: 'dist',
    pack: 'pack',
    www: 'www'
  }
};

gulp.task('clean-jsdoc', function() {
  return gulp.src('docs', {read: false})
    .pipe(clean());
});

gulp.task('jsdoc', function() {
  return gulp.src(options.param.src + '/js/*.js')
    .pipe(jsdoc('./docs'));
});

var lintSources = ['*.js', 'routes/**/*.js', options.param.src + '/**/*.js'];

gulp.task('jsonlint', function() {
  return gulp.src([
    'package.json',
    'bower.json',
    options.param.src + '/manifest.webapp',
    options.param.src + '/manifest.json',
    options.param.src + '/**/*.json'
    ])
    .pipe(jsonlint())
    .pipe(jsonlint.reporter());
});

gulp.task('csslint', function() {
  return gulp.src(options.param.src + '/style/**/*.css')
    .pipe(csslint('.csslintrc'))
    .pipe(csslint.reporter());
});

gulp.task('sloc-client', function() {
  gulp.src([
    options.param.src + '/*.html',
    options.param.src + '/js/*.js',
    options.param.src + '/style/*.css',
    options.param.src + '/test/unit/*.js',
    ])
    .pipe(sloc());
});

gulp.task('sloc-server', function() {
  gulp.src([
    'server.js',
    'routes/**/*.js',
    'views/**/*.html'
    ])
    .pipe(sloc());
});

/**
 * Runs JSLint and JSCS on all javascript files found in the app dir.
 */
gulp.task('lint', ['jsonlint', 'csslint', 'sloc-server', 'sloc-client'],
  function() {
    return gulp.src(lintSources)
      .pipe(jshint('.jshintrc'))
      .pipe(jscs())
      .on('error', noop) // don't stop on error
      .pipe(stylish.combineWithHintResults())
      .pipe(jshint.reporter('default'));
  });

gulp.task('githooks', function() {
  return gulp.src(['pre-commit'])
    .pipe(gulp.dest('.git/hooks'));
});

gulp.task('docs', ['clean-jsdoc', 'lint', 'jsdoc']);

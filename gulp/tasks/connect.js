// Include gulp
var gulp = require('gulp'); 

// Include other plugins
var connect = require('gulp-connect');

module.exports = function () {
  return gulp.task('connect', function() {
    connect.server({
      root: 'client',
      port: process.env.NODE_ENV || 8000,
      livereload: true
    });
  });
};

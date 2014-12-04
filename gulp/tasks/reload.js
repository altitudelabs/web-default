// Include gulp
var gulp = require('gulp'); 

var connect = require('gulp-connect');

module.exports = function() {
  gulp.src('./*')
    .pipe(connect.reload());
};


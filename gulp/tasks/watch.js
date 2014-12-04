// Include gulp
var gulp = require('gulp'); 

// Watch Files For Changes
module.exports = function() {
  gulp.watch('client/app/*.js', ['browserify']);
  gulp.watch('client/app/*.scss', ['sass']);
  gulp.watch('client/**/*.html', ['reload']);
};


// Include gulp
var gulp = require('gulp'); 
// Include Our Plugins
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');


// Compile Our Sass
module.exports = function() {
  return gulp.src('client/app/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('client/app/'))
    // .pipe(livereload());

    .pipe(connect.reload());
};


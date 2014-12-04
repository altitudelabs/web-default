var gulp = require('./gulp/index.js')([
  'clean',
  'sass',
  'watch',
  'connect',
  'reload',
  'browserify',
  'uglify',
  'minify-css',
  'minify-html',
  'resources'
]);

var runSequence = require('run-sequence');
// Default Task
gulp.task('default', function (cb) {
  runSequence(
    'clean',
    ['sass', 'browserify'],
    ['uglify', 'minify-html', 'minify-css'],
    'watch',
    cb
  );
});

gulp.task('dev', ['watch', 'connect']);

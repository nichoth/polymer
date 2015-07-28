var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');
var del = require('del');
var rename = require('gulp-rename');

gulp.task('watch-components', function() {
  gulp.watch('browser/elmts.html', ['vulcanize']);
});

gulp.task('clean', function(cb) {
  del(['public/vulcanized.html'], cb);
});

gulp.task('vulcanize', ['clean'], function() {
  return gulp.src('browser/elmts.html')
    .pipe(vulcanize())
    .pipe(rename('vulcanized.html'))
    .pipe(gulp.dest('public'))
  ;
});

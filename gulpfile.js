var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./public/styles/scss/*.scss')
    .pipe(sass(
      {outputStyle: 'compressed'}
    ).on('error', sass.logError))
    .pipe(gulp.dest('./public/styles'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./public/styles/scss/*.scss', ['sass']);
});

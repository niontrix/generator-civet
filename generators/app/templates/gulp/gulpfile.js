import gulp from 'gulp';
import civet from 'gulp-civet';

gulp.task('civet', () => {
  return gulp.src('./src/*.civet')
    .pipe(civet({
      extension: '.js',
      js: true,
    }))
    .pipe(gulp.dest('./dist'));
});

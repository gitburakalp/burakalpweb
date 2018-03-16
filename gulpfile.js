var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano');

var scssFile = 'app/scss/allinone.scss';
var cssDir = 'app/css/';

gulp.task('sass',function(){
  return gulp.src(scssFile)
        .pipe(sass())
        .pipe(cssnano())
        .pipe(gulp.dest(cssDir))
});

gulp.task('watch',function(){
  gulp.watch('app/scss/**/*.scss',['sass']);
});

gulp.task('default', ['sass','watch']);

var gulp = require('gulp'),
  sass = require('gulp-sass'),
  cssnano = require('gulp-cssnano'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  plumber = require('gulp-plumber');

var scssFile = 'app/scss/allinone.scss';
var cssDir = 'app/css/';
var jsFiles = ['node_modules/jquery/dist/jquery.js','app/js/all.js'];

gulp.task('sass', function() {
  return gulp.src(scssFile)
    .pipe(plumber())
    .pipe(sass())
    .pipe(cssnano())
    .pipe(gulp.dest(cssDir))
});

gulp.task('js:min', function() {
  return gulp.src(jsFiles)
    .pipe(concat('all.min.js'))
    .pipe(uglify({
       mangle: {
          toplevel: true
        }
     }))
    .pipe(gulp.dest('app/js/'));
})

gulp.task('watch', function() {
  gulp.watch('app/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);

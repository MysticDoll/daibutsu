var gulp = require('gulp');
var browserify = require('browserify');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var html = require('html-browserify');
var open = require('gulp-open');
var server = require('./server');

gulp.task('default', ['build', 'server', 'browser']);

gulp.task('build', function () {
  browserify(
        { entries: ['./index.coffee'],
          extensions: ['.coffee', '.js'],
        })
  .transform('coffeeify')
  .bundle()
  .pipe(source('main.js'))
  .pipe(gulp.dest('./'));

  gulp.src('./main.js')
  .pipe(uglify())
  .pipe(rename('main.min.js'))
  .pipe(gulp.dest('./'));
});

gulp.task('server', server());

gulp.task('browser', function(){
  gulp.src('./index.html')
  .pipe(open({uri: 'http://localhost:8080'}));
});


var gulp = require('gulp');
var open = require('gulp-open');
var server = require('./server');

gulp.task('default', ['server', 'browser']);

gulp.task('server', server());

gulp.task('browser', function(){
  gulp.src('./index.html')
  .pipe(open({uri: 'http://localhost:8080'}));
});


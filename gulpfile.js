var gulp = require('gulp');
var open = require('gulp-open');

gulp.task('default', ['server', 'browser']);

gulp.task('server', function(){require("./server");});

gulp.task('browser', function(){
  gulp.src('./index.html')
  .pipe(open({uri: 'http://localhost:8080'}));
});


var gulp = require('gulp');
var stylus = require('gulp-stylus');
var jeet = require('jeet');
var nib = require('nib');
var rupture = require('rupture');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: './',
      directory: true
    }
  });
});

gulp.task('stylus', function() {
  gulp.src('./**/*.styl')
  .pipe(stylus({
    use: [nib(), jeet(), rupture()]
  }))
  .pipe(gulp.dest('.'))
  .pipe(reload({
    stream: true
  }));
});

gulp.task('bs-reload', function() {
  browserSync.reload();
});

gulp.task('default', ['stylus', 'browser-sync'], function() {
  gulp.watch('./**/*.styl', ['stylus']);
  gulp.watch(['./**/*','!./**/*.styl', '!./**/*.css'], ['bs-reload']);
});


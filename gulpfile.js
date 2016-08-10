var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

gulp.task('scripts', function() {
    return gulp.src('process/js/*.js')
      .pipe(concat('main.js'))
      .pipe(gulp.dest('builds/js'));
});

gulp.task('scripts', function() {
    return gulp.src('process/js/*.js')
      .pipe(concat('main.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('builds/js'));
});


var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	ngAnnotate = require('gulp-ng-annotate'),
	sourcemaps = require('gulp-sourcemaps');

gulp.task('js', function() {
	gulp.src('ng_components/**/*.js')
	.pipe(sourcemaps.init())
	.pipe(concat('mint.app.js'))
	// .pipe(ngAnnotate())
	// .pipe(uglify())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('public/js/'));
});

gulp.task('watch:js', ['js'], function(){
	gulp.watch('ng_components/**/*.js', ['js']);
});
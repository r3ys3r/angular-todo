"use strict";

// PACKAGES
var gulp   = require('gulp'),
	concat = require('gulp-concat'),
	minify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	align  = require('gulp-align');

// CONCAT SCRIPTS TASK
gulp.task("concatScript", function(){
	gulp.src([
		'js/angular.min.js',
		'js/todo.js'
	])
	.pipe(concat('app.js'))
	.pipe(gulp.dest("js"));
});

// MINIFY SCRIPTS TASK
gulp.task("minifyScripts", function(){
	gulp.src('js/app.js')
	.pipe(minify())
	.pipe(rename('app.min.js'))
	.pipe(gulp.dest('js'));
});

// WATCH TASK
gulp.task('watchFiles', function() {
  gulp.watch('scss/**/*.scss', ['compileSass']);
  gulp.watch('js/main.js', ['concatScripts']);
})


// PRODUCTION BUILD TASK
gulp.task("build", ['concatScript', 'minifyScripts'], function(){
	return gulp.src([
		"css/bootstrap.css",
		"css/todo.css",
		"js/app.min.js",
		"fonts/**"
	],
	{base: './'}
	.pipe(gulp.dest('dist'))
	)	
});




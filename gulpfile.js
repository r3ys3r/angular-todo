'use strict';

var gulp = require('gulp'),
	concat = require('gulp-concat');

gulp.task("concatScripts", function(){
	gulp.src('js')
	.pipe(concat())
});
const gulp = require('gulp'),
	  uglify = require('gulp-uglify'),
	  rename = require('gulp-rename'),
	  concat = require('gulp-concat'),
	  sass = require('gulp-sass');

gulp.task('sass',()=>{
	gulp.src('src/sass/*.scss')
	.pipe(sass())
	//.pipe(cssnano())
	.pipe(rename({"suffix" : ".min"}))
	.pipe(gulp.dest('dest/css'))
})

gulp.task('default',()=>{
	gulp.watch(['src/sass/*.scss'],['sass']);
})

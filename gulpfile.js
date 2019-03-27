const gulp = require('gulp'),
	  uglify = require('gulp-uglify'),
	  rename = require('gulp-rename'),
	  concat = require('gulp-concat'),
	  sass = require('gulp-sass'),
	  html=require('gulp-minify-html'),
	  images=require('gulp-imagemin');
const babel = require('gulp-babel');

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
gulp.task('es6',()=>{
	 gulp.src('src/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dest/js'))
})
//处理js任务
//gulp.task('js',function(){
//	gulp.src('src/js/*.js')
//	.pipe(uglify())
//	//.pipe(rename({"suffix" : ".min"}))
//	.pipe(gulp.dest('dest/js'));
//})
gulp.task('js',function(){
	gulp.src('src/js/*')
	.pipe(uglify())
	.pipe(gulp.dest('dest/js'));
})
gulp.task('html',function(){
	gulp.src('src/html/*.html')
	.pipe(html())
	//.pipe(rename({"suffix" : ".min"}))
	.pipe(gulp.dest('dest/html'));
})

gulp.task('images',function(){
	gulp.src('src/images/*')
	.pipe(images())
	//.pipe(rename({"suffix" : ".min"}))
	.pipe(gulp.dest('dest/images'));
})

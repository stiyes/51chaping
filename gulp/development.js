var gulp = require('gulp'),
  concat = require('gulp-concat'),
  sass = require('gulp-sass'),
  minifyCss = require('gulp-minify-css'),
  rename = require('gulp-rename'),
  // gutil = require('gulp-util'),
  uglify = require('gulp-uglify');


var defaultTasks = ['sass','watch'];

var paths = {
  css : ['./public/css/**/*.css'],
  sass : ['./public/scss/**/*.scss'],
  cssDest : './public/css'
};

// 设置环境变量
gulp.task('env:development', function(){
  process.env.NODE_ENV = 'development';
});

// Sass编译
gulp.task('sass', function(done){
  gulp.src(paths.sass)
  .pipe(sass())
  .pipe(gulp.dest(paths.cssDest))
  .pipe(minifyCss({
    keepSpecialComments: 0
  }))
  .pipe(rename({extname: '.min.css'}))
  .pipe(gulp.dest(paths.cssDest))
  .on('end',done);
});

// 监听文件变化
gulp.task('watch',function(){
  gulp.watch(paths.sass,['sass']);
});

gulp.task('development', defaultTasks);

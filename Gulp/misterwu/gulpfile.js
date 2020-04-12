//处理任务
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

/*

    gulp.task  --  定义任务
    gulp.src  --  找到需要执行任务的文件
    gulp.desc  --  执行任务的文件的去处
    gulp.watch  --  观察文件是否变化

 */

//定义任务
//执行任务: gulp message
 gulp.task('message', function() {
     console.log('Gulp is running');
 })

//定义默认任务
//执行任务: gulp即可
 /*  gulp.task('default', function() {
    console.log('Gulp is running');
}) */


//拷贝文件
gulp.task('copyHtml',function(){
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
})

//图片压缩
//npm install gulp-imagemin --save-dev
gulp.task('imageMin',function(){
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
})

//压缩js
//npm install gulp-uglify --save-dev
/* gulp.task('minify',function(){
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
}) */

//sass转换为css
//npm install gulp-sass --save-dev
gulp.task('sass',function(){
    gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
})

//代码合并
//npm install gulp-concat --save-dev
gulp.task('scripts',function(){
    gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
})

//监听文件是否发生变化
gulp.task('watch',function(){
    gulp.watch('src/js/*.js', ['scripts']);
    gulp.watch('src/images/*', ['imageMin']);
    gulp.watch('src/sass/*.scss', ['sass']);
    gulp.watch('src/*.html', ['copyHtml']);
})


//执行多个任务
 gulp.task('default',['message','copyHtml','imageMin','sass','scripts'])





/*
1.Gulp是基于Node.js中的数据流
2.Gulp主要使用pipe事件输入及输出
3.插件独立使用
4.Gulp是基于代码进行配置
 */

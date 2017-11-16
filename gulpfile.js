// 参考　http://taklog.hateblo.jp/entry/2016/12/11/091542

var gulp = require('gulp');

// pug
//--------------------
var pug = require('gulp-pug'); // テンプレートエンジン

// Sass,CSS
//----------------------
var sass         = require('gulp-sass');// sass
var autoprefixer = require('gulp-autoprefixer'); // cssにベンダープレフィックスを付与
var cssmin       = require('gulp-cssmin'); // cssのミニファイ

// JavaScript
//--------------------
var uglify  = require('gulp-uglify'); // JSファイルのミニファイ

// utility
//--------------------
var browser = require('browser-sync'); // ブラウザシンク
var plumber = require('gulp-plumber'); // エラー回避
var rename  = require('gulp-rename'); // ファイルの名前変更
var aigis   = require('gulp-aigis'); // スタイルガイド生成
var replace = require('gulp-replace'); // ファイル内のテキスト書き換え
var changed = require('gulp-changed'); // 変更のあったファイルのみ更新
var cached  = require('gulp-cached'); // 変更のあったファイルのみ更新

var fs = require('fs');

var paths = {
  'src'     : 'src/',
  'pugSrc'  : ['src/pug/**/*.pug', '!src/pug/**/_*.pug'],
  'sassSrc' : 'src/sass/**/*.scss',
  'jsSrc'   : 'src/js/*.js',
  'imgSrc'  : 'src/img/',
  'rootDir' : 'dist/',
  'cssDir'  : 'dist/css/',
  'jsDir'   : 'dist/js/',
  'imgDir'  : 'dist/img'
};

// プレフィックス付けるブラウザ
var autoprefixerOptions = {
    browsers: ['last 2 version', 'iOS >= 8.1', 'Android >= 4'],
    cascade: false
};

// サーバー立ち上げ
gulp.task('server', function() {
  browser.init({
    server: {
      baseDir: paths.rootDir
    },
    notify   : true,
    xip      : false
  });
});

// pug task
//--------------------
gulp.task('pug', function() {
  gulp.src(paths.pugSrc)
    .pipe(plumber())
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest(paths.rootDir))
    .pipe(browser.stream());
});

// sass task
//--------------------
gulp.task('sass', function() {
  gulp.src(paths.sassSrc)
      .pipe(plumber())
      .pipe(sass({outputStyle: 'expanded'}))
      .pipe(autoprefixer(autoprefixerOptions))
      .pipe(gulp.dest(paths.cssDir))
      .pipe(cssmin())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest(paths.cssDir))
      .pipe(browser.stream());
});

// img task
//--------------------
gulp.task('img', function() {
  gulp.src(paths.imgSrc + '**/*')
      .pipe(changed(paths.imgDir))
      .pipe(gulp.dest(paths.imgDir));
});

// js task
//--------------------
gulp.task('js', function() {
  gulp.src(paths.jsSrc)
      .pipe(cached('js'))
      .pipe(gulp.dest(paths.jsDir))
      .pipe(uglify({preserveComments: 'license'}))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest(paths.jsDir))
      .pipe(browser.stream());
});

//styleguide
gulp.task('aigis', function(){
  gulp.src(paths.src + 'aigis_config.yml')
      .pipe(aigis());
});


//replace SVG
gulp.task('replaceSVG', function () {
  gulp.src(['./svg/**/*.svg'])
      .pipe(replace('<', '%3C'))
      .pipe(replace('>', '%3E'))
      .pipe(replace('{', '%7B'))
      .pipe(replace('}', '%7D'))
      .pipe(replace('#', '%23'))
      .pipe(replace('\"', '\''))
      .pipe(gulp.dest('./svg/edited/'));
});

//watch
gulp.task('default',['img', 'js', 'server', 'sass', 'pug',], function() {
  gulp.watch('src/pug/**/*.pug', function(e) {
    gulp.start('pug')
  });
  gulp.watch([paths.sassSrc], function(e) {
    gulp.start('sass')
  });
  gulp.watch([paths.imgSrc + '**/*'], function(e) {
    gulp.start('img')
  });
  gulp.watch([paths.jsSrc], function(e) {
    gulp.start('js')
  });
});

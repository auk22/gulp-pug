// =====================================================
//
//  ページトップボタン
//
// =====================================================

$("#pageTop").hide();
// ↑ページトップボタンを非表示にする

$(window).on("scroll", function() {

  if ($(this).scrollTop() > 150) {
    // ↑ スクロール位置が100よりも小さい場合に以下の処理をする
    $('#pageTop').slideDown("fast");
    // ↑ (100より小さい時は)ページトップボタンをスライドダウン
  } else {
    $('#pageTop').slideUp("fast");
    // ↑ それ以外の場合の場合はスライドアップする。
  }


  // フッター固定する

  scrollHeight = $(document).height();
  // ドキュメントの高さ
  scrollPosition = $(window).height() + $(window).scrollTop();
  // ウィンドウの高さ+スクロールした高さ→現在のトップからの位置
  footHeight = $(".Footer__copyright").innerHeight();
  // フッターの高さ

  if (scrollHeight - scrollPosition <= footHeight) {
    // 現在の下から位置が、フッターの高さの位置にはいったら
    //  ".gotop"のpositionをabsoluteに変更し、フッターの高さの位置にする
    $("#pageTop").css({
      "position": "fixed",
      "bottom": footHeight
    });
  } else {
    // それ以外の場合は元のcssスタイルを指定
    $("#pageTop").css({
      "position": "fixed",
      "bottom": "3rem"
    });
  }
});



// =====================================================
//
//  スムーススクロール
//
// =====================================================

// スムーススクロール
$(function(){
  // ページ内リンクをクリックすると
  $('a[href^="#"]').click(function(){
    var headerHeight = $('#header').outerHeight();
    console.log(headerHeight);
    // スクロールスピード
    var speed = 600;
    // クリックしたリンク先を保存
    var href= $(this).attr('href');
    // クリックしたリンク先が#または空のときは
    var target = $(href == '#' || href == '' ? 'html' : href);
    // トップへ移動する
    var position = target.offset().top - headerHeight;
    // リンク先へスムーズに移動する
    $('html, body').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});



// =====================================================
//
//  Swiper.js
//
// =====================================================

// swiperの設定
// var mySwiper = new Swiper ('.swiper-container', {
//   // 無限ループ
//   loop: true,
//   // ページネーション
//   pagination: '.swiper-pagination',
//   // ナビゲーション
//   nextButton: '.swiper-button-next',
//   prevButton: '.swiper-button-prev',
//   parallax: true
// })

// =====================================================
//
//  UserAgent判定
//
// =====================================================

// ブラウザ判定
// var userAgent = window.navigator.userAgent.toLowerCase();
// var main = document.getElementById("body");

// if (userAgent.indexOf('opera') != -1) {
//   main.classList.add("opera");
// } else if (userAgent.indexOf('trident/7.') != -1) {
//   main.classList.add("ie");
// } else if (userAgent.indexOf('chrome') != -1) {
//   main.classList.add("chrome");
// } else if (userAgent.indexOf('safari') != -1) {
//   main.classList.add("safari");
// } else if (userAgent.indexOf('gecko') != -1) {
//   main.classList.add("gecko");
// } else {
// }


// =====================================================
//
//  ヘッダー固定
//
// =====================================================

$(window).on('scroll', function() {
  var headerHeight = $('#header');
  var h = headerHeight.height();
    if ($(this).scrollTop() > h + 200) {
        $('#header').addClass('l-header--fixed');
    } else {
        $('#header').removeClass('l-header--fixed');
    }
});



// =====================================================
//
//  loading画面制御
//
// =====================================================

// loading画面
$(window).on('load',function () { //全ての読み込みが完了したら実行
  $('.p-loader').delay(900).fadeOut(800);
  $('.p-loader__inner').delay(600).fadeOut(300);
});

// 10秒たったら強制的にロード画面を非表示
$(function(){
  setTimeout('stopload()',5000);
});

function stopload(){
  $('.p-loader').delay(900).fadeOut(800);
  $('.p-loader__inner').delay(600).fadeOut(300);
}


// =====================================================
//
//  アコーディオンメニュー
//
// =====================================================

// アコーディオンメニュー
var $win = $(window);

$win.on('load resize', function() {
  if (window.matchMedia('(max-width:480px)').matches) {
    // SPの処理
  } else if (window.matchMedia('(max-width:768px)').matches) {
    // TABの処理
  } else {
    // PCの処理
  }
});


$(function(){
  var w = window.innerWidth;
  var x = 1024;
  $('.p-accordion__inner').slideToggle();
  $('.p-accordion__opener--show').toggleClass('is-active');
  $('.p-accordion__opener--show').next('.p-accordion__inner').slideToggle('600', function(){
    $.fn.fullpage.reBuild();
  });

  $('.p-accordion__opener').on('click', function() {
    $(this).toggleClass('is-active');
    $(this).next('.p-accordion__inner').slideToggle('600', function(){
      $.fn.fullpage.reBuild();
    });
  });
});

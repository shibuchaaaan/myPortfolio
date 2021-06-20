$(window).on('load',function(){
  // TOP画像表示アニメーション
  $('#top_banner').hide().fadeIn(2000);
  
  // 上から100pxスクロールした場合、TOPスクロールボタンを表示
  var scrollTop = $('.fa-chevron-circle-up');
  $(window).scroll(function () {
      if ($(this).scrollTop() > 110) {
          scrollTop.fadeIn(2500);
      } else {
          scrollTop.fadeOut();
      }
  });
  // スクロールボタン押下時アニメーション
  scrollTop.click(function () {
      $('body, html').animate({scrollTop: 0}, 500);
      return false;
  });
});
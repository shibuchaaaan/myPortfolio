$(window).on('load',function(){
  $('#top_banner').hide().fadeIn(2000);

  var scrollTop = $('.fa-chevron-circle-up');
  $(window).scroll(function () {
      if ($(this).scrollTop() > 110) {
          scrollTop.fadeIn(2500);
      } else {
          scrollTop.fadeOut();
      }
  });
  scrollTop.click(function () {
      $('body, html').animate({scrollTop: 0}, 500);
      return false;
  });
});
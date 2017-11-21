$(document).ready(function() {
  var mS = 30;
  var h = mS / $(window).height();
  var w = mS / $(window).width();
  $("#top-image").mousemove(function(e) {
    var x = e.pageX - ($(window).width() / 2);
    var y = e.pageY - ($(window).height() / 2);
    var nX = w * x * -1 - 25;
    var nY = h * y * -1 - 50;
    $('#top-image').css("background-position", nX + "px     " + nY + "px");
  });
  $('.js-tilt').tilt({scale: 1.2});
  $('#but-on').on('click', function() {
    $('#but-on').addClass('animated fadeIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $(this).removeClass('animated fadeIn');
    });
  });
  $('#but-on2').on('click', function() {
    $('#but-on2').addClass('animated fadeIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $(this).removeClass('animated fadeIn');
    });
  });
});

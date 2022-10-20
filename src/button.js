var btn = $('#button');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

$('#button').click(function () {
  $('html, body').animate({ scrollTop: 0 }, 100);
  return false;
});

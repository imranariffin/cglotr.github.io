$(document).on('click', '.page-scroll > a', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});

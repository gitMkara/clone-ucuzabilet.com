console.log('hotel');
$('.more').hide();
$('.showMore').on('click', function (e) {
  e.preventDefault();
  $('.more').toggle();
  $(this).text() === 'Daha fazla göster'
    ? $(this).text('Daha az göster')
    : $(this).text('Daha fazla göster');
});

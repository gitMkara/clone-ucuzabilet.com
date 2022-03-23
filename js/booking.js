$(document).ready(function () {
  let today = new Date();
  const getDay = (date) => {
    return date.getDate();
  };
  const getMonth = (date) => {
    return date.toLocaleString('default', {month: 'long'});
  };
  const getYear = (date) => {
    return date.getFullYear();
  };

  $('.checkInDay').text(getDay(today));
  $('.checkInMonth').text(getMonth(today));
  $('.checkInYear').text(getYear(today));

  let tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  $('.checkOutDay').text(getDay(tomorrow));
  $('.checkOutMonth').text(getMonth(tomorrow));
  $('.checkOutYear').text(getYear(tomorrow));

  $('#checkIn').datepicker({
    minDate: today,
    onSelect: function (dateText, inst) {
      const val = $(this).val();
      today = new Date(val);
      $('.checkInDay').text(getDay(today));
      $('.checkInMonth').text(getMonth(today));
      $('.checkInYear').text(getYear(today));
    },
  });
  // $('#checkIn').on('click', function () {});

  $('#checkOut').datepicker({
    minDate: tomorrow,
    onSelect: function (dateText, inst) {
      const val = $(this).val();
      let tomorrow = new Date(val);
      $('.checkOutDay').text(getDay(tomorrow));
      $('.checkOutMonth').text(getMonth(tomorrow));
      $('.checkOutYear').text(getYear(tomorrow));
      const diffTime = Math.abs(tomorrow - today);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      console.log(diffDays);
      $('.numberOfNight').text(diffDays);
    },
  });
});
$('.plus').click(() => {
  let visitor = $('.numberOfVisitor').text();
  if (visitor < 7) $('.numberOfVisitor').text(++visitor);
  $('.visitor').text(visitor);
});
$('.minus').click(() => {
  let visitor = $('.numberOfVisitor').text();
  if (visitor > 1) $('.numberOfVisitor').text(--visitor);
  $('.visitor').text(visitor);
});

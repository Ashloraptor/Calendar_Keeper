
container = document.querySelector("#currentDay");
var currentHour = dayjs().hour();


$(document).ready(function () {
  //listener for click events on the save button, saves the user input in local storage
  $(".saveBtn").on("click", function () {
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
  });

  //loops through time blocks to gauge whether past, present, or future
  $('.time-block').each(function () {
    var blockHour = parseInt($(this).attr('id').split('-')[1]);
    console.log(currentHour);
    //compares to current hour
    if (blockHour < currentHour) {
      $(this).addClass('past');
    } else if (blockHour === currentHour) {
      $(this).removeClass('past');
      $(this).addClass('present');
    } else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }
  });


  //Pulls from local storage to display in textarea element.
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

  //Displays todays date
  var today = dayjs();
  $('#currentDay').text(today);
});

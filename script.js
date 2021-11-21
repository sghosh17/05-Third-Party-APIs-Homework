// Display today's day and date
var todayDate = moment().format("dddd, MMM Do YYYY");
$("#currentDay").html(todayDate);

var time_now = moment().hour();
console.log(time_now);
console.log("hour8".split("hour"));

$(document).ready(function () {
  function time_tracker() {
    var time_now = moment().hour();
    console.log(time_now);

    $(".time-block").each(function () {
      console.log($(this).attr("id"));
      var day_time = parseInt($(this).attr("id").split("-")[1]);
      console.log(day_time);

      if (day_time < time_now) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (day_time === timeNow) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    });
  }

  time_tracker();
});

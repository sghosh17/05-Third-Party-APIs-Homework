// Display today's day and date
var todayDate = moment().format("dddd, MMM Do YYYY");
$("#currentDay").html(todayDate);

var time_now = moment().hour();
console.log(time_now);
console.log("hour8".split("hour"));

$(document).ready(function () {
  function time_tracker() {
    var time_now = moment().hour();

    $(".time-block").each(function () {
      var day_time = parseInt($(this).attr("id"));

      if (day_time < time_now) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
        var id = $(this).attr("id");
      } else if (day_time === time_now) {
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

  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // Save text in local storage
    localStorage.setItem(time, text);
  });

  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));

  time_tracker();
});

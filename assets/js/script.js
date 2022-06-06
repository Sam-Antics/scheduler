// When the planner is opened, the current day displays at the top of the page
let currentDay = moment().format("dddd LL, h:mm:ss a");
$("#currentDay").append(currentDay);
// GLOBAL VARIABLES
let currentTime = moment().hour();


// each time block is color-coded to indicate past, present, or future

// clicking into the time block opens textarea (this is done in HTML currently)

// clicking save button for each time block...
$(".saveBtn").on("click", function() {
    let time = $(this).parent().attr("id");
    let item = $(this).siblings(".description").val();
    
    // saves to localStorage for persistent data
    localStorage.setItem(time, item);
});

 //load any saved data from LocalStorage - do this for each hour created.
 $("#hour8 .description").val(localStorage.getItem("hour8"));
 $("#hour9 .description").val(localStorage.getItem("hour9"));
 $("#hour10 .description").val(localStorage.getItem("hour10"));
 $("#hour11 .description").val(localStorage.getItem("hour11"));
 $("#hour12 .description").val(localStorage.getItem("hour12"));
 $("#hour13 .description").val(localStorage.getItem("hour13"));
 $("#hour14 .description").val(localStorage.getItem("hour14"));
 $("#hour15 .description").val(localStorage.getItem("hour15"));
 $("#hour16 .description").val(localStorage.getItem("hour16"));
 $("#hour17 .description").val(localStorage.getItem("hour17"));

 let colorTime = function() {
  // parse and loop over the time blocks
  $(".time-block").each(function() {
      let timeBlock = parseInt($(this).attr("id").split("hour")[1]);

  // check current time against past and future; set classes
  if (timeBlock < currentTime) {
    $(this).addClass("past");
    $(this).removeClass("future");
    $(this).removeClass("present");
  } else if (timeBlock === currentTime) {
    $(this).removeClass("past");
    $(this).addClass("present");
    $(this).removeClass("future");
  } else {
    $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future");
  };
});
 }

 colorTime();
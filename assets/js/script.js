// When the planner is opened, the current day displays at the top of the page
let currentDay = moment().format("dddd LL, h:mm:ss a");
$("#currentDay").append(currentDay);

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
/****************************/
/***PSEUDOCODE FOR PROJECT***/
/****************************/

// When the planner is opened, the current day displays at the top of the page
var currentDay = moment().format("dddd LL");
$("#currentDay").append(currentDay);

// each time block is color-coded to indicate past, present, or future

// clicking into the time block opens textarea

// clicking save button for each time block
// saves to localStorage for persistent data


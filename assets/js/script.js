/****************************/
/***PSEUDOCODE FOR PROJECT***/
/****************************/

// When the planner is opened, the current day displays at the top of the page
var currentDay = moment().format("dddd LL");
$("#currentDay").append(currentDay);

// set up time blocks for standard business hours

// each time block is color-coded to indicate past, present, or future

// clicking into the time block opens textarea

// save button for each time block

// save to localStorage for persistent data


// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
        //I need to be able to incorporate a "moment" into the jumbotron/append it.
        //When the application loads, it needs to load the current day and time
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
        //I need to be able to have some blocks that represent the times for the day
        //bootstrap columns table
       
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
         //These need to be connected to "moment" to be able to turn color depending on the time of the day
// WHEN I click into a timeblock
// THEN I can enter an event
        //We need to add event listeners to be able to save
        //I need to be able to append text to the time blocks 
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
        //and be able to save to local.Storage
// WHEN I refresh the page
// THEN the saved events persist
var timeDisplayEl = $("#currentDay");

function displayTime() {
    var rightNow = moment().format("MMM DD, YYYY")
    timeDisplayEl.text(rightNow);
}
displayTime()
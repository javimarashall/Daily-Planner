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

$(document).ready(function () {

        var timeDisplayEl = $("#currentDay");
        var saveButton = $(".saveBtn");
        var userToDo = $(".description");
        var timeBlocks = $(".row");
        //display time on jumbotron
        function displayTime() {
                var rightNow = moment().format("dddd, MMM DD, YYYY");
                timeDisplayEl.text(rightNow);
        };
        displayTime();

        function showHistory() {
                //get the history
                var data = JSON.parse(localStorage.getItem("data")) || [];
                //distribute data
                for (var i = 0; i < data.length; i++) {
                        var queryStr = `[time="${data[i].id}"]`;
                        $(queryStr).find("textarea").val(data[i].input);
                }
        };
        showHistory();

        saveButton.on("click", function(event) {
                //get user input
                var userInput = $(event.target).closest(".row").find("textarea").val();
                //get block id
                var timeId = $(event.target).closest(".row").attr("time");
                //get the history
                var data = JSON.parse(localStorage.getItem("data")) || [];
                //create a new history entry
                var dataEntry = {
                        id: timeId,
                        input: userInput
                };
                //update history
                data.push(dataEntry);
                //store or overwrtie history in local
                localStorage.setItem("data",JSON.stringify(data));
        });

        //color coat the blocks
        function colorBlocks() {
                //current time
                var currentHour = moment().hour();
                for (var i = 0; i < timeBlocks.length; i++) {
                        //time attr
                        var time = $(timeBlocks[i]).attr("time");
                        if ( currentHour>time) {
                                $(timeBlocks[i]).addClass("past");
                        } else if (currentHour===time) {
                                $(timeBlocks[i]).addClass("present");
                        } else if (currentHour<time) {
                                $(timeBlocks[i]).addClass("future");
                        }
                }
        };
        colorBlocks();



        // saveButton.addEventListener(click, function() {
        //         event.preventDefault()
        //         console.log("hello")
        // });

        //retrieve the value of event.target


        //document.querySelector(".saveBtn").addEventListener("click", function() {
        //grab hold of my 9am user input
        //         var userToDo = document.querySelector("#userInput9am").value;
        //         localStorage.setItem("9am", userToDo)

        //         //my userInput is always constant
        //         //I need to attach another variable to it 
        // })
        //         //get user To Do

        //         //get the history
        //         var history = [];

        //             history = JSON.parse(localStorage.getItem("history")); 

        //         console.log("*****history",history);

        //         //create history entry
        //         var historyEntry = userToDo
        //             //push to history
        //         history.push(historyEntry);

        //         //set history to localsorage
        //         localStorage.setItem("history", JSON.stringify(history));        
});

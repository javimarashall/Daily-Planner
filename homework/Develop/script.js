$(document).ready(function() {

        var timeDisplayEl = $("#currentDay");
        var saveButton = $(".saveBtn");
        var timeBlocks = $(".row")

        //display time on Jumbotron
        function displayTime() {
                var rightNow = moment().format("dddd, MMM DD, YYYY");
                timeDisplayEl.text(rightNow);
        };
        displayTime();

        function showHistory() {
            //get history
            var data = JSON.parse(localStorage.getItem("data")) || [];
            //place data in each row
            for (var i = 0; i < data.length; i++) {
                    var queryStr = `[time="${data[i].id}"]`;
                    $(queryStr).find("textarea").val(data[i].input);
            }
        };
        showHistory();

        saveButton.on("click", function (event) {
                //grab user input
                var userInput = $(event.target).closest(".row").find("textarea").val();
                var timeId = $(event.target).closest(".row").attr("time"); 
                //grab history
                var data = JSON.parse(localStorage.getItem("data")) || [];
                var dataEntry = {
                        id: timeId,
                        input: userInput
                };
                data.push(dataEntry);
                //store the history
                localStorage.setItem("data", JSON.stringify(data));
        });

        function colorBlocks() {
                var currentHour = moment().hour();
                for (var i = 0; i < timeBlocks.length; i++) {
                        var time = $(timeBlocks[i]).attr("time")
                        if (currentHour > time) {
                        $(timeBlocks[i]).addClass("past");
                } else if (currentHour ===time) {
                        $(timeBlocks[i]).addClass("present");
                }else if (currentHour<time){
                        $(timeBlocks[i]).addClass("future");
                }
        }
};
colorBlocks();
});
# Daily-Planner

## Site
![Site](./assets/site.png)

## Technologies Used 
- HTML used to write the code for the daily planner
- CSS used to style the code written on the HTML
- Java Script - Used to create the advance layout of the application
- Git - Used for pushing data up to the repository
- GitHub - Used for publishing the application 
- VS Code - Software used for writing the code for the site

## Summary
This site contains a daily planner application where the user is able to plan their business hours, from 9am to 5pm. The application contains some cool features such as time of day colors. Time of day colors mean that if the current time of day has passed a time block on the daily planner, turn that time block gray. However, any time blocks ahead of the current time, those time blocks will remain green. Another cool feature of the application is that when the user writes something in the input field and saves it, the input will be stored in the local storage and will not be deleted when the page is refreshed. The application is set to display the current day and date of the year at the very top of the application. 

## Code Snippet 
This code snippet is included to show the relationship between the moment and the color time blocks. The if statement sets the criteria for the time of day and what color the time blocks should be. 

 function colorBlocks() {<br>
                var currentHour = moment().hour();<br>
                for (var i = 0; i < timeBlocks.length; i++) {<br>
                        var time = $(timeBlocks[i]).attr("time")<br>
                        if (currentHour > time) {<br>
                        $(timeBlocks[i]).addClass("past");<br>
                } else if (currentHour === time) {<br>
                        $(timeBlocks[i]).addClass("present");<br>
                } else if (currentHour < time) {<br>
                        $(timeBlocks[i]).addClass("future");<br>
                }<br>
        }<br>
};<br>

## Repository Link
https://github.com/javimarashall/Daily-Planner

## Deploy LInk
https://javimarashall.github.io/Daily-Planner/
## Personal Links
[Github](https://github.com/javimarashall)<br>
[Linkedin](https://www.linkedin.com/in/javier-mondragon-7b471719b/)


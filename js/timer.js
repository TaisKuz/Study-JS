"use strict";

var   
  date = new Date(),
  titlePart1_1,
  containerDate,
  containerTime,
  containerWrapper1,
  intervalID;

function timer(){
	containerWrapper1 = createUI("div", {className: "containerWrapper"}, document.body); 

	titlePart1_1 = createUI("p", {className: "titlePart1", 
		innerHTML: "Write a JavaScript program to display the current day and time in the following format.<br>Sample Output : Today is : Friday.<br>Current time is : 4 PM : 50 : 22"
	}, containerWrapper1);  

	containerDate = createUI("div", {className: "container-date", 
		innerHTML:`Today is : ${date.toLocaleString("en-US", { weekday: 'long' })}.`
	}, containerWrapper1);

	containerTime = createUI("div", {className: "container-time"}, containerWrapper1);

	secondsTimer();

	intervalID = window.setInterval(secondsTimer, 1000);
}

function secondsTimer() {
  date = new Date();
  containerTime.innerHTML =  `Current time is : ${date.toLocaleString("en-US", { hour: 'numeric' })} : 
  ${date.getMinutes()} : ${date.getSeconds()}`;
} 
"use strict";

var   
  date = new Date(),
  containerTime;
	//lesson1 = new Lesson("1");

//lesson1.init = timer;

// проверки на то, выбран ли урок и надо ли его заново отрисовывать

// метод уничтожения урока

function timer() {
	
	var
		titlePart1_1,
	  intervalID;
	  containerWrapper1,
	  containerDate;

	containerWrapper1 = createUI("div", {className: "containerWrapper", 
		id: "lesson1"
	}, document.body); 

	titlePart1_1 = createUI("p", {className: "description", 
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
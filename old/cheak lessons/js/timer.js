"use strict";

function Timer() {

}

Timer.prototype = Object.create(Lesson.prototype);
Timer.prototype.constructor = Timer;


Timer.prototype.init = function() {

  //отрисовка урока в браузере
  var
	  date = new Date();

	this.containerWrapper = createUI("div", {className: "containerWrapper", 
		id: "0"
	}, document.body); 

	this.description = createUI("p", {className: "description", 
		innerHTML: "Write a JavaScript program to display the current day and time in the following format.<br>Sample Output : Today is : Friday.<br>Current time is : 4 PM : 50 : 22"
	}, this.containerWrapper);  

	this.containerDate = createUI("div", {className: "container-date", 
		innerHTML:`Today is : ${date.toLocaleString("en-US", { weekday: 'long' })}.`
	}, this.containerWrapper);

	this.containerTime = createUI("div", {className: "container-time"}, this.containerWrapper);

	this.intervalID = window.setInterval(this.secondsTimer.bind(this), 1000); 

}

Timer.prototype.secondsTimer = function() {
  var date = new Date();
  this.containerTime.innerHTML =  `Current time is : ${date.toLocaleString("en-US", { hour: 'numeric' })} : 
  ${date.getMinutes()} : ${date.getSeconds()}`;
}

Timer.prototype.destroy = function() {

	window.clearInterval(this.intervalID);
	this.containerWrapper.remove();
	this.description = null;
	this.containerDate = null;
	this.containerTime = null;
	this.intervalID = null;
}

selectLessons(0, Timer);


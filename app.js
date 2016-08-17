"use strict";

var 
  date = new Date(),
  containerDate,
  containerTime,
  intervalID;

window.onload = function () {
    
  containerDate = document.getElementsByClassName("container-date");
  containerTime = document.getElementsByClassName("container-time");

  if (containerDate.length == 0 || containerTime.length == 0) return;
	
  containerDate[0].innerHTML = `Today is : ${date.toLocaleString("en-US", { weekday: 'long' })}.`;
  
  intervalID = window.setInterval(secondsTimer, 1000);

  secondsTimer();
}

function secondsTimer() {
  date = new Date();
  containerTime[0].innerHTML =  `Current time is : ${date.toLocaleString("en-US", { hour: 'numeric' })} : 
  ${date.getMinutes()} : ${date.getSeconds()}`;
} 

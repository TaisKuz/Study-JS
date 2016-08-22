"use strict";

function secondsTimer() {
  date = new Date();
  containerTime.innerHTML =  `Current time is : ${date.toLocaleString("en-US", { hour: 'numeric' })} : 
  ${date.getMinutes()} : ${date.getSeconds()}`;
} 
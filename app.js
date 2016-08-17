"use strict";

window.onload = function () {
    var 
 		  containerDate = document.getElementsByClassName("container-date"),
 		  containerTime = document.getElementsByClassName("container-time"),
	    date = new Date();

  if (containerDate.length == 0 || containerTime.length == 0) return;
	
  containerDate[0].innerHTML = `Today is : ${date.toLocaleString("en-US", { weekday: 'long' })}.`;

	containerTime[0].innerHTML =  `Current time is : ${date.toLocaleString("en-US", { hour: 'numeric' })} : 
  ${date.getMinutes()} : ${date.getSeconds()}`;

}

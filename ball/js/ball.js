"use strict";

var ball = document.getElementById("ball");

var listener = function(e) {
  ball.style.left = e.pageX;
  ball.style.top = e.pageY;
};

function move() {
  document.addEventListener('mousemove', listener);
}

function stop() {
  document.removeEventListener('mousemove', listener);
}

ball.onmousedown = move; 
ball.onmouseup = stop;

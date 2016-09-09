"use strict";


window.onload = function() {
var ball = document.getElementById('ball');

ball.onmousedown = function(e) {

  var coords = getCoords(ball);
  var shiftX = e.pageX - coords.left;
  var shiftY = e.pageY - coords.top;

  ball.style.position = 'absolute';
  document.body.appendChild(ball);
  moveAt(e);

  ball.style.zIndex = 1000; // над другими элементами

  function moveAt(e) {
    ball.style.left = e.pageX - shiftX + 'px';
    ball.style.top = e.pageY - shiftY + 'px';
  }

  document.onmousemove = function(e) {
    moveAt(e);
  };

  (function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

  ball.onmouseup = function() {
    document.onmousemove = null;
    //ball.onmouseup = null;
    drop();
	//window.setInterval(drop, 500);

  };

  function getCoords(elem) { // кроме IE8-
  	var box = elem.getBoundingClientRect();

  	return {
   	 top: box.top + pageYOffset,
   	 left: box.left + pageXOffset
  	};
  }

  function drop() {
    var height = (450 - e.pageY);
    var height2 = (e.pageY);

    function down(){
      ball.style.top = (450 - 140) + 'px';
      console.log("down "+ball.style.top );

    }
    function up(){

      while (e.pageY + height2 > 300)
      {
        height2 *= 0.5;
        ball.style.top = (e.pageY + height2) + 'px';
            console.log("up "+ball.style.top );
          }

   }
 
     window.setInterval(down, 50);
   window.setInterval(up, 500);

  }




}

ball.ondragstart = function() {
  return false;
};



}









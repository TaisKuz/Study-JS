"use strict";

var 
  isAnimated = false, // анимировать ли шарик
  ballModel,
  
  G = 9.8;

function BallModel(){
  this.posX;
  this.posY;
  this.ballHeight;
  this.sceneWidth;
  this.sceneHeight;
  this.speed = 1000;
  this.start;
  this.startX;
  this.startY;
  this.endX;  
  this.endY;  
  this.end;
  this.bottom;
  this.impulseTotal = 0;
  this.impulseCurrent = 0;
  this.shiftX;
  this.shiftY;
  this.bottomBorder = true;

  //this.heightFall;
}

(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

window.onload = function() {
  
  ballModel = new BallModel();

  var 
    ball = document.getElementById('ball'),
    scene = document.getElementById('scene');

  scene.style.width = 800 + 'px';
  scene.style.height = 400 + 'px';
  ball.style.height = 100 + 'px';

  ballModel.sceneWidth = parseInt(scene.style.width);
  ballModel.sceneHeight = parseInt(scene.style.height);
  ballModel.ballHeight = parseInt(ball.style.height);
  ballModel.bottom = ballModel.sceneHeight - ballModel.ballHeight;
    
  ball.addEventListener('mousedown', onMouseDown);
  scene.addEventListener('mouseup', onMouseUp);   
  ball.addEventListener('dragstart', onDragStart);
  scene.addEventListener('mouseleave', stopMouse);

  requestAnimationFrame(drop); 
}

function moveAt(e, shiftX, shiftY) {
  ballModel.posX = e.pageX;
  ballModel.posY = e.pageY;

  var coords = checkBorders(ballModel.posX - ballModel.shiftX, ballModel.posY - ballModel.shiftY);

  ball.style.left = coords.x + 'px';
  ball.style.top = coords.y + 'px';   
}

function checkBorders(left_x, top_y) {
  var
    rightBorder = ballModel.sceneWidth - ballModel.ballHeight,
    bottomBorder = ballModel.sceneHeight - ballModel.ballHeight;

  if(top_y < 0 || top_y > bottomBorder){
    //isAnimated = false;
    if (top_y < 0 ) top_y = 0;
    else if(top_y > bottomBorder) {
      top_y = bottomBorder;
      ballModel.bottomBorder = true;
    }
  }
  
  if(left_x < 0 || left_x > rightBorder){
    //isAnimated = false;
    if (left_x < 0 ) left_x = 0;
    else if(left_x > rightBorder) left_x = rightBorder;
  }
  return {'x': left_x, 'y': top_y };
}

function getCoords(elem) {
  var box = elem.getBoundingClientRect();

  return {
   top: box.top + pageYOffset,
   left: box.left + pageXOffset
  };
}

function onMouseDown(e) {
  ballModel.strat = new Date();
  ballModel.stratX = e.pageX;
  ballModel.stratY = e.pageY;

  ballModel.posX = e.pageX;
  ballModel.posY = e.pageY;

  var coords = getCoords(ball);

  ballModel.shiftX = ballModel.posX - coords.left;
  ballModel.shiftY = ballModel.posY - coords.top;
  isAnimated = false;
  scene.addEventListener('mousemove', onMouseMove);

}

function onMouseMove(e) {

  isAnimated = false;
  moveAt(e, ballModel.shiftX, ballModel.shiftY);
}

IMPULSE_STEP = 10;

function onMouseUp(e) {
  ballModel.end = new Date();

  ballModel.endX = e.pageX;
  ballModel.endY = e.pageY;

  ballModel.posX = e.pageX;
  ballModel.posY = e.pageY;
  
  ballModel.start = performance.now();

  isAnimated = true;

  ballModel.impulseTotal = (ballModel.sceneHeight - ballModel.endY) + IMPULSE_STEP;
  ballModel.impulseCurrent = 0;

  requestAnimationFrame(drop);
  
  scene.removeEventListener('mousemove', onMouseMove);
  ball.removeEventListener('mouseup', onMouseUp);

}
 var a =  10;
 var IMPULSE_STEP =  a;


function drop() {

  if (isAnimated) {

    ballModel.posY += 9 * timing(); 

    var position = checkBorders(ballModel.posX, ballModel.posY);

    if(ballModel.bottomBorder) ball.style.top = ballModel.bottomBorder;
    else      
    ball.style.top = ballModel.posY + 'px';
      //ball.style.left = left_x + 'px';
    console.log(ballModel.posY, ballModel.impulseCurrent);
      
  }
  requestAnimationFrame(drop); 
  
}


function impulse() {

}

function timing() {
  console.log("ballModel.impulseCurrent " + ballModel.impulseCurrent);
  return ballModel.impulseCurrent += IMPULSE_STEP;

}

function onDragStart() {
  return false;
}    

function stopMouse() {

  isAnimated = false;
  scene.removeEventListener('mousemove', onMouseMove);
  ball.removeEventListener('mouseup', onMouseUp);
}

// function animate(options) {

//   var start = performance.now();

//   requestAnimationFrame(function animate(time) {

//     // if (ballModel.endX != ballModel.startX) requestAnimationFrame(drop);
//     // else{

    
//     // timeFraction от 0 до 1
//     var timeFraction = (time - start) / options.duration;
//     if (timeFraction > 1) timeFraction = 1;

//     // текущее состояние анимации
//     var progress = options.timing(timeFraction)

//     options.draw(progress);

//     if (timeFraction < 1) {
//       requestAnimationFrame(animate);
//     }

//   });
// }

// function bounce(timeFraction) {
//   for (var a = 0, b = 1, result; 1; a += b, b /= 2) {
//     if (timeFraction >= (7 - 4 * a) / 11) {
//       return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
//     }
//   }
// }
//   // преобразователь в easeOut
// function makeEaseOut(timing) {
//   return function(timeFraction) {
//     return 1 - timing(1 - timeFraction);
//   }
// }

// var bounceEaseOut = makeEaseOut(bounce);



// function drop(time) {
//   var     speed0 = Math.pow((Math.pow((ballModel.endX - ballModel.startX), 2) + Math.pow((ballModel.endY - ballModel.startY)), 2), 0.5) / (ballModel.end - ballModel.start);
//     ball.style.top = (ballModel.endY + (G * Math.pow(time/300, 2)) / 2) + 'px';
//     ball.style.left = ballModel.endX + (speed0 * 100000 * time) + 'px';
//     console.log(speed0, time, ball.style.top, ball.style.left);
//     requestAnimationFrame(drop);
// }

// var onBottom = false;
// var onTop = false;


// function jump(time) {

//   if (isAnimated)
//   {
//     var 
//       progress,
//       top,
//       max;
//        //мяч достиг нижней границы

//     if(onBottom){
//       progress = (time - ballModel.start) / ballModel.speed;
      
//       top = ballModel.bottom - progress * (ballModel.bottom - ballModel.posY);
//       console.log("1dd "+ progress, onBottom, top);
      
//     }
//     else{
//       progress = (time - ballModel.start) / ballModel.speed;
//       if (progress > 1) progress = 1;
//        top = ballModel.posY + progress * (ballModel.bottom - ballModel.posY); 

//     }

//     if (top >= ballModel.bottom) {
//       onBottom = true;

//       //isAnimated = false;
//     }
//     if (top == ballModel.posY) onTop = true;

    
//     ball.style.top = top + 'px';

//     requestAnimationFrame(jump);
//       console.log(progress, onBottom, top);

//   }
// }



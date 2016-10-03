"use strict";

var 
  isAnimated = false, // анимировать ли шарик
  ballModel,
  SPEED =  2.1999999999999999999999999999,
  G = 2.199999999999999999999999999;

function BallModel(){
  this.posX;
  this.posY;
  this.ballHeight;
  this.sceneWidth;
  this.sceneHeight;
  this.jumpHeight = 0;
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
  this.bottomBorder = false;


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

function moveTo(e, shiftX, shiftY) {
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
      ballModel.bottomBorder = true; // мяч достиг дна

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

  isAnimated = false;
  ballModel.strat = new Date();
  ballModel.stratX = e.pageX;
  ballModel.stratY = e.pageY;

  ballModel.posX = e.pageX;
  ballModel.posY = e.pageY;

  var coords = getCoords(ball);

  ballModel.shiftX = ballModel.posX - coords.left;
  ballModel.shiftY = ballModel.posY - coords.top;

  scene.addEventListener('mousemove', onMouseMove);
}

function onMouseMove(e) {

  isAnimated = false;
  moveTo(e, ballModel.shiftX, ballModel.shiftY);
}


function onMouseUp(e) {

  isAnimated = true;

  ballModel.end = new Date();

  ballModel.endX = e.pageX;
  ballModel.endY = e.pageY;

  ballModel.posX = e.pageX;
  ballModel.posY = e.pageY;
  
  ballModel.start = performance.now();

  // вычисляем начальный и текущий импульсы в момент броска
  ballModel.impulseTotal = (ballModel.sceneHeight - ballModel.endY - ballModel.ballHeight) + SPEED;
  ballModel.impulseCurrent = 0;

  //requestAnimationFrame(drop);
  
  scene.removeEventListener('mousemove', onMouseMove);
  ball.removeEventListener('mouseup', onMouseUp);
}

function drop() {

  if(ballModel.impulseTotal <=1){
    isAnimated = false;
  }

  if (isAnimated) {

    ballModel.posY += G + impulse(); 
    //ballModel.posX += impulse(x); 

    var position = checkBorders(ballModel.posX, ballModel.posY);
 

    if (SPEED > 0) {
      console.log("падаюююю ballModel.posY "+ ballModel.posY, SPEED);
    }
    else{
      console.log("взлетаюююю ballModel.posY "+ ballModel.posY, SPEED);

    }



    //определяем макс высоту текущего прыжка, количество пх от верхней границы
    ballModel.jumpHeight = ballModel.sceneHeight - ballModel.impulseTotal - ballModel.ballHeight;
    //достигли дна, но импульс для прыжков еще есть
    //то прыгаем вверх
    
    if(ballModel.posY <= ballModel.jumpHeight){
      // если достигли верхней границы прыжка и пора летить вниз
      console.log("верх ballModel.posY ", ballModel.posY, ballModel.jumpHeight);
      ballModel.impulseCurrent = ballModel.impulseTotal;
      ballModel.posY = ballModel.jumpHeight;
      SPEED = Math.abs(SPEED);
      ballModel.bottomBorder = false;
      ballModel.impulseCurrent = 0;




    console.log("======ВЕРХ==== "+ ballModel.jumpHeight, "speed " + SPEED, ballModel.impulseCurrent, "ballModel.posY ", ballModel.posY);
   
    }

    if(ballModel.posY > 300 && ballModel.impulseTotal != 0) {
      //и запускаем шар вверх прыгать, если есть импульс тотал != 0
      //импульс карент меняет значение от 0 до тотал и знак в зависимости от того падает шар или взлетает      
      SPEED = -1 * Math.abs(SPEED);
      ballModel.posY = ballModel.bottom;

      // достигли дна, значит прыгаем в два раза ниже, чем предыдущий прыжок
      ballModel.impulseTotal = ballModel.impulseTotal / 2;

      ballModel.impulseCurrent = 0;
      


      console.log("-----ДНО----- ballModel.posY "+ ballModel.posY);
      //ballModel.bottomBorder = false;
    }



    // if(ballModel.impulseTotal <= 0 && !ballModel.bottomBorder){
    //   SPEED = Math.abs(SPEED);
    // }

    ball.style.top = ballModel.posY + 'px'; 
    //ball.style.left = left_x + 'px';  
  }

  requestAnimationFrame(drop);   
}

function impulse() {

  
        console.log("impulse " + ballModel.impulseCurrent);
    return ballModel.impulseCurrent += SPEED;

  

}

// function timing() {
//   console.log("ballModel.impulseCurrent " + ballModel.impulseCurrent);
//   return ballModel.impulseCurrent += IMPULSE_STEP;

// }

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



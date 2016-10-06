"use strict";

(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

var 
  isAnimated = false, // анимировать ли шарик
  ballModel,
  G =      2.1, // ускорение свободного падения
  SPEED =  G + 0.0000000000000000001, // скорость полета вверх по Y, должна быть больше, чем G
  LEFT = 'Left',
  RIGHT = 'Right';

function BallModel(){

  //this.ball;

  this.posX; // координаты шара, верхний левый угол
  this.posY;

  this.shiftX; // сдвиг курсора мыши, относительно координат шара
  this.shiftY;

  this.speedX = 0; //  вектор скорости по X при броске
  this.speedY = 0; //  вектор скорости по Y при броске

  this.startTime; 
  this.startX; // координаты шара, в момент зажатия мышкой
  this.startY;

  this.endTime;
  this.endX; // координаты шара, в момент отжатия мышки
  this.endY;   

  this.ballHeight;
  this.sceneWidth;
  this.sceneHeight;

  this.jumpHeight = 0; // макимальная высота прыжка шара
  this.speed = 1000;

  this.impulseTotal = 0; // импульс прыжка вверх
  this.impulseCurrent = 0; 

  this.top = 0; 
  this.right = 0; 
  this.bottom = 0; // значение координат мача, когда он на дне
  this.left = 0; 

  this.topBorder = false; 
  this.rightBorder = false; 
  this.bottomBorder = false; //мяч достиг дня
  this.leftBorder = false; 
}

  var ball;

window.onload = function() {
  
  ballModel = new BallModel();

  var scene = document.getElementById('scene');

    ball = document.getElementById('ball');


  scene.style.width = 900 + 'px';
  scene.style.height = 400 + 'px';
  ball.style.height = 100 + 'px';

  ballModel.sceneWidth = parseInt(scene.style.width);
  ballModel.sceneHeight = parseInt(scene.style.height);
  ballModel.ballHeight = parseInt(ball.style.height);

  ballModel.top = ballModel.ballHeight;
  ballModel.right = ballModel.sceneWidth - ballModel.ballHeight;
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

  if(top_y < 0 || top_y > bottomBorder) {

    if (top_y < 0 ) {
      top_y = 0;
      ballModel.topBorder = true; 
    }
    else if(top_y > bottomBorder) {
      top_y = bottomBorder;
      ballModel.bottomBorder = true; // мяч достиг дна
    }
  }
  
  if(left_x < 0 || left_x > rightBorder) {

    if (left_x < 0 ) {
      left_x = 0;
      ballModel.leftBorder = true;      
   }
    else if(left_x > rightBorder) {
      left_x = rightBorder;
      ballModel.rightBorder = true;       
    }
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
  
  ballModel.startTime = new Date();

  ballModel.startTime = performance.now();



  ballModel.posX = e.pageX;
  ballModel.posY = e.pageY;

  var coords = getCoords(ball);

  ballModel.shiftX = ballModel.posX - coords.left;
  ballModel.shiftY = ballModel.posY - coords.top;

  ballModel.startX = e.pageX -  ballModel.shiftX;
  ballModel.startY = e.pageY - ballModel.shiftY;

    console.log("DOWN ", ballModel.startX, ballModel.startY, ballModel.shiftX, ballModel.shiftY);


  scene.addEventListener('mousemove', onMouseMove);
}

function onMouseMove(e) {

  isAnimated = false;
  moveTo(e, ballModel.shiftX, ballModel.shiftY);
}


function onMouseUp(e) {

  isAnimated = true;

  ballModel.endTime = new Date();

  ballModel.endX = e.pageX - ballModel.shiftX;
  ballModel.endY = e.pageY - ballModel.shiftY;

  console.log("UP ", ballModel.endX, ballModel.endY, ballModel.shiftX, ballModel.shiftY);

  ballModel.posX = e.pageX - ballModel.shiftX;
  ballModel.posY = e.pageY - - ballModel.shiftY;
  
  // вычисляем начальный и текущий импульсы в момент броска
  ballModel.impulseTotal = (ballModel.sceneHeight - ballModel.endY - ballModel.ballHeight) + SPEED;
  ballModel.impulseCurrent = 0;
 
  var t = (ballModel.endTime - ballModel.startTime) / 10000000000 - 100; // время броска

  ballModel.speedY = (ballModel.endY - ballModel.startY) / t; //  вектор скорости по Y
  ballModel.speedX = ((ballModel.endX - ballModel.startX) / t); // вектор скорости по X 
  
  scene.removeEventListener('mousemove', onMouseMove);
  ball.removeEventListener('mouseup', onMouseUp);
}

function drop() {

  if(ballModel.impulseTotal <= 0.0000001) {
    isAnimated = false;
    rotate(RIGHT, false);
    rotate(LEFT, false);

    console.log("nsdfwewefwef");
  }

  if (isAnimated) {
    

    ballModel.posY += G + impulse() + ballModel.speedY; 
    // ballModel.posX += ballModel.speedX; 
    ballModel.posX += impulseX(); 

    var position = checkBorders(ballModel.posX, ballModel.posY);

    //определяем макс высоту текущего прыжка, количество пх от верхней границы
    ballModel.jumpHeight = ballModel.sceneHeight - ballModel.impulseTotal - ballModel.ballHeight;
    
    if(ballModel.posY <= ballModel.jumpHeight) {
      // если достигли верхней границы прыжка и пора летить вниз
      SPEED = Math.abs(SPEED);

      ballModel.posY = ballModel.jumpHeight;
      ballModel.bottomBorder = false;
      ballModel.impulseCurrent = 0;

    }

    if((ballModel.bottomBorder || ballModel.posY > ballModel.bottom) && ballModel.impulseTotal != 0) {
      //и запускаем шар вверх прыгать, если есть импульс тотал != 0
      //импульс карент меняет значение от 0 до тотал и знак в зависимости от того падает шар или взлетает      
      SPEED = -1 * Math.abs(SPEED);
 
      ballModel.posY = ballModel.bottom;
      // достигли дна, значит прыгаем ниже, чем предыдущий прыжок
      ballModel.impulseTotal = ballModel.impulseTotal * 0.68;
      ballModel.impulseCurrent = 0;
      ballModel.bottomBorder = false;

      if (ballModel.speedX >= 0) { 
        //console.log(RIGHT, ballModel.speedX); 
        rotate(RIGHT, true);
                console.log(RIGHT, ballModel.speedX); 

      }
      else {

        rotate(LEFT, true);
                console.log(LEFT, ballModel.speedX); 

      }

    }

    if (ballModel.rightBorder || ballModel.posX >= ballModel.right) {
      ballModel.posX = ballModel.right;
      ballModel.speedX = -1 * Math.abs(ballModel.speedX);
      ballModel.rightBorder = false;
      rotate(LEFT, true);
    }

    if (ballModel.leftBorder || ballModel.posX <= ballModel.left) {
      ballModel.posX = ballModel.left;
      ballModel.speedX = -1 * Math.abs(ballModel.speedX);
      ballModel.leftBorder = false;
      rotate(RIGHT, true);
    }    

    ball.style.top = ballModel.posY + 'px'; 
    ball.style.left = ballModel.posX  + 'px';  
  }

  requestAnimationFrame(drop);   
}



function impulseX() {
  if (ballModel.speedX == 0) return ballModel.speedX = 0;
  else if (ballModel.speedX > 0 ) return ballModel.speedX -= 0.01 ;
    else if (ballModel.speedX < 0 ) return ballModel.speedX += 0.01 ;
}


function impulse() {

  return ballModel.impulseCurrent += SPEED * 1.5;
}

function onDragStart() {

  return false;
}    

function stopMouse() {

  isAnimated = false;
  scene.removeEventListener('mousemove', onMouseMove);
  ball.removeEventListener('mouseup', onMouseUp);
}

function rotate(direction, start){
  if(start == true)   ball.setAttribute("class", "rotate" + direction);
 else ball.removeAttribute("class");
}

// function drop() {

//   if(ballModel.impulseTotal <=1) isAnimated = false;

//   if (isAnimated) {

//     ballModel.posY += G + impulse(); 
//     //ballModel.posX += impulse(x); 

//     var position = checkBorders(ballModel.posX, ballModel.posY);
 

//     // if (SPEED > 0) {
//     //   console.log("падаюююю ballModel.posY "+ ballModel.posY, SPEED);
//     // }

//     // else{
//     //   console.log("взлетаюююю ballModel.posY "+ ballModel.posY, SPEED);
//     // }

//     //определяем макс высоту текущего прыжка, количество пх от верхней границы
//     ballModel.jumpHeight = ballModel.sceneHeight - ballModel.impulseTotal - ballModel.ballHeight;
    
//     if(ballModel.posY <= ballModel.jumpHeight) {
//       // если достигли верхней границы прыжка и пора летить вниз
//       SPEED = Math.abs(SPEED);

//       ballModel.posY = ballModel.jumpHeight;
//       ballModel.bottomBorder = false;
//       ballModel.impulseCurrent = 0;

//     // console.log("верх ballModel.posY ", ballModel.posY, ballModel.jumpHeight);
//     // console.log("======ВЕРХ==== "+ ballModel.jumpHeight, "speed " + SPEED, ballModel.impulseCurrent, "ballModel.posY ", ballModel.posY);
//     }

//     if(ballModel.posY > 300 && ballModel.impulseTotal != 0) {
//       //и запускаем шар вверх прыгать, если есть импульс тотал != 0
//       //импульс карент меняет значение от 0 до тотал и знак в зависимости от того падает шар или взлетает      
//       SPEED = -1 * Math.abs(SPEED);

//       ballModel.posY = ballModel.bottom;
//       // достигли дна, значит прыгаем в два раза ниже, чем предыдущий прыжок
//       ballModel.impulseTotal = ballModel.impulseTotal / 2;
//       ballModel.impulseCurrent = 0;
      
//       //console.log("-----ДНО----- ballModel.posY "+ ballModel.posY);
//     }

//     ball.style.top = ballModel.posY + 'px'; 
//     //ball.style.left = left_x + 'px';  
//   }

//   requestAnimationFrame(drop);   
// }






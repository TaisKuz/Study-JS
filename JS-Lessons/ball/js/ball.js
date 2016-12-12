"use strict";

var 
  start,
  end,
  speed;



window.onload = function() {
  var ball = document.getElementById('ball');

  var scene = document.getElementById('scene');

  ball.onmousedown = function(e) {

    var coords = getCoords(ball);
    var shiftX = e.pageX  - coords.left + 109;
    var shiftY = e.pageY - coords.top + 20;

    ball.style.position = 'absolute';
    scene.appendChild(ball);
    moveAt(e);

    ball.style.zIndex = 1000;

    function moveAt(e) {

    var 
      left = e.pageX - shiftX,
      top = e.pageY - shiftY,
      rightBorder = scene.style.width - ball.style.height,
      bottomBorder = scene.style.height - ball.style.height;


    if (left < 0) {
      ball.style.left = 0 + 'px';
    }
    else if(left > rightBorder){
      ball.style.left = rightBorder + 'px';
    }
    else {
      ball.style.left = left + 'px';
    }

    if(top < 0){
      ball.style.top = 0 + 'px';      
    }
    else if(top > bottomBorder){
      ball.style.top = bottomBorder + 'px';      
    }
    else {
      ball.style.top = top + 'px';        
    }
  }

      // var 
      //   left = e.pageX - shiftX,
      //   top = e.pageY - shiftY;

      // if (left < 0) {
      //   ball.style.left = 0 + 'px';
      // }
      // else if(left > 940){
      //   ball.style.left = 940 + 'px';
      // }
      // else if(top > 340 ){
      //   ball.style.top = 340 + 'px';
      // }
      // else if(top < 0 ){
      //   ball.style.top = 0 + 'px';
      // }
      // else{
      //   ball.style.left = e.pageX - shiftX + 'px';
      //   ball.style.top = e.pageY - shiftY + 'px';        
      // }
    

    function getCoords(elem) {
        var box = elem.getBoundingClientRect();

        return {
         top: box.top + pageYOffset,
         left: box.left + pageXOffset
      };
    }; 

    document.onmousemove = function(e) {
      moveAt(e);
    };

    (function() {
      var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                                window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
      window.requestAnimationFrame = requestAnimationFrame;
    })();


    ball.onmouseup = function() {




      console.log(e.pageY +" e.pageY в момент броска");




      var speed =  (1000 - e.pageY) - 100;
      //для отскоков
      console.log(e.movementY + " movementY", e.movementX, screenY);
      animate({
        duration: speed,
        timing: bounceEaseOut,
        draw: function(progress) {

          if((340 - e.pageY) > 0) {
           ball.style.top = e.pageY + progress * (340 - e.pageY) + 'px';
          }
        }
      });

            document.onmousemove = null;
     this.onmouseup = null;
    }

 // прыжки
    function animate(options) {

      var start = performance.now();

      requestAnimationFrame(function animate(time) {
        // timeFraction от 0 до 1
        var timeFraction = (time - start) / options.duration;
        if (timeFraction > 1) timeFraction = 1;

        // текущее состояние анимации
        var progress = options.timing(timeFraction)

        options.draw(progress);

        if (timeFraction < 1) {
          requestAnimationFrame(animate);
        }

      });
    }

    function bounce(timeFraction) {
      for (var a = 0, b = 1, result; 1; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
          return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
        }
      }
    }
      // преобразователь в easeOut
    function makeEaseOut(timing) {
      return function(timeFraction) {
        return 1 - timing(1 - timeFraction);
      }
    }

    var bounceEaseOut = makeEaseOut(bounce);
  }


ball.ondragstart = function() {
    return false;
  };
}

    // if (left < 0 && (top > 0 && top < bottomBorder)) {
    //   ball.style.left = 0 + 'px';
    //   ball.style.top = top + 'px';
    // }
    // else if(left < 0 && top < 0) {
    //   ball.style.left = 0 + 'px';
    //   ball.style.top = 0 + 'px';
    // }  
    // else if(left < 0 && top > bottomBorder) {
    //   ball.style.left = 0 + 'px';
    //   ball.style.top = bottomBorder + 'px';
    // }  


    // else if(left > rightBorder && (top > 0 && top < bottomBorder)){
    //   ball.style.left = rightBorder + 'px';
    //   ball.style.top = top + 'px';

    // }
    // else if(left > rightBorder && top < 0){
    //   ball.style.left = rightBorder + 'px';
    //   ball.style.top = 0 + 'px';      
    // }
    // else if(left > rightBorder && top > bottomBorder){
    //   ball.style.left = rightBorder + 'px';
    //   ball.style.top = bottomBorder + 'px';      
    // }


// function Ball() {

//   var 
//     ball = document.getElementById('ball'),
//     scene = document.getElementById('scene');

//   this.height = ball.style.height;

//   var self = this; 

//   function onMouseDown(e) { 
//     moveAt(e);
//   }

//   function onMouseMove(e) { 
//     moveAt(e);
//   }

//   // function onMouseUp(e) { ... 

//   // }

//   function moveAt(e) {
//     var 
//       left = e.pageX,
//       top = e.pageY,
//       rightBorder = scene.style.width - ball.style.height,
//       bottomBorder = scene.style.height - ball.style.height;


//     if (left < 0) {
//       ball.style.left = 0 + 'px';
//     }
//     else if(left > rightBorder){
//       ball.style.left = rightBorder + 'px';
//     }
//     else {
//       ball.style.left = left + 'px';
//     }

//     if(top < 0){
//       ball.style.top = 0 + 'px';      
//     }
//     else if(top > bottomBorder){
//       ball.style.top = bottomBorder + 'px';      
//     }
//     else {
//       ball.style.top = top + 'px';        
//     }
//   }

//   document.onmousedown = onMouseDown;
//   document.onmousemove = onMouseMove;
//   //document.onmouseup = onMouseUp;

//   // this.onDragEnd = function(ball, dropElem) { };
//   // this.onDragCancel = function(ball) { };
// }


//   var ball = new Ball();
// }

// старый вариант выхода за границы

    // function moveAt(e, shiftX, shiftY) {
    //   var
    //       ballHeight = 100,
    //       sceneWidth = 800,
    //       sceneHeight = 400,
    //     left = e.pageX - shiftX,
    //     top = e.pageY - shiftY,
    //     rightBorder = sceneWidth - ballHeight,
    //     bottomBorder = sceneHeight - ballHeight;

    //   if (left < 0 && (top > 0 && top < bottomBorder)) {
    //     ball.style.left = 0 + 'px';
    //     ball.style.top = top + 'px';
    //   }
    //   else if(left < 0 && top < 0) {
    //     ball.style.left = 0 + 'px';
    //     ball.style.top = 0 + 'px';
    //   }  
    //   else if(left < 0 && top > bottomBorder) {
    //     ball.style.left = 0 + 'px';
    //     ball.style.top = bottomBorder + 'px';
    //   } 

    //   else if(left > rightBorder && (top > 0 && top < bottomBorder)){
    //     ball.style.left = rightBorder + 'px';
    //     ball.style.top = top + 'px';
    //   }
    //   else if(left > rightBorder && top < 0) {
    //     ball.style.left = rightBorder + 'px';
    //     ball.style.top = 0 + 'px';      
    //   }
    //   else if(left > rightBorder && top > bottomBorder) {
    //     ball.style.left = rightBorder + 'px';
    //     ball.style.top = bottomBorder + 'px';      
    //   }

    //   else if(top > bottomBorder && (left > 0 && left < rightBorder)) {
    //     ball.style.left = left + 'px';
    //     ball.style.top = bottomBorder + 'px';      
    //   }
    //   else if(top > bottomBorder && left < 0 ) {
    //     ball.style.left = 0 + 'px';
    //     ball.style.top = bottomBorder + 'px';      
    //   }
    //   else if(top > bottomBorder && left > rightBorder) {
    //     ball.style.left = rightBorder + 'px';
    //     ball.style.top = bottomBorder + 'px';      
    //   }

    //   else if(top < 0 && (left > 0 && left < rightBorder)) {
    //     ball.style.left = left + 'px';
    //     ball.style.top = 0 + 'px';      
    //   } 
    //   else if(top < 0 && left < 0) {
    //     ball.style.left = 0 + 'px';
    //     ball.style.top = 0 + 'px';      
    //   }
    //   else if(top < 0 && left > rightBorder) {
    //     ball.style.left = rightBorder + 'px';
    //     ball.style.top = 0 + 'px';      
    //   }

    //   else{
    //     ball.style.left = left + 'px';
    //     ball.style.top = top + 'px';             
    //   }
    // }











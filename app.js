"use strict";

var 
  date = new Date(),
  containerDate,
  containerTime,
  inputText,
  inputBtn,
  containerMessage,
  inputTextVal,
  inputTextNoSpaces,
  intervalID;

window.onload = function () {

  containerDate = document.createElement("div");
  containerDate.className = "container-date";

  containerDate.innerHTML = `Today is : ${date.toLocaleString("en-US", { weekday: 'long' })}.`;

  containerTime = document.createElement("div");
  containerTime.className = "container-time";
 
  inputText = document.createElement("input");
  inputText.type = "text";
  inputText.className = "input-text";
  inputText.placeholder = "Input palindrome here";

  inputBtn = document.createElement("input");
  inputBtn.type = "button";
  inputBtn.className = "input-btn";
  inputBtn.value = "Cheсk";

  containerMessage = document.createElement("div", {"clas": "containerMessage"});

  appendChild([containerDate, containerTime, inputText, inputBtn, containerMessage]);

  intervalID = window.setInterval(secondsTimer, 1000);

  secondsTimer();
  inputBtn.onclick = checkPolindrome;
}

function appendChild(items) {
  for (var i = 0; i < items.length; i++) {
    document.body.appendChild(items[i]); 
  }
}

function secondsTimer() {
  date = new Date();
  containerTime.innerHTML =  `Current time is : ${date.toLocaleString("en-US", { hour: 'numeric' })} : 
  ${date.getMinutes()} : ${date.getSeconds()}`;
} 

function checkInput() {
  inputTextVal = inputText.value;
  var onlySpaces = inputTextVal.replace(/\s+/g,'');
  console.log(onlySpaces);
  if(inputTextVal === "" || onlySpaces == "") {
    containerMessage.innerHTML = "Insert your text";
    return false;
  }
  else if(inputTextVal.search(/[^a-zA-Zа-яА-я\' ']/) < 0 && onlySpaces !== "")
  {
    inputTextNoSpaces = inputTextVal.replace(/(^\s+|\s+$)/g,'');
    containerMessage.innerHTML = "";
    return true;
  }  
  else{
    containerMessage.innerHTML = "Incorrect text";
    return false;
  }
}

function checkPolindrome() {
  if (checkInput() == true) {
    if (inputTextNoSpaces === inputTextNoSpaces.split('').reverse().join('')) 
      containerMessage.innerHTML = "This is polindrome";
    else 
      containerMessage.innerHTML = "This is NOT a polindrome";
  }
}


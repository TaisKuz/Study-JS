"use strict";

var 
  date = new Date(),
  containerDate,
  containerTime,
  inputText,
  inputBtn,
  messageTitle,
  containerMessage,
  RED = "red",
  GREEN = "green",
  inputTextVal,
  inputTextNoSpaces,
  btnGenerate,
  inputStr,
  inputStrVal,
  subSrtTitle,
  containerSubStr,
  onlySpaces,
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

  messageTitle = document.createElement("div");
  messageTitle.className = "messageTitle";
  messageTitle.innerHTML = "Message: ";

  containerMessage = document.createElement("div");
  containerMessage.className = "containerMessage";

  inputStr = document.createElement("input");
  inputStr.type = "text";
  inputStr.className = "input-srt";
  inputStr.placeholder = "Input string here";

  btnGenerate = document.createElement("input");
  btnGenerate.type = "button";
  btnGenerate.className = "btn-Generate";
  btnGenerate.value = "Generate sub-strings";

  subSrtTitle = document.createElement("div");
  subSrtTitle.className = "subSrtTitle";
  subSrtTitle.innerHTML = "Sub Strings: ";

  containerSubStr = document.createElement("div");
  containerSubStr.className = "containerSubStr";

  appendChild([containerDate, containerTime, inputText, inputBtn, messageTitle, containerMessage, inputStr, btnGenerate, subSrtTitle, containerSubStr]);

  intervalID = window.setInterval(secondsTimer, 1000);

  secondsTimer();

  inputBtn.onclick = checkPolindrome;
  btnGenerate.onclick = generateStrings;

  inputStr.onkeypress = clearMass;
  inputText.onkeypress = clearMass;
}

function clearMass() {
  containerMessage.innerHTML = "";
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

function checkPolindrome() {
  if (checkInput(inputText.value) == true) {
    if (inputTextNoSpaces === inputTextNoSpaces.split('').reverse().join('')) 
      containerMessage.innerHTML = "This is polindrome";
    else 
    {
      containerMessage.innerHTML = "This is NOT a polindrome";
      containerMessage.style.color = RED;
    }
  }
}

function checkInput(inputTextValue) {
  clearMass();
  onlySpaces = inputTextValue.replace(/\s+/g,'');
  
  if(inputTextValue === "" || onlySpaces == "") {
    containerMessage.innerHTML = "Insert your text";
    containerMessage.style.color = RED;
    return false;
  }
  else if(inputTextValue.search(/[^a-zA-Zа-яА-я\' ']/) < 0 && onlySpaces !== "")
  {
    inputTextNoSpaces = inputTextValue.replace(/(^\s+|\s+$)/g,'');
    clearMass();
    containerMessage.style.color = GREEN;
    return true;
  }  
  else{
    containerMessage.innerHTML = "Incorrect text";
    containerMessage.style.color = RED;
    return false;
  }
}

function generateStrings() {
  containerSubStr.innerHTML = "";
  inputStrVal = inputStr.value;
  if (checkInput(inputStrVal) == true) {

    var 
      subStr = "",
      strArr = "";
    
    for (var i = 0; i < inputTextNoSpaces.length; i++) {
      for (var j = i; j < inputTextNoSpaces.length; j++) {         
        subStr += inputTextNoSpaces[j];
        if (i < inputTextNoSpaces.length-1)
          strArr += `${subStr}, `;
        else
          strArr += `${subStr}`;
      }
      subStr = "";
    }
    containerSubStr.innerHTML = strArr;
  } 
}


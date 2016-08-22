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
  BG_GREEN = "#b3ffb3",
  BG_RED = "#ffd6cc",
  inputTextVal,
  inputTextNoSpaces,
  btnGenerate,
  inputStr,
  inputStrVal,
  subSrtTitle,
  containerSubStr,
  onlySpaces,
  containerWrapper1,
  containerWrapper2,
  containerWrapper3,
  containerWrapper4,
  titlePart1_1,
  titlePart2_1,
  titlePart2_2,
  titlePart4_1,
  titlePart4_2,
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

  titlePart1_1 = document.createElement("p");
  titlePart1_1.className = "titlePart1";
  titlePart1_1.innerHTML = "Write a JavaScript program to display the current day and time in the following format.<br>Sample Output : Today is : Friday.<br>Current time is : 4 PM : 50 : 22";

  titlePart2_1 = document.createElement("p");
  titlePart2_1.className = "titlePart1";
  titlePart2_1.innerHTML = "Write a JavaScript function that checks whether a passed string is palindrome or not?<br>Note: A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.";

  titlePart2_2 = document.createElement("p");
  titlePart2_2.className = "titlePart2";
  titlePart2_2.innerHTML = "Input palindrome: ";

  titlePart4_1 = document.createElement("p");
  titlePart4_1.className = "titlePart1";
  titlePart4_1.innerHTML = "Write a JavaScript function that generates all combinations of a string.<br>Example string : 'dog' <br> Expected Output : d,do,dog,o,og,g";

  titlePart4_2 = document.createElement("p");
  titlePart4_2.className = "titlePart2";
  titlePart4_2.innerHTML = "Input string: ";

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

  containerWrapper1 = document.createElement("div");
  containerWrapper1.className = "containerWrapper";
  containerWrapper1.appendChild(titlePart1_1);
  containerWrapper1.appendChild(containerDate);
  containerWrapper1.appendChild(containerTime);

  containerWrapper2 = document.createElement("div");
  containerWrapper2.className = "containerWrapper";
  containerWrapper2.appendChild(titlePart2_1);
  containerWrapper2.appendChild(titlePart2_2);
  containerWrapper2.appendChild(inputText);
  containerWrapper2.appendChild(inputBtn);

  containerWrapper3 = document.createElement("div");
  containerWrapper3.className = "containerWrapper massege";
  containerWrapper3.appendChild(messageTitle);
  containerWrapper3.appendChild(containerMessage);
 
  containerWrapper4 = document.createElement("div");
  containerWrapper4.className = "containerWrapper";
  containerWrapper4.appendChild(titlePart4_1);
  containerWrapper4.appendChild(titlePart4_2); 
  containerWrapper4.appendChild(inputStr);
  containerWrapper4.appendChild(btnGenerate);
  containerWrapper4.appendChild(subSrtTitle);
  containerWrapper4.appendChild(containerSubStr);  

  appendChild([containerWrapper1, containerWrapper2, containerWrapper3, containerWrapper4]);

  intervalID = window.setInterval(secondsTimer, 1000);

  secondsTimer();

  inputBtn.onclick = checkPolindrome;
  btnGenerate.onclick = generateStrings;

  inputStr.onkeypress = clearMass;
  inputText.onkeypress = clearMass;
}

function appendChild(items) {
  for (var i = 0; i < items.length; i++) {
    document.body.appendChild(items[i]); 
  }
}
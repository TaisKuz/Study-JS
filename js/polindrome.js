"use strict";

var inputText;

function polindrome(){

  var 
    containerWrapper2,
    titlePart2_1,
    titlePart2_2,
    inputBtn;

  containerWrapper2 = createUI("div", {className: "containerWrapper"}, document.body);  

  titlePart2_1 = createUI("p", {className: "titlePart1", 
    innerHTML: "Write a JavaScript function that checks whether a passed string is palindrome or not?<br>Note: A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run."
  }, containerWrapper2); 

  titlePart2_2 = createUI("p", {className: "titlePart2", 
    innerHTML: "Input palindrome: "
  }, containerWrapper2); 

  inputText = createUI("input", {type: "text", className: "input-text", 
    placeholder: "Input palindrome here"
  }, containerWrapper2);

  inputBtn = createUI("input", {type: "button", className: "input-btn", 
    value: "Cheсk"
  }, containerWrapper2);

  inputBtn.onclick = checkPolindrome;
  inputText.onkeypress = clearMass;
}

function checkPolindrome() {
  if (checkInput(inputText.value) == true) {
    if (inputTextNoSpaces === inputTextNoSpaces.split('').reverse().join('')) {
      containerMessage.innerHTML = "This is polindrome";
  	  changeColor(GREEN, BG_GREEN);
  	}
    else 
    {
      containerMessage.innerHTML = "This is NOT a polindrome";
      changeColor(RED, BG_RED);
    }
  }
}
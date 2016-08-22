"use strict";

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
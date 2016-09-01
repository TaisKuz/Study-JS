"use strict";

var 
  inputText,
  errorMessage1,
  containerResult;

function polindrome() {

  var 
    containerWrapper2,
    titlePart2_1,
    containerWrapTitle1,
    titlePart2_2,
    titlePart2_3,
    inputBtn;

  containerWrapper2 = createUI("form", {className: "containerWrapper", 
    id: "lesson2"
  }, document.body);  

  titlePart2_1 = createUI("p", {className: "description", 
    innerHTML: "Write a JavaScript function that checks whether a passed string is palindrome or not?<br>Note: A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run."
  }, containerWrapper2); 

  containerWrapTitle1 = createUI("div", {className: "containerWrapTitle"}, containerWrapper2); 

  titlePart2_2 = createUI("p", {className: "titleBig", 
    innerHTML: "Input palindrome: "
  }, containerWrapTitle1);

  errorMessage1 = createUI("p", {className: "errorMessage"}, containerWrapTitle1);  

  inputText = createUI("input", {type: "text", className: "inputText", 
    placeholder: "Input palindrome here"
  }, containerWrapper2);

  inputBtn = createUI("input", {type: "submit", className: "inputBtn", 
    value: "Cheсk"
  }, containerWrapper2);

  titlePart2_3 = createUI("div", {className: "resultTitle", 
    innerHTML: "Result: "
  }, containerWrapper2);  

  containerResult = createUI("div", {className: "containerMessage"}, containerWrapper2);

  containerWrapper2.onsubmit = checkPolindrome;
  inputText.onchange = clearMess;
  inputText.onfocus = clearMess;
  return false;
}

function checkPolindrome() {

  if (checkInput(inputText.value, errorMessage1, inputText) == true) {
    if (inputTextNoSpaces === inputTextNoSpaces.split('').reverse().join('')) {
      containerResult.innerHTML = "This is polindrome";
      changeColor(GREEN, BG_GREEN, containerResult);
  	}
    else 
    {
      containerResult.innerHTML = "This is NOT a polindrome";
      changeColor(RED, BG_RED, containerResult);
    }
  }
  return false;
}
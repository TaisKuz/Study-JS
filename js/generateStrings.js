"use strict";

var
  inputStr,
  inputStrVal, 
  containerWrapTitle2,
  errorMessage2,
  containerSubStr;  

function generateStrings() {

  var
    containerWrapper4,
    titlePart4_1,
    titlePart4_2,
    btnGenerate,
    subSrtTitle; 

  containerWrapper4 = createUI("form", {className: "containerWrapper", 
    id: "lesson3"
  }, document.body);  

  titlePart4_1 = createUI("p", {className: "description", 
    innerHTML: "Write a JavaScript function that generates all combinations of a string.<br>Example string : 'dog' <br> Expected Output : d,do,dog,o,og,g"
  }, containerWrapper4); 

  containerWrapTitle2 = createUI("div", {className: "containerWrapTitle"}, containerWrapper4); 

  titlePart4_2 = createUI("p", {className: "titleBig", 
    innerHTML: "Input string: "
  }, containerWrapTitle2);  

  errorMessage2 = createUI("p", {className: "errorMessage"}, containerWrapTitle2);  

  inputStr = createUI("input", {type: "text", className: "inputSrt", 
    placeholder: "Input string here"
  }, containerWrapper4); 

  btnGenerate = createUI("input", {type: "submit", className: "btnGenerate", 
    value: "Generate sub-strings"
  }, containerWrapper4);

  subSrtTitle = createUI("div", {className: "resultTitle", 
    innerHTML: "Sub Strings: "
  }, containerWrapper4);  

  containerSubStr = createUI("div", {className: "containerSubStr"}, containerWrapper4);  

  containerWrapper4.onsubmit = subStrings;
  inputStr.onchange = clearMess;
  inputStr.onfocus = clearMess;
  
  return false;
}

function subStrings() {

  containerSubStr.innerHTML = "";
  inputStrVal = inputStr.value;

  if (checkInput(inputStrVal, errorMessage2, inputStr) == true) {

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
  return false;
}
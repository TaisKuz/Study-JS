"use strict";

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
"use strict";

var
  inputStr,
  inputStrVal, 
  containerSubStr; 

function subStrings(){

  var
    containerWrapper4,
    titlePart4_1,
    titlePart4_2,
    btnGenerate,
    subSrtTitle; 

  containerWrapper4 = createUI("div", {className: "containerWrapper"}, document.body);  

  titlePart4_1 = createUI("p", {className: "titlePart1", 
    innerHTML: "Write a JavaScript function that generates all combinations of a string.<br>Example string : 'dog' <br> Expected Output : d,do,dog,o,og,g"
  }, containerWrapper4); 

  titlePart4_2 = createUI("p", {className: "titlePart2", 
    innerHTML: "Input string: "
  }, containerWrapper4);  

  inputStr = createUI("input", {type: "text", className: "input-srt", 
    placeholder: "Input string here"
  }, containerWrapper4); 

  btnGenerate = createUI("input", {type: "button", className: "btn-Generate", 
    value: "Generate sub-strings"
  }, containerWrapper4);

  subSrtTitle = createUI("div", {className: "subSrtTitle", 
    innerHTML: "Sub Strings: "
  }, containerWrapper4);  

  containerSubStr = document.createElement("div");
  containerSubStr.className = "containerSubStr";

  containerSubStr = createUI("div", {className: "containerSubStr"}, containerWrapper4);  

  btnGenerate.onclick = generateStrings;

  inputStr.onkeypress = clearMass; 

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
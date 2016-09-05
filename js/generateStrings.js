"use strict";

function GenerateStrings() {

}

GenerateStrings.prototype = Object.create(Lesson.prototype);
GenerateStrings.prototype.constructor = GenerateStrings; 

GenerateStrings.prototype.init = function() {

  this.containerWrapper = createUI("form", {className: "containerWrapper", 
    id: "2"
  }, document.body);  

  this.description = createUI("p", {className: "description", 
    innerHTML: "Write a JavaScript function that generates all combinations of a string.<br>Example string : 'dog' <br> Expected Output : d,do,dog,o,og,g"
  }, this.containerWrapper); 

  this.containerWrapTitle = createUI("div", {className: "containerWrapTitle"}, this.containerWrapper); 

  this.titleBig = createUI("p", {className: "titleBig", 
    innerHTML: "Input string: "
  }, this.containerWrapTitle);  

  this.errorMessage = createUI("p", {className: "errorMessage"}, this.containerWrapTitle);  

  this.inputStr = createUI("input", {type: "text", className: "inputSrt", 
    placeholder: "Input string here"
  }, this.containerWrapper); 

  this.btnGenerate = createUI("input", {type: "submit", className: "btnGenerate", 
    value: "Generate sub-strings"
  }, this.containerWrapper);

  this.resultTitle = createUI("div", {className: "resultTitle", 
    innerHTML: "Sub Strings: "
  }, this.containerWrapper);  

  this.containerSubStr = createUI("div", {className: "containerSubStr"}, this.containerWrapper);  

  this.containerWrapper.onsubmit = this.subStrings.bind(this);
  this.inputStr.onchange = clearMess;
  this.inputStr.onfocus = clearMess;
  
  return false;
}

GenerateStrings.prototype.subStrings = function() {

  this.containerSubStr.innerHTML = "";
  var inputStrVal = this.inputStr.value;

  if (checkInput(this.inputStrVal, this.errorMessage, this.inputStr) == true) {

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
    this.containerSubStr.innerHTML = strArr;
  } 

 return false;
}

GenerateStrings.prototype.destroy = function() {

  this.containerWrapper.onsubmit = null;
  this.inputStr.onchange = null;
  this.inputStr.onfocus = null;

  this.containerWrapper.remove();
  this.description = null;
  this.inputStr = null;
  this.containerWrapTitle = null;
  this.titleBig = null;
  this.errorMessage = null;
  this.btnGenerate = null;
  this.resultTitle = null;
  this.containerSubStr = null;
}

selectLessons(2, GenerateStrings);





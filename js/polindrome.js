"use strict";


function Polindrome() {

}

Polindrome.prototype = Object.create(Lesson.prototype);
Polindrome.prototype.constructor = Polindrome;

Polindrome.prototype.init = function() {
//отрисовка урока в браузере

  this.containerWrapper = createUI("form", {className: "containerWrapper", 
    id: "1"
  }, document.body);  

  this.description = createUI("p", {className: "description", 
    innerHTML: "Write a JavaScript function that checks whether a passed string is palindrome or not?<br>Note: A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run."
  }, this.containerWrapper); 

  this.containerWrapTitle = createUI("div", {className: "containerWrapTitle"}, this.containerWrapper); 

  this.titleBig = createUI("p", {className: "titleBig", 
    innerHTML: "Input palindrome: "
  }, this.containerWrapTitle);

  this.errorMessage = createUI("p", {className: "errorMessage"}, this.containerWrapTitle);  

  this.inputText = createUI("input", {type: "text", className: "inputText", 
    placeholder: "Input palindrome here"
  }, this.containerWrapper);

  this.inputBtn = createUI("input", {type: "button", className: "inputBtn", 
    value: "Cheсk"
  }, this.containerWrapper);

  this.resultTitle = createUI("div", {className: "resultTitle", 
    innerHTML: "Result: "
  }, this.containerWrapper);  

  this.containerResult = createUI("div", {className: "containerMessage"}, this.containerWrapper);

  this.inputBtn.onclick = this.checkPolindrome.bind(this);
  this.inputText.onchange = this.clearMess.bind(this);
  this.inputText.onfocus = this.clearMess.bind(this);

  return false;
}

Polindrome.prototype.checkPolindrome = function () {

  if (this.checkInput(this.inputText.value, this.errorMessage, this.inputText) == true) {
    var inputTextNoSpaces = this.inputText.value.replace(/(^\s+|\s+$)/g,'');

    if (inputTextNoSpaces === inputTextNoSpaces.split('').reverse().join('')) {
      this.containerResult.innerHTML = "This is polindrome";
      changeColor(GREEN, BG_GREEN, this.containerResult);
  	}
    else 
    {
      this.containerResult.innerHTML = "This is NOT a polindrome";
      changeColor(RED, BG_RED, this.containerResult);
    }
  }
  return false;
}

Polindrome.prototype.destroy = function() {

  this.inputBtn.onclick = null;
  this.inputText.onchange = null;
  this.inputText.onfocus = null;

  this.containerWrapper.remove();
  this.description = null;
  this.containerWrapTitle = null;

  this.titleBig = null;
  this.errorMessage = null;
  this.inputText = null;
  this.inputBtn = null;
  this.resultTitle = null;
  this.containerResult = null;
}

selectLessons(1, Polindrome);



"use strict";

function Polindrome() {}

Polindrome.prototype = Object.create(Lesson.prototype);
Polindrome.prototype.constructor = Polindrome;

Polindrome.prototype.init = function() {

  this.containerWrapper = createUI("form", {className: "containerWrapper",
      id: "1"
  }, document.body);


  this.title = createUI("p", {className: "description",
    innerHTML: "Write a JavaScript function that checks whether a passed string is palindrome or not?<br>Note: A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run."
  }, this.containerWrapper);

  this.containerWrapTitle = createUI("div", {className: "containerWrapTitle"}, this.containerWrapper);

  this.description = createUI("p", {className: "titleBig",
    innerHTML: "Input palindrome: "
  }, this.containerWrapTitle);

  this.errorMessage = createUI("p", {className: "errorMessage"}, this.containerWrapTitle);

  this.inputText = createUI("input", {type: "text", className: "inputSrt",
    placeholder: "Input palindrome here"
  }, this.containerWrapper);

  this.btnGenerate = createUI("input", {type: "button", className: "btnGenerate",
    value: "Cheсk"
  }, this.containerWrapper);

  this.resultTitle = createUI("div", {className: "resultTitle",
    innerHTML: "Result: "
  }, this.containerWrapper);

  this.containerResult = createUI("div", {className: "containerMessage"}, this.containerWrapper);

    this.containerWrapper.onclick = this.checkPolindrome.bind(this);
  this.inputText.onchange = this.clearMess.bind(this);
  this.inputText.onfocus = this.clearMess.bind(this);

}

Polindrome.prototype.checkPolindrome = function() {

  this.containerResult.innerHTML = "";
  var inputStrVal = this.inputText.value;

  if (this.checkInput(inputStrVal, this.errorMessage, this.inputText) == true) {

    var inputTextNoSpaces = inputStrVal.replace(/(^\s+|\s+$)/g,'');

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

    this.containerWrapper.onsubmit = null;
    this.inputText.onchange = null;
    this.inputText.onfocus = null;

    this.containerWrapper.remove();
    this.title = null;
    this.description = null;

    this.inputText = null;
    this.containerWrapTitle = null;

    this.errorMessage = null;
    this.btnGenerate = null;
    this.resultTitle = null;
    this.containerResult = null;
}

selectLessons(1, Polindrome);
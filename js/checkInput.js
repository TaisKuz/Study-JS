"use strict";

var
  RED = "red",
  GREEN = "green",
  BG_GREEN = "#b3ffb3",
  BG_RED = "#ffd6cc",
  GRAY = "#fdfdfd",
  BLUE = "#e6f7ff",
  inputTextVal,
  inputTextNoSpaces,
  onlySpaces;

function checkInput(inputTextValue, messageBox, inputBox) {

  clearMess();
  onlySpaces = inputTextValue.replace(/\s+/g,'');
  
  if(inputTextValue === "" || onlySpaces == "") {
    messageBox.innerHTML = "(Error: Insert your text)";
    changeColor(RED, BG_RED, inputBox);
    return false;
  }
  else if(inputTextValue.search(/[^a-zA-Zа-яА-я\' ']/) < 0 && onlySpaces !== "")
  {
    inputTextNoSpaces = inputTextValue.replace(/(^\s+|\s+$)/g,'');
    clearMess();
    return true;
  }  
  else{
    messageBox.innerHTML = "(Error: Incorrect text)";
    changeColor(RED, BG_RED, inputBox);
    return false;
  }
}
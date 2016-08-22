"use strict";

var
  RED = "red",
  GREEN = "green",
  BG_GREEN = "#b3ffb3",
  BG_RED = "#ffd6cc",
  inputTextVal,
  inputTextNoSpaces,
  onlySpaces;

function checkInput(inputTextValue) {
  clearMass();
  onlySpaces = inputTextValue.replace(/\s+/g,'');
  
  if(inputTextValue === "" || onlySpaces == "") {
    containerMessage.innerHTML = "Insert your text";
    changeColor(RED, BG_RED);
    return false;
  }
  else if(inputTextValue.search(/[^a-zA-Zа-яА-я\' ']/) < 0 && onlySpaces !== "")
  {
    inputTextNoSpaces = inputTextValue.replace(/(^\s+|\s+$)/g,'');
    clearMass();
    return true;
  }  
  else{
    containerMessage.innerHTML = "Incorrect text";
    changeColor(RED, BG_RED);
    return false;
  }
}
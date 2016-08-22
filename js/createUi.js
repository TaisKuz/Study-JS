"use strict";

function createUI(type, params, parent) {
  var 
    element = document.createElement(type),
    keys = Object.keys(params);


  for (var i = 0; i < keys.length; i++) {
    element[keys[i]] = params[keys[i]];
  }

  if (parent)
    parent.appendChild(element); 

  return element;
}
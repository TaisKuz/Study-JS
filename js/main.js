"use strict";

window.onload = function () {
  var mainForm = new MainForm();
  mainForm.init();
}


// ENTRY POINT

function MainForm() {
  this.currentLessonId = 1;

  this.lessons = ['js/timer.js',
  'js/polindrome.js',
  'js/generateStrings.js'];

  this.loadedScripts = {
      'js/timer.js'          : {isLoaded: false},
      'js/polindrome.js'     : {isLoaded: false},
      'js/generateStrings.js': {isLoaded: false}
  };
}

MainForm.prototype.init = function() {

	var 
		containerWrapper,
		inputBtn;
  
  containerWrapper = createUI("form", {className: "containerWrapper"}, document.body); 

  createUI("p", {className: "titleBig", 
    innerHTML: "Select the task below:"
  }, containerWrapper); 
  
  this.lessonSelect = createUI("select", {className: "lessonSelect"}, containerWrapper);  

  this.setOption(["Lesson-1: timer", "Lesson-2: polindrome", "Lesson-3: generateStrings"], this.lessonSelect);

  inputBtn = createUI("input", 
    {
      type: "button", 
      className: "inputBtn", 
      value: "Select"
    }, containerWrapper);

  inputBtn.onclick = this.clickHanler.bind(this);
}

MainForm.prototype.setOption = function(lessons, target) {
//внедряет html <option> в lessonSelect - список уроков

  for (var i = 0; i < lessons.length; i++) {

    if (i == 0) { 
      createUI("option", {innerHTML: lessons[i], 
        selected: "selected", id: i + 1
      }, target);
    }

    else {
      createUI("option", {innerHTML: lessons[i], id: i + 1}, target);   
    } 
  }
}

MainForm.prototype.selectLessons = function(lessonId) {

  for (var i = 0; i < this.lessons.length; i++) {

    if(lessonId == (i + 1)) {
      this.loadScript(this.lessons[i]);
    }
  }
}


MainForm.prototype.loadScript = function(scriptToLoad) {

  if (this.loadedScripts[scriptToLoad].isLoaded === false) {
    this.script = document.createElement('script');
    
    this.script.onload = this.loadHandler.bind(this);
    this.script.src = scriptToLoad;
    this.script.path = scriptToLoad;
    this.script.async = false;
    
    document.head.appendChild(this.script);
  }
}

MainForm.prototype.loadHandler = function() {

  this.loadedScripts[this.script.path].isLoaded = true;
}


MainForm.prototype.clickHanler = function() {

  // take id value from options
  for (var i = 0; i < this.lessonSelect.length; i++) {

    if(this.lessonSelect[i].selected) {
      this.currentLessonId = i + 1;
      this.selectLessons(this.currentLessonId);
    }
  }
}





// ---------------------- UTIL ------------------------
var
  RED = "red",
  GREEN = "green",
  BG_GREEN = "#b3ffb3",
  BG_RED = "#ffd6cc",
  GRAY = "#fdfdfd",
  BLUE = "#e6f7ff";

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

function changeColor(color, bgColor, container) {

  container.style.color = color;
  container.style.background = bgColor;
}

function clearMess() {
  errorMessage1.innerHTML = "";
  errorMessage2.innerHTML = "";
  changeColor("black", GRAY, inputText);
  changeColor("black", GRAY, inputStr);
}

function checkInput(inputTextValue, messageBox, inputBox) {

  var  
    inputTextVal,
    onlySpaces,
    inputTextNoSpaces;

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
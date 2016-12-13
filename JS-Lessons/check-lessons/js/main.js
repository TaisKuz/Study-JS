"use strict";

var mainForm = new MainForm();

window.onload = function () {

  mainForm.init();
}

function Lesson(id) {

  this.id = id;
}

Lesson.prototype.init = function() {
  //init UI of current lesson in browser
  //init in each lesson
}

Lesson.prototype.destroy = function() {
  //destroying current lesson UI from browser
  //init in each lesson
}

// ENTRY POINT
function MainForm() {

  this.loadedScripts = [
      {id: 0, class: null, src: 'js/timer.js', isLoaded: false},
      {id: 1, class: null, src: 'js/polindrome.js', isLoaded: false},
      {id: 2, class: null, src: 'js/generateStrings.js', isLoaded: false}
  ];
}

MainForm.prototype.init = function() {

	var 
		containerWrapper,
		inputBtn;
  
  containerWrapper = createUI("form", {className: "containerWrapper"}, document.body); 

  createUI("p", { className: "titleBig",
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

//adding html <option> into lessonSelect (list of lessons)
MainForm.prototype.setOption = function(lessons, target) {

  for (var i = 0; i < lessons.length; i++) {
    if (i == 0) {

      createUI("option", {innerHTML: lessons[i], 
        selected: "selected", id: i
      }, target);
    }
    else {
      createUI("option", {innerHTML: lessons[i], id: i}, target);   
    } 
  }
}

MainForm.prototype.loadScript = function(scriptId) {

  if (this.loadedScripts[scriptId].isLoaded == false) {

    this.script = document.createElement('script');
    this.script.onload = this.loadHandler.bind(this);
    this.script.src = this.loadedScripts[scriptId].src;
    this.script.id = scriptId;
    this.script.async = false;
    
    document.head.appendChild(this.script);
  }
  else {
    selectLessons(mainForm.loadedScripts[scriptId].id, mainForm.loadedScripts[scriptId].class);
  }
}

MainForm.prototype.loadHandler = function() {

  this.loadedScripts[this.script.id].isLoaded = true;
}

MainForm.prototype.clickHanler = function() {

  // take id value from options
  for (var i = 0; i < this.lessonSelect.length; i++) {

    if(this.lessonSelect[i].selected) {
      this.loadScript(i);
    }
  }
}

MainForm.prototype.addLesson = function(id, lessonClass) {

  if (mainForm.loadedScripts[id].class == null) {
      mainForm.loadedScripts[id].class = lessonClass;
  }
}

function selectLessons(id, lessonClass) {

  mainForm.addLesson(id, lessonClass);

  if (mainForm.currentLesson) {

    mainForm.currentLesson.destroy();
  }

    mainForm.currentLesson = new lessonClass();
    mainForm.currentLesson.init(); 
}

// ---------------------- UTIL ------------------------
var
  RED = "red",
  GREEN = "green",
  BG_GREEN = "#b3ffb3",
  BG_RED = "#ffd6cc",
  GRAY = "#fdfdfd",
  BLUE = "#e6f7ff";

// creates UI elements and insert them to browser
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

// changing colors of warning messages
function changeColor(color, bgColor, container) {

  container.style.color = color;
  container.style.background = bgColor;
}

Lesson.prototype.clearMess = function () {

  this.errorMessage.innerHTML = "";
  changeColor("black", GRAY, this.inputText);
}

// input-text verification
Lesson.prototype.checkInput = function (inputTextValue, messageBox, inputBox) {

  var
    onlySpaces,
    inputTextNoSpaces;

  this.clearMess();
  onlySpaces = inputTextValue.replace(/\s+/g,'');
  
  if(inputTextValue === "" || onlySpaces == "") {

    messageBox.innerHTML = "(Error: Insert your text)";
    changeColor(RED, BG_RED, inputBox);
    return false;
  }
  else if(inputTextValue.search(/[^a-zA-Zа-яА-я\' ']/) < 0 && onlySpaces !== "") {

    inputTextNoSpaces = inputTextValue.replace(/(^\s+|\s+$)/g,'');
    this.clearMess();
    return true;
  }  
  else {

    messageBox.innerHTML = "(Error: Incorrect text)";
    changeColor(RED, BG_RED, inputBox);
    return false;
  }
}
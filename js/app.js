"use strict";

var   
  containerMain,
  titleMain,
  taskSelect,
  loadedScripts = {
      'js/timer.js'          : {value: "", isLoaded: false},
      'js/polindrome.js'     : {value: "", isLoaded: false},
      'js/generateStrings.js': {value: "", isLoaded: false}
  },
  loadBtn,
  scripts = {
    'changeColor': 'js/changeColor.js',
    'checkInput': 'js/checkInput.js',     
    'timer': 'js/timer.js',
    'polindrome': 'js/polindrome.js',
    'generateStrings': 'js/generateStrings.js'
  },
  lessons = {
    lesson1: ['js/timer.js'],
    lesson2: ['js/polindrome.js'],
    lesson3: ['js/generateStrings.js']
  };

window.onload = function () {

  loadMainScripts('js/changeColor.js');
  loadMainScripts('js/checkInput.js');
  loadMainScripts('js/clearMess.js');

  var script = document.createElement('script');
  script.onload = mainForm;
  script.src = 'js/createUI.js';
  script.async = false;
  document.head.appendChild(script);
}

function loadMainScripts(srcName) {

  var script = document.createElement('script');
  script.src = srcName;
  script.async = false;
  document.head.appendChild(script);
}

function mainForm() {

  containerMain = createUI("form", {className: "containerWrapper"}, document.body); 

  titleMain = createUI("p", {className: "titleBig", 
    innerHTML: "Select the task below:"
  }, containerMain); 
  
  taskSelect = createUI("select", {className: "lessonSelect"}, containerMain);  

  setOption(["task-1: timer", "task-2: polindrome", "task-3: generateStrings"]);

  loadBtn = createUI("input", {type: "button", className: "input-btn", 
    value: "Select"
  }, containerMain);

  //containerMain.onsubmit = selectTasks;
  loadBtn.onclick = selectTasks;

}

function setOption(tasks) {

  createUI("option", {innerHTML: tasks[0], 
    selected: "selected", id: 1
  }, taskSelect); 

  for (var i = 1; i < tasks.length; i++) {
    createUI("option", {innerHTML: tasks[i], id: i + 1}, taskSelect);    
  }
}

// список ссылок на скрипты
function loadScript(scriptsArray) {
  // проверить нет ли в загрузках
  for (var i = 0; i < scriptsArray.length; i++) {

    loadedScripts[scriptsArray[i]].isLoaded == false

    if (loadedScripts[scriptsArray[i]].isLoaded == false) {
      var script = document.createElement('script');
      
      script.onload = loadHandler;
      script.src = scriptsArray[i];
      script.path = scriptsArray[i];
      script.async = false;
      
      document.head.appendChild(script);
      loadedScripts[scriptsArray[i]].value = script;  

      return true;
    }

    else return false;
  }
}

function loadHandler() {
  loadedScripts[this.path].isLoaded = true;

  if (this.path == 'js/timer.js') timer();

  if (this.path == 'js/polindrome.js') polindrome();

  if (this.path == 'js/generateStrings.js') generateStrings();
}


    var flag1, flag2, flag3;
function selectTasks() {

  if(taskSelect[0].selected)  {
    flag1 = loadScript(lessons['lesson' + taskSelect.options[0].id]);
    removeLessons(1);
  }
  else if (taskSelect[1].selected) {
    flag2 = loadScript(lessons['lesson' + taskSelect.options[1].id]);
    removeLessons(2);
  }
  else if (taskSelect[2].selected) {
    flag3 =  loadScript(lessons['lesson' + taskSelect.options[2].id]);
    removeLessons(3);
  }
}

function removeLessons(lesson) {
  if (lesson == 1) {
    if (document.getElementById("lesson2")) removeElement(["lesson2"]);
    if (document.getElementById("lesson3")) removeElement(["lesson3"]);
    if (!flag1 && !document.getElementById("lesson1")) timer();
  }
  
  else if (lesson == 2) {
    if (document.getElementById("lesson1")) removeElement(["lesson1"]);
    if (document.getElementById("lesson3")) removeElement(["lesson3"]);
    if (!flag2 && !document.getElementById("lesson2")) polindrome();

  }
  
  else if(lesson == 3) {
    if (document.getElementById("lesson1")) removeElement(["lesson1"]);
    if (document.getElementById("lesson2")) removeElement(["lesson2"]);
    if (!flag3 && !document.getElementById("lesson3")) generateStrings();
  }

}

function removeElement(elements) {
  for (var i = 0; i < elements.length; i++) {

    var elementRem = document.getElementById(elements[i]);

    if (elementRem) {
      document.body.removeChild(elementRem);
    }
  }
}

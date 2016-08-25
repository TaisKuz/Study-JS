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

  titleMain = createUI("p", {className: "titleMain", 
    innerHTML: "Select the task below:"
  }, containerMain); 
  
  taskSelect = createUI("select", {className: "taskSelect"}, containerMain);  

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
    }
  }
}

function loadHandler() {
  loadedScripts[this.path].isLoaded = true;

  if (this.path == 'js/timer.js') timer();

  else if (this.path == 'js/polindrome.js') polindrome();

  else if (this.path == 'js/generateStrings.js') subStrings();
}

function selectTasks() {

  if(taskSelect[0].selected)  {

    loadScript(lessons['lesson' + taskSelect.options[0].id]);
    removeLessons(1);
    timer();
  }
  else if (taskSelect[1].selected) {
    
    loadScript(lessons['lesson' + taskSelect.options[1].id]);
    removeLessons(2);
    polindrome();
  }
  else if (taskSelect[2].selected) {
     
    loadScript(lessons['lesson' + taskSelect.options[2].id]);
    removeLessons(3);
    subStrings();  
  }
}

function removeLessons(lesson) {
  if (lesson == 1) removeElement(["lesson2", "lesson3"]);
  
  else if (lesson == 2) removeElement(["lesson1", "lesson3"]);
  
  else if(lesson == 3) removeElement(["lesson1", "lesson2"]);

}

function removeElement(elements) {
  for (var i = 0; i < elements.length; i++) {

    var elementRem = document.getElementById(elements[i]);

    if (elementRem) {
      document.body.removeChild(elementRem);
    }
  }
}

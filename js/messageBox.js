 "use strict";

 var 
	containerWrapper3,
	messageTitle,
	containerMessage;	

function messageBox(){

  containerWrapper3 = createUI("div", {className: "containerWrapper massege"}, document.body);

  messageTitle = createUI("div", {className: "messageTitle", 
    innerHTML: "Message: "
  }, containerWrapper3);  

  containerMessage = createUI("div", {className: "containerMessage"}, containerWrapper3);  	
 }

 
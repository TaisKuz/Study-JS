function Abstract(){

}

Abstract.prototype.SetUpLesson = function(id, class) {
  //

};

Abstract.prototype.init = function() {
  //метод создания, отрисовать нужную форму
  // можно ли ее переопределять для каждого объекта урока?

};

Abstract.prototype.destroy = function() {
  //метод удаления,  удалить элементы со страницы
};

function Lesson(name) {
	this.name = name; //номер урока
	this.ready = false; //готовность урока
	Abstract.apply(this, arguments);
}

// Унаследовать
Lesson.prototype = Object.create(Abstract.prototype);
Lesson.prototype.constructor = Lesson;



if (window.lessonLoadHandler) 
	window.lessonLoadHandler('timer', Lesson);
else
	console.log('Error');
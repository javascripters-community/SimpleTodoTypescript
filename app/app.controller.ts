module MyApp {
	class TodoAppController{
		latestTodo;
		static $inject = ['todoService'];
		constructor(private todoService: TodoService){
			
		}

		addTodo(){
			this.todoService.addTodo(this.latestTodo);
			this.latestTodo = '';
		}

		//init
		$onInit(){
			this.latestTodo = '';
		}
	}

	angular.module('todoApp').controller('todoAppController', TodoAppController);
}
module MyApp {
	let todoItemComponent = <ng.IComponentOptions>{
		bindings: {
			item: '<'
		},
		require: {
			todoList: "^todoList"
		},
		templateUrl: "/app/todo-item/todo-item.component.html",
		controller: angular.noop, //TODO look for alternative
		controllerAs: "todoItem"
	};

	//Dumb component
	angular.module('todoApp').component('todoItem', todoItemComponent);
}
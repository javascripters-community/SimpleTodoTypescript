module MyApp {
	let todoListComponent: ng.IComponentOptions = {
		templateUrl: '/app/todo-list/todo-list.component.html',
		controller: 'todoListController',
		controllerAs: 'todoList'
	};

	//Smart component
	angular.module('todoApp').component('todoList', todoListComponent);
}
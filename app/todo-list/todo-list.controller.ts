module MyApp {
	class TodoListController implements ng.IController {
		tabs: Tab[];
		selectedTab: Tab;
		todos: Todo[];
		itemsCompletedLength: number;
		static $inject = ['todoService']
		constructor(private todoService: TodoService){

		}

		toggleCompleted(item: Todo) {
			item.completed = !item.completed
		}
		
		$onInit(){
			this.tabs = this.todoService.getTabs();
			this.selectedTab = this.tabs[0];
			this.filterTodoList();
		}

		$doCheck(){
			this.itemsCompletedLength = this.todoService.getTodoList()
			.filter(todo => todo.completed).length;
		}

		getTodoList(){
			this.todos = this.todoService.getTodoList();
		}
		
		filterTodoList(){
			this.getTodoList();
			if(this.selectedTab.name === 'all') return;
			this.todos = this.todos.filter((item) =>
				item.completed === (this.selectedTab.name === "completed")
			);
		}

		removeTodo(item: Todo){
			this.todoService.removeTodo(item);
			this.getTodoList();
		}

		clearCompleted(){
			this.todoService.removeTodos();
			this.filterTodoList();
			alert('Completed todos has been removed.');
		}
	}
	angular.module('todoApp').controller('todoListController', TodoListController);
}
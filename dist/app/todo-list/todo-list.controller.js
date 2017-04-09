var MyApp;
(function (MyApp) {
    var TodoListController = (function () {
        function TodoListController(todoService) {
            this.todoService = todoService;
        }
        TodoListController.prototype.toggleCompleted = function (item) {
            item.completed = !item.completed;
        };
        TodoListController.prototype.$onInit = function () {
            this.tabs = this.todoService.getTabs();
            this.selectedTab = this.tabs[0];
            this.filterTodoList();
        };
        TodoListController.prototype.$doCheck = function () {
            this.itemsCompletedLength = this.todoService.getTodoList()
                .filter(function (todo) { return todo.completed; }).length;
        };
        TodoListController.prototype.getTodoList = function () {
            this.todos = this.todoService.getTodoList();
        };
        TodoListController.prototype.filterTodoList = function () {
            var _this = this;
            this.getTodoList();
            if (this.selectedTab.name === 'all')
                return;
            this.todos = this.todos.filter(function (item) {
                return item.completed === (_this.selectedTab.name === "completed");
            });
        };
        TodoListController.prototype.removeTodo = function (item) {
            this.todoService.removeTodo(item);
            this.getTodoList();
        };
        TodoListController.prototype.clearCompleted = function () {
            this.todoService.removeTodos();
            this.filterTodoList();
            alert('Completed todos has been removed.');
        };
        return TodoListController;
    }());
    TodoListController.$inject = ['todoService'];
    angular.module('todoApp').controller('todoListController', TodoListController);
})(MyApp || (MyApp = {}));

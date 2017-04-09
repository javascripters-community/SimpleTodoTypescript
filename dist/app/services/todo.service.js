var MyApp;
(function (MyApp) {
    var TodoService = (function () {
        function TodoService() {
            this.$inject = [];
            this.count = 0;
            this.todos = [
                { id: ++this.count, description: 'Wake Up', completed: false },
                { id: ++this.count, description: 'Gym' },
                { id: ++this.count, description: 'Office' }
            ];
            this.tabs = [
                { id: 1, name: 'all', description: 'All' },
                { id: 1, name: 'todo', description: 'Todo' },
                { id: 1, name: 'completed', description: 'Completed' },
            ];
        }
        TodoService.prototype.getTodoList = function () {
            return this.todos;
        };
        TodoService.prototype.getTabs = function () {
            return this.tabs;
        };
        TodoService.prototype.addTodo = function (description) {
            this.todos.push({
                id: ++this.count,
                description: description,
                completed: false
            });
        };
        TodoService.prototype.removeTodos = function () {
            this.todos = this.todos.filter(function (todo) { return !todo.completed; });
        };
        TodoService.prototype.removeTodo = function (item) {
            var id = item.id, index = -1;
            this.todos.forEach(function (todo, i) {
                if (todo.id === id)
                    index = i;
            });
            if (index !== -1)
                this.todos.splice(index, 1);
            alert('Todo ' + item.description + ' got deleted.');
        };
        return TodoService;
    }());
    angular.module('todoApp').service('todoService', TodoService);
})(MyApp || (MyApp = {}));

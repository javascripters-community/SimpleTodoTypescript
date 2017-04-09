var MyApp;
(function (MyApp) {
    var TodoAppController = (function () {
        function TodoAppController(todoService) {
            this.todoService = todoService;
        }
        TodoAppController.prototype.addTodo = function () {
            this.todoService.addTodo(this.latestTodo);
            this.latestTodo = '';
        };
        //init
        TodoAppController.prototype.$onInit = function () {
            this.latestTodo = '';
        };
        return TodoAppController;
    }());
    TodoAppController.$inject = ['todoService'];
    angular.module('todoApp').controller('todoAppController', TodoAppController);
})(MyApp || (MyApp = {}));

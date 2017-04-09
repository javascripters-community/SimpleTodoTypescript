var MyApp;
(function (MyApp) {
    var todoItemComponent = {
        bindings: {
            item: '<'
        },
        require: {
            todoList: "^todoList"
        },
        templateUrl: "/app/todo-item/todo-item.component.html",
        controller: angular.noop,
        controllerAs: "todoItem"
    };
    //Dumb component
    angular.module('todoApp').component('todoItem', todoItemComponent);
})(MyApp || (MyApp = {}));

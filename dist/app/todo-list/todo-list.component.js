var MyApp;
(function (MyApp) {
    var todoListComponent = {
        templateUrl: '/app/todo-list/todo-list.component.html',
        controller: 'todoListController',
        controllerAs: 'todoList'
    };
    //Smart component
    angular.module('todoApp').component('todoList', todoListComponent);
})(MyApp || (MyApp = {}));

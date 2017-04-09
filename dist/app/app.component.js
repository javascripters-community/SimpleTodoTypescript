var MyApp;
(function (MyApp) {
    angular.module('todoApp').component('todoApp', {
        templateUrl: '/app/app.component.html',
        controller: 'todoAppController',
        controllerAs: 'main'
    });
})(MyApp || (MyApp = {}));

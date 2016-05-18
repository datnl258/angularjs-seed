angular.module('QSoft.routers', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/state1");
    $stateProvider
        .state('state1', {
            url: "/state1",
            templateUrl: "/views/home/partials/state1.html"
        })
        .state('state1.list', {
            url: "/list",
            templateUrl: "/views/home/partials/state1.list.html",
            controller: ['$scope', function ($scope) {
                $scope.items = ["A", "List", "Of", "Items"];
            }]
        })
        .state('state2', {
            url: "/state2",
            templateUrl: "/views/home/partials/state2.html"
        })
        .state('state2.list', {
            url: "/list",
            templateUrl: "/views/home/partials/state2.list.html",
            controller: ['$scope', function ($scope) {
                $scope.things = ["A", "Set", "Of", "Things"];
            }]
        });
}]);
angular.module('QSoft.routers', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/404");
    $locationProvider.html5Mode(true);
    $stateProvider
        .state('home', {
            url: '/',
            meta: {
                title: 'Homepage',
                description: ''
            },
            templateUrl: '/views/home/partials/state1.html'
        })
        .state('404', {
            url: '/404',
            meta: {
                title: 'Oops! Page Not Found',
                description: ''
            },
            templateUrl: '/views/404/404.html'
        });
}]);
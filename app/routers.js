angular.module('QSoft.routers', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/404");
    $locationProvider.html5Mode(true);
    $stateProvider
        .state('home', {
            url: '/',
            metaData: {
                title: 'SMC566 APP',
                description: 'xxx',
                keywords: 'xxx'
            },
            templateUrl: '/views/home/partials/state1.html'
        })
        .state('404', {
            url: '/404',
            templateUrl: '/views/404/404.html'
        });
}]);
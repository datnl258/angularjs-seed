angular.module('QSoft.routers').config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('examples', {
            url: '/examples',
            meta: {
                title: 'Examples',
                description: ''
            },
            controller: 'ExamplesCtrl',
            controllerAs: 'ExampleCtrlAs',
            templateUrl: '/views/examples/examples.html'
        })
        .state('examples.course', {
            url:'/{course}',
            parent: 'examples',
            meta: {
                title: 'Example :course',
                description: ''
            },
            views: {
                "@" : {
                    controller: 'ExamplesCourseCtrl',
                    controllerAs: 'ExamplesCourseCtrlAs',
                    templateUrl: '/views/examples/course/course.html'
                }
            }
        });
}]);
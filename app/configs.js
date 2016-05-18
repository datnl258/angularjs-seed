angular.module('QSoft.configs', ['ngMeta'])
    .config(['ngMetaProvider', function (ngMetaProvider) {
        ngMetaProvider.useTitleSuffix(true);
        ngMetaProvider.setDefaultTitle('Home');
        ngMetaProvider.setDefaultTitleSuffix(' | QSoft Vietnam!');
        ngMetaProvider.setDefaultTag('author', 'QSoft Vietnam');
    }])
    .run(['ngMeta', function (ngMeta) {
        ngMeta.init();
    }]);
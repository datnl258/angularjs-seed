var elixir = require('laravel-elixir');
elixir.config.production = true;
elixir.config.sourcemaps = true;

var configs = {
    'coreJS': [
        './app/assets/js/angular.min.js',
        './app/assets/js/angular-animate.min.js',
        './app/assets/js/angular-messages.min.js',
        './app/assets/js/angular-message-format.min.js',
        './app/assets/js/angular-sanitize.min.js',
        './app/assets/js/restangular.min.js',
        './app/assets/js/ui-bootstrap.min.js',
        './app/assets/js/ui-router.min.js'
    ],
    'libsJS': [
        './app/assets/js/jquery.js',
        './app/assets/js/lodash.js'
    ],
    'appJS': [
        './app/app.js',
        './app/configs.js',
        './app/constants.js',
        './app/directives.js',
        './app/filters.js',
        './app/services.js',
        './app/routers.js',
        './app/components/**/*.js'
    ],
    'ieJS': [
        './app/assets/js/html5shiv.min.js',
        './app/assets/js/respond.min.js'
    ],
    'modulesJS': './app/modules/**/*.js',
    'coreCSS': [
        './app/sass/core.scss'
    ],
    'moduleCSS': './app/modules/**/*.scss',
    'fonts': './app/assets/fonts',
    'images': './app/assets/img',
    'indexHTML': './app/index.html',
    'viewHTML': './app/modules/**/*.html'
};

elixir(function (mix) {
    mix.sass(configs.coreCSS, './www/assets/css/core.css')
        .sass(configs.moduleCSS, './www/assets/css/modules.css')
        .scripts(configs.coreJS, './www/assets/js/core.js')
        .scripts(configs.libsJS, './www/assets/js/libs.js')
        .scripts(configs.appJS, './www/assets/js/app.js')
        .scripts(configs.modulesJS, './www/assets/js/modules.js')
        .scripts(configs.ieJS, './www/assets/js/ie.js')
        .copy(configs.fonts, './www/assets/fonts/')
        .copy(configs.images, './www/assets/img/')
        .copy(configs.viewHTML, './www/views/')
        .copy(configs.indexHTML, './www/index.html');
});
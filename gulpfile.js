var elixir = require('laravel-elixir');
elixir.config.production = true;
elixir.config.sourcemaps = true;

var paths = {
    'assets': '',
    'coreJS': [],
    'libsJS': [],
    'appJS': [],
    'modulesJS': [],
    'coreCSS': [],
    'appCSS': [],
    'moduleCSS': [],
    'fonts': [],
    'images': []
};

elixir(function (mix) {
    mix.sass(configs.coreCss, 'www/assets/css/core.css')
        .sass(configs.appCss, 'www/assets/css/site.css')
        .scripts(configs.coreJs, 'www/assets/js/core.js')
        .scripts(configs.ieJs, 'www/assets/js/ie.js')
        .copy(configs.coreFonts, 'www/assets/fonts')
        .copy(configs.appJs, 'www/assets/js/app.js')
        .copy(configs.appImg, 'www/assets/img');
});
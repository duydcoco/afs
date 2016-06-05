(function () {
    'use strict';

    angular
        .module('afs', [
            'ngStorage',
            'ngCookies',
            'ngCacheBuster',
            'ui.bootstrap',
            'ui.bootstrap.datetimepicker',
            'ui.router',
            'infinite-scroll',
            'angular-loading-bar'
        ])
        .run();
})();

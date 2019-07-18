'use strict';

(function() {
// Declare app level module which depends on views, and core components
    angular.module('navApp', [
        'ngRoute',
        'navApp.navBar1',
        'navApp.services1',
        'navApp.navBar2',
        'navApp.services2'

    ]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
    }]);
})();





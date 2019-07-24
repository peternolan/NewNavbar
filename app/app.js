(function() {
    'use strict';
    // Declare app level module which depends on views, and core components
    angular.module('navApp', [
        'ngRoute',
        'navApp.navBar2',
        'navApp.services'

    ]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
    }]);
})();





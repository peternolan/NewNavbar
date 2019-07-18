// Declare app level module which depends on views, and core components
angular.module('navApp.body', []).config(['$routeProvider'], function ($routeProvider) {
    $routeProvider.when('/body', {

    });
}).controller('appController', function ($scope, bar1service) {

    $scope.currentNavItem = bar1service.currentNavItem;

});

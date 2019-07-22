'use strict';


// Declare app level module which depends on views, and core components
angular.module('navApp.navBar2', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/navBar2', {
            templateUrl: 'navBar2/navBar2.html',
            controller: 'navController2'
        });
    }]).controller('navController2', function ($scope, bar2service) {
        $scope.toggleSearch = function(){
            document.getElementById("search").readOnly = !document.getElementById("search").readOnly;
            console.log(document.getElementById("search").readOnly);
            $("#search").toggleClass("search-input-open").focus();
        };



    });

'use strict';


// Declare app level module which depends on views, and core components
angular.module('navApp.navBar1', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/navBar1', {
            templateUrl: 'navBar1/navBar1.html',
            controller: 'navController1'
        });
    }]).controller('navController1', function ($scope, barService) {

    $scope.currentNavItem = "";

    $scope.toggleSearch = function() {
            console.log("OPEN SEARCH");
            document.getElementById("search").readOnly = !document.getElementById("search").readOnly;
            console.log(document.getElementById("search").readOnly);
            $("#search").toggleClass("search-input-open").focus();
        };
        $scope.openTab = function(page) {
            console.log("OPEN TAB");
            $("#" + page).toggleClass("nav-link-open");
            $("#" + page + 'ID').toggleClass("nav-id-open");
        };
        $scope.nav = function (page) {
            console.log($scope.currentNavItem);
            console.log(barService.currentNavItem);
            console.log(barService.goTo(page));
            $scope.currentNavItem = barService.goTo(page);
        };
});

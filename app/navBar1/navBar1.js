'use strict';


// Declare app level module which depends on views, and core components
angular.module('navApp.navBar1', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/navBar1', {
            templateUrl: 'navBar1/navBar1.html',
            controller: 'navController1'
        });
    }]).controller('navController1', function ($scope, bar1service) {
    $scope.currentNavItem = "";
    var sections = [
        "PurchaseRequest",
        "PurchaseOrder",
        "ProcurementVoucher",
        "Voucher",
        "ReceivingReport",
        "Deposit",
        "ESRTravel",
        "ESRNon",
        "ExpenseAuthorization"
    ];
    $scope.toggleSearch = function(){

        console.log("OPEN SEARCH");

        document.getElementById("search").readOnly = !document.getElementById("search").readOnly;
        console.log(document.getElementById("search").readOnly);
        $("#search").toggleClass("search-input-open").focus();
    };
    $scope.openTab = function(page) {
        console.log("OPEN TAB");
        $("#"+page).toggleClass("nav-link-open");
        $("#"+page+'ID').toggleClass("nav-id-open");
    };
    $scope.nav = function (page) {
        console.log(page);
        $scope.currentNavItem = bar1service.goTo(page);
    }
});

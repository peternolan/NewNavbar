'use strict';


// Declare app level module which depends on views, and core components
angular.module('navApp.controllers', []).controller('navController', function ($scope) {

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

    $scope.nav = function(page, src) {
        $scope.currentNavItem = page;
        console.log("Goto " + page);

    }


});
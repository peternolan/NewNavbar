'use strict';


// Declare app level module which depends on views, and core components
angular.module('navApp.controllers', []).controller('navController', function ($scope, barService) {


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

   $scope.nav = function (page, src) {

       $scope.currentNavItem = barService.goTo(page);

   }

});
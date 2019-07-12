'use strict';


// Declare app level module which depends on views, and core components
angular.module('navApp.controllers', []).controller('navController', function ($scope) {

    var sections = [
        "Purchase Report",
        "Purchase Order",
        "Procurement Voucher",
        "Voucher",
        "Receiving Report",
        "Deposit",
        "ESR Travel",
        "ESR Non-Travel",
        "Expense Authorization"
    ]

    sections.forEach(function(item){
        $(src).parent().addClass("active");
        if (trgt === item){
            $("#" + trgt).removeClass("hidden");
        } else {
            $("#" + item).addClass("hidden");
        }
    });


});
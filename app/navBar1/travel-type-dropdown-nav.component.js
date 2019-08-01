(function() {

    'use strict';

    // Declare app level module which depends on views, and core components

    angular.module('navApp').component('dropDownNavBar', {

        templateUrl: '../navBar1/travel-type-dropdown-nav.template.html',
        controller: navController1,
        controllerAs: 'vm'

    });

    angular
        .module('navApp')
        .controller('navController1', navController1);


    function navController1() {

        var vm = this;

        vm.currentNavItem = "";

        vm.toggleSearch = function () {
            document.getElementById("search").readOnly = !document.getElementById("search").readOnly;
            $("#search").toggleClass("search-input-open").focus();
        };
        vm.openTab = function (page) {
            console.log("openTab");
            $("#" + page).toggleClass("nav-link-open");
            $("#" + page + 'ID').toggleClass("nav-id-open");
        };
    }
})();

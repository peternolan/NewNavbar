angular.module('navApp.service', []).factory('barService', function () {

    var currentNavItem = '';

    return {
        goTo: goTo
    };

   function goTo (page) {
        currentNavItem = page;
        console.log("Goto " + page);
        return currentNavItem;
    }



})
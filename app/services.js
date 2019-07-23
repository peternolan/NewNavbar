'use strict';

angular.module('navApp.services', []).factory('barService', function () {

    var currentNavItem = '';

    return {
        goTo: goTo
    };

    function goTo (page) {
        console.log(page);
        currentNavItem = page;
        console.log(currentNavItem);
        return currentNavItem;

    }


});

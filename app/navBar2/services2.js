(function() {
    'use strict';

    angular.module('navApp.services2', []).factory('bar2service', function () {

        var currentNavItem = '';

        return {
            goTo: goTo
        };

        function goTo (page) {
            currentNavItem = page;

            return currentNavItem;
        }
    });

})();

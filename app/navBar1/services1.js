(function() {
    'use strict';

    angular.module('navApp.services1', []).factory('bar1service', function () {

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

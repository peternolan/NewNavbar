'use strict';

// Declare app level module which depends on views, and core components
angular.module('navApp').component('page', {

    templateUrl: 'page/page.html',
    bindings: {
        currentNavItem: '='
    }


});

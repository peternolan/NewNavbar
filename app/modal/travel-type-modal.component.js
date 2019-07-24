(function() {

    'use strict';

    // Declare app level module which depends on views, and core components
    angular.module('navApp').component('travelTypeModal', {
        //templateUrl: 'app/expense-docs/expense-components/travel-type-modal/travel-type-modal.template.html',
        templateUrl:'../modal/travel-type-modal.template.html',
        controller: TravelTypeModalController,
        bindings: {
            showOneWay: '<',
            onApplyFilter: '&',
            filterDataResult: '&'
        },
        controllerAs: 'vm'

    });

    angular
        .module('navApp')
        .controller('TravelTypeModalController', TravelTypeModalController);

    TravelTypeModalController.$inject = ['$timeout'];

    function  TravelTypeModalController($timeout) {

        var vm = this;

        vm.question1 = null;
        vm.question2 = null;
        vm.question3 = null;
        vm.question4 = null;

        vm.setQuestion1 = function(value) {    
            //Helper function to ensure logic works when both when there are 3 questions and 4
            vm.question1 = value;
            if (vm.showOneWay === false){
                vm.question2 = false;
              }

        };

        vm.determineTrip = function() {

            console.log("determineTrip");

            let selectedTravelType = 'round-trip';

            if (vm.question1 === true) {
                selectedTravelType = 'round-trip';
                vm.question2 = null;
                vm.question3 = null;
                vm.question4 = null;
            }
            else if (vm.question2 === true ){
                selectedTravelType = 'one-way';
                vm.question3 = null;
                vm.question4 = null;
            }
            else if (vm.question1 === false && vm.question2 === false && vm.question3 === false) {
                selectedTravelType = 'duty-station';
                vm.question4 = null;
            }
            else if (vm.question1 === false && vm.question2 === false && vm.question3 === true && vm.question4 === true) {
                selectedTravelType = 'multi-city'
            }
            else if (vm.question1 === false && vm.question2 === false && vm.question3 === false && vm.question4 === false) {
                selectedTravelType = 'round-trip';
                vm.question4 = null;
            }

            vm.filterDataResult = selectedTravelType;


        }

        vm.onApplyFilterLocal = function() {

            let filterData = {
                filterData: {
                    selectedTravelType: vm.filterDataResult
                }
            };
            
            vm.onApplyFilter(filterData); //Emit data to parent controller

            $timeout(function(){ //Timeout to ensure modal is dismissed before answers are cleared
                vm.clearAnswers();
            }, 100);

        }

        /*
          Clear out answers to modal when user exits
        */
        vm.clearAnswers = function() {
            vm.question1 = null;
            vm.question2 = null;
            vm.question3 = null;
            vm.question4 = null;
        }

    }

})();

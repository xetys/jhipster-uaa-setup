(function() {
    'use strict';

    angular
        .module('gatewayApp')
        .controller('BarDetailController', BarDetailController);

    BarDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Bar'];

    function BarDetailController($scope, $rootScope, $stateParams, previousState, entity, Bar) {
        var vm = this;

        vm.bar = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('gatewayApp:barUpdate', function(event, result) {
            vm.bar = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();

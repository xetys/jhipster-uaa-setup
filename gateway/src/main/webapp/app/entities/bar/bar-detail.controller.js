(function() {
    'use strict';

    angular
        .module('gatewayApp')
        .controller('BarDetailController', BarDetailController);

    BarDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Bar'];

    function BarDetailController($scope, $rootScope, $stateParams, entity, Bar) {
        var vm = this;

        vm.bar = entity;

        var unsubscribe = $rootScope.$on('gatewayApp:barUpdate', function(event, result) {
            vm.bar = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();

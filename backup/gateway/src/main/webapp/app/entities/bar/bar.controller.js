(function() {
    'use strict';

    angular
        .module('gatewayApp')
        .controller('BarController', BarController);

    BarController.$inject = ['$scope', '$state', 'Bar'];

    function BarController ($scope, $state, Bar) {
        var vm = this;
        
        vm.bars = [];

        loadAll();

        function loadAll() {
            Bar.query(function(result) {
                vm.bars = result;
            });
        }
    }
})();

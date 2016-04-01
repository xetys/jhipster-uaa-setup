(function() {
    'use strict';

    angular
        .module('gatewayApp')
        .controller('BarDeleteController',BarDeleteController);

    BarDeleteController.$inject = ['$uibModalInstance', 'entity', 'Bar'];

    function BarDeleteController($uibModalInstance, entity, Bar) {
        var vm = this;
        vm.bar = entity;
        vm.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };
        vm.confirmDelete = function (id) {
            Bar.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        };
    }
})();

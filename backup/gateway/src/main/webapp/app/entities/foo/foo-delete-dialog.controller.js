(function() {
    'use strict';

    angular
        .module('gatewayApp')
        .controller('FooDeleteController',FooDeleteController);

    FooDeleteController.$inject = ['$uibModalInstance', 'entity', 'Foo'];

    function FooDeleteController($uibModalInstance, entity, Foo) {
        var vm = this;

        vm.foo = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;
        
        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            Foo.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();

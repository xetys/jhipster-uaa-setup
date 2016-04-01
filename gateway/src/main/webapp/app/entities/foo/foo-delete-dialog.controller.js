(function() {
    'use strict';

    angular
        .module('gatewayApp')
        .controller('FooDeleteController',FooDeleteController);

    FooDeleteController.$inject = ['$uibModalInstance', 'entity', 'Foo'];

    function FooDeleteController($uibModalInstance, entity, Foo) {
        var vm = this;
        vm.foo = entity;
        vm.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };
        vm.confirmDelete = function (id) {
            Foo.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        };
    }
})();

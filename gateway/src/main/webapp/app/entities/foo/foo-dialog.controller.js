(function() {
    'use strict';

    angular
        .module('gatewayApp')
        .controller('FooDialogController', FooDialogController);

    FooDialogController.$inject = ['$scope', '$stateParams', '$uibModalInstance', 'entity', 'Foo'];

    function FooDialogController ($scope, $stateParams, $uibModalInstance, entity, Foo) {
        var vm = this;
        vm.foo = entity;
        vm.load = function(id) {
            Foo.get({id : id}, function(result) {
                vm.foo = result;
            });
        };

        var onSaveSuccess = function (result) {
            $scope.$emit('gatewayApp:fooUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        };

        var onSaveError = function () {
            vm.isSaving = false;
        };

        vm.save = function () {
            vm.isSaving = true;
            if (vm.foo.id !== null) {
                Foo.update(vm.foo, onSaveSuccess, onSaveError);
            } else {
                Foo.save(vm.foo, onSaveSuccess, onSaveError);
            }
        };

        vm.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };
    }
})();

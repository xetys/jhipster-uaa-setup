(function() {
    'use strict';

    angular
        .module('gatewayApp')
        .controller('BarDialogController', BarDialogController);

    BarDialogController.$inject = ['$scope', '$stateParams', '$uibModalInstance', 'entity', 'Bar'];

    function BarDialogController ($scope, $stateParams, $uibModalInstance, entity, Bar) {
        var vm = this;
        vm.bar = entity;
        vm.load = function(id) {
            Bar.get({id : id}, function(result) {
                vm.bar = result;
            });
        };

        var onSaveSuccess = function (result) {
            $scope.$emit('gatewayApp:barUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        };

        var onSaveError = function () {
            vm.isSaving = false;
        };

        vm.save = function () {
            vm.isSaving = true;
            if (vm.bar.id !== null) {
                Bar.update(vm.bar, onSaveSuccess, onSaveError);
            } else {
                Bar.save(vm.bar, onSaveSuccess, onSaveError);
            }
        };

        vm.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };
    }
})();

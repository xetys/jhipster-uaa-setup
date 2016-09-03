(function() {
    'use strict';

    angular
        .module('gatewayApp')
        .controller('BarDialogController', BarDialogController);

    BarDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Bar'];

    function BarDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Bar) {
        var vm = this;

        vm.bar = entity;
        vm.clear = clear;
        vm.save = save;

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.bar.id !== null) {
                Bar.update(vm.bar, onSaveSuccess, onSaveError);
            } else {
                Bar.save(vm.bar, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('gatewayApp:barUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();

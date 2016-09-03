System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function JhiHealthModalController($uibModalInstance, currentHealth, baseName, subSystemName) {
        var vm = this;
        vm.cancel = cancel;
        vm.currentHealth = currentHealth;
        vm.baseName = baseName;
        vm.subSystemName = subSystemName;
        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }
    }
    exports_1("JhiHealthModalController", JhiHealthModalController);
    return {
        setters:[],
        execute: function() {
            JhiHealthModalController.$inject = ['$uibModalInstance', 'currentHealth', 'baseName', 'subSystemName'];
        }
    }
});

//# sourceMappingURL=health-modal.controller.js.map

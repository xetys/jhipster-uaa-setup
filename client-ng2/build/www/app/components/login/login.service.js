System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function LoginService($uibModal) {
        var service = {
            open: open
        };
        var modalInstance = null;
        var resetModal = function () {
            modalInstance = null;
        };
        return service;
        function open() {
            if (modalInstance !== null)
                return;
            modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/login/login.html',
                controller: 'LoginController',
                controllerAs: 'vm',
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                            $translatePartialLoader.addPart('login');
                            return $translate.refresh();
                        }]
                }
            });
            modalInstance.result.then(resetModal, resetModal);
        }
    }
    exports_1("LoginService", LoginService);
    return {
        setters:[],
        execute: function() {
            LoginService.$inject = ['$uibModal'];
        }
    }
});

//# sourceMappingURL=login.service.js.map

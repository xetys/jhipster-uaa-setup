(function () {
    'use strict';
    angular
        .module('uaaSetupApp.admin')
        .controller('UserManagementDetailController', UserManagementDetailController);
    UserManagementDetailController.$inject = ['$stateParams', 'User'];
    function UserManagementDetailController($stateParams, User) {
        var vm = this;
        vm.load = load;
        vm.user = {};
        vm.load($stateParams.login);
        function load(login) {
            User.get({ login: login }, function (result) {
                vm.user = result;
            });
        }
    }
})();

//# sourceMappingURL=user-management-detail.controller.js.map

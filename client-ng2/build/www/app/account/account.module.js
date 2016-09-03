System.register(['./register/register.service', './activate/activate.service', './password/password.service', './reset/request/reset-request.service', './reset/finish/reset-finish.service', "./password/password-strength-bar.component", "../upgrade_adapter", "./register/register.state", "./account.state", "./register/register.controller"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var register_service_1, activate_service_1, password_service_1, reset_request_service_1, reset_finish_service_1, password_strength_bar_component_1, upgrade_adapter_1, register_state_1, account_state_1, register_controller_1;
    return {
        setters:[
            function (register_service_1_1) {
                register_service_1 = register_service_1_1;
            },
            function (activate_service_1_1) {
                activate_service_1 = activate_service_1_1;
            },
            function (password_service_1_1) {
                password_service_1 = password_service_1_1;
            },
            function (reset_request_service_1_1) {
                reset_request_service_1 = reset_request_service_1_1;
            },
            function (reset_finish_service_1_1) {
                reset_finish_service_1 = reset_finish_service_1_1;
            },
            function (password_strength_bar_component_1_1) {
                password_strength_bar_component_1 = password_strength_bar_component_1_1;
            },
            function (upgrade_adapter_1_1) {
                upgrade_adapter_1 = upgrade_adapter_1_1;
            },
            function (register_state_1_1) {
                register_state_1 = register_state_1_1;
            },
            function (account_state_1_1) {
                account_state_1 = account_state_1_1;
            },
            function (register_controller_1_1) {
                register_controller_1 = register_controller_1_1;
            }],
        execute: function() {
            upgrade_adapter_1.upgradeAdapter.upgradeNg1Provider('$translate');
            upgrade_adapter_1.upgradeAdapter.upgradeNg1Provider('Auth');
            upgrade_adapter_1.upgradeAdapter.upgradeNg1Provider('LoginService');
            angular
                .module('uaaSetupApp.account', [
                'ngStorage',
                'tmh.dynamicLocale',
                'pascalprecht.translate',
                'ngResource',
                'ui.bootstrap',
                'ui.router'
            ])
                .config(account_state_1.AccountStateConfig)
                .config(register_state_1.RegisterStateConfig)
                .directive('passwordStrengthBar', upgrade_adapter_1.upgradeAdapter.downgradeNg2Component(password_strength_bar_component_1.PasswordStrengthBarComponent))
                .directive('jhiRegister', upgrade_adapter_1.upgradeAdapter.downgradeNg2Component(register_controller_1.RegisterComponent))
                .factory('Register', register_service_1.Register)
                .factory('Activate', activate_service_1.Activate)
                .factory('Password', password_service_1.Password)
                .factory('PasswordResetInit', reset_request_service_1.PasswordResetInit)
                .factory('PasswordResetFinish', reset_finish_service_1.PasswordResetFinish);
        }
    }
});

//# sourceMappingURL=account.module.js.map

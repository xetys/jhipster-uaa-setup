System.register(['../upgrade_adapter', '../blocks/config/alert.config', './login/login.controller', './auth/auth.service', './auth/auth-session.service', './auth/account.service', './login/login.service', './auth/principal.service', './profiles/profile.service', './language/language.service', './alert/alert.service', './profiles/page-ribbon.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var upgrade_adapter_1, alert_config_1, login_controller_1, auth_service_1, auth_session_service_1, account_service_1, login_service_1, principal_service_1, profile_service_1, language_service_1, alert_service_1, page_ribbon_component_1;
    return {
        setters:[
            function (upgrade_adapter_1_1) {
                upgrade_adapter_1 = upgrade_adapter_1_1;
            },
            function (alert_config_1_1) {
                alert_config_1 = alert_config_1_1;
            },
            function (login_controller_1_1) {
                login_controller_1 = login_controller_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (auth_session_service_1_1) {
                auth_session_service_1 = auth_session_service_1_1;
            },
            function (account_service_1_1) {
                account_service_1 = account_service_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (principal_service_1_1) {
                principal_service_1 = principal_service_1_1;
            },
            function (profile_service_1_1) {
                profile_service_1 = profile_service_1_1;
            },
            function (language_service_1_1) {
                language_service_1 = language_service_1_1;
            },
            function (alert_service_1_1) {
                alert_service_1 = alert_service_1_1;
            },
            function (page_ribbon_component_1_1) {
                page_ribbon_component_1 = page_ribbon_component_1_1;
            }],
        execute: function() {
            upgrade_adapter_1.upgradeAdapter.addProvider(profile_service_1.ProfileService);
            upgrade_adapter_1.upgradeAdapter.upgradeNg1Provider('$state');
            upgrade_adapter_1.upgradeAdapter.upgradeNg1Provider('Auth');
            upgrade_adapter_1.upgradeAdapter.upgradeNg1Provider('JhiLanguageService');
            upgrade_adapter_1.upgradeAdapter.upgradeNg1Provider('LoginService');
            upgrade_adapter_1.upgradeAdapter.upgradeNg1Provider('Principal');
            angular
                .module('uaaSetupApp.common', [
                'ngStorage',
                'tmh.dynamicLocale',
                'pascalprecht.translate',
                'ngResource',
                'ui.bootstrap',
                'ui.router'
            ])
                .config(alert_config_1.AlertServiceConfig)
                .controller('LoginController', login_controller_1.LoginController)
                .factory('Auth', auth_service_1.Auth)
                .factory('AuthServerProvider', auth_session_service_1.AuthServerProvider)
                .factory('Account', account_service_1.Account)
                .factory('LoginService', login_service_1.LoginService)
                .factory('Principal', principal_service_1.Principal)
                .factory('ProfileService', upgrade_adapter_1.upgradeAdapter.downgradeNg2Provider(profile_service_1.ProfileService))
                .provider('AlertService', alert_service_1.AlertService)
                .factory('JhiLanguageService', language_service_1.JhiLanguageService)
                .directive('pageRibbon', upgrade_adapter_1.upgradeAdapter.downgradeNg2Component(page_ribbon_component_1.PageRibbonComponent));
        }
    }
});

//# sourceMappingURL=common.module.js.map

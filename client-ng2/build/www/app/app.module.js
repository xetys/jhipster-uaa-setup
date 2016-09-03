System.register(['./components/common.module', './account/account.module', './admin/admin.module', './entities/entity.module', "./upgrade_adapter", './blocks/handlers/state.handler', './blocks/handlers/translation.handler', './blocks/config/translation.config', './blocks/config/translation-storage.provider', './blocks/config/compile.config', './blocks/config/http.config', './blocks/config/localstorage.config', './blocks/config/uib-pager.config', './blocks/config/uib-pagination.config', './home/home.component', './layouts/navbar/navbar.component', './blocks/interceptor/auth-expired.interceptor', './blocks/interceptor/errorhandler.interceptor', './blocks/interceptor/notification.interceptor', './app.state', './home/home.state', './layouts/error/error.state'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var upgrade_adapter_1, state_handler_1, translation_handler_1, translation_config_1, translation_storage_provider_1, compile_config_1, http_config_1, localstorage_config_1, uib_pager_config_1, uib_pagination_config_1, home_component_1, navbar_component_1, auth_expired_interceptor_1, errorhandler_interceptor_1, notification_interceptor_1, app_state_1, home_state_1, error_state_1;
    function run(StateHandler, TranslationHandler) {
        StateHandler.initialize();
        TranslationHandler.initialize();
    }
    return {
        setters:[
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (upgrade_adapter_1_1) {
                upgrade_adapter_1 = upgrade_adapter_1_1;
            },
            function (state_handler_1_1) {
                state_handler_1 = state_handler_1_1;
            },
            function (translation_handler_1_1) {
                translation_handler_1 = translation_handler_1_1;
            },
            function (translation_config_1_1) {
                translation_config_1 = translation_config_1_1;
            },
            function (translation_storage_provider_1_1) {
                translation_storage_provider_1 = translation_storage_provider_1_1;
            },
            function (compile_config_1_1) {
                compile_config_1 = compile_config_1_1;
            },
            function (http_config_1_1) {
                http_config_1 = http_config_1_1;
            },
            function (localstorage_config_1_1) {
                localstorage_config_1 = localstorage_config_1_1;
            },
            function (uib_pager_config_1_1) {
                uib_pager_config_1 = uib_pager_config_1_1;
            },
            function (uib_pagination_config_1_1) {
                uib_pagination_config_1 = uib_pagination_config_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (auth_expired_interceptor_1_1) {
                auth_expired_interceptor_1 = auth_expired_interceptor_1_1;
            },
            function (errorhandler_interceptor_1_1) {
                errorhandler_interceptor_1 = errorhandler_interceptor_1_1;
            },
            function (notification_interceptor_1_1) {
                notification_interceptor_1 = notification_interceptor_1_1;
            },
            function (app_state_1_1) {
                app_state_1 = app_state_1_1;
            },
            function (home_state_1_1) {
                home_state_1 = home_state_1_1;
            },
            function (error_state_1_1) {
                error_state_1 = error_state_1_1;
            }],
        execute: function() {
            angular
                .module('uaaSetupApp.app', [
                'ngStorage',
                'tmh.dynamicLocale',
                'pascalprecht.translate',
                'ngResource',
                'ngCookies',
                'ngAria',
                'ngCacheBuster',
                'ngFileUpload',
                'ui.bootstrap',
                'ui.bootstrap.datetimepicker',
                'ui.router',
                'infinite-scroll',
                'angular-loading-bar',
                // jhipster-needle-angularjs-add-module JHipster will add new module here
                'uaaSetupApp.common',
                'uaaSetupApp.account',
                'uaaSetupApp.admin',
                'uaaSetupApp.entity'
            ])
                .config(compile_config_1.CompileServiceConfig)
                .config(http_config_1.HttpConfig)
                .config(localstorage_config_1.LocalStorageConfig)
                .config(uib_pager_config_1.PagerConfig)
                .config(uib_pagination_config_1.PaginationConfig)
                .config(app_state_1.AppStateConfig)
                .config(home_state_1.HomeStateConfig)
                .config(error_state_1.ErrorStateConfig)
                .directive('home', upgrade_adapter_1.upgradeAdapter.downgradeNg2Component(home_component_1.HomeComponent))
                .directive('navbar', upgrade_adapter_1.upgradeAdapter.downgradeNg2Component(navbar_component_1.NavbarComponent))
                .factory('AuthExpiredInterceptor', auth_expired_interceptor_1.AuthExpiredInterceptor)
                .factory('ErrorHandlerInterceptor', errorhandler_interceptor_1.ErrorHandlerInterceptor)
                .factory('NotificationInterceptor', notification_interceptor_1.NotificationInterceptor)
                .factory('StateHandler', state_handler_1.StateHandler)
                .factory('TranslationStorageProvider', translation_storage_provider_1.TranslationStorageProvider)
                .config(translation_config_1.TranslationConfig)
                .factory('TranslationHandler', translation_handler_1.TranslationHandler)
                .run(run);
            run.$inject = ['StateHandler', 'TranslationHandler'];
        }
    }
});

//# sourceMappingURL=app.module.js.map

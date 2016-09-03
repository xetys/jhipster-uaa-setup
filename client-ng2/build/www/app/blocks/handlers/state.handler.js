System.register(['../../app.constants'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var app_constants_1;
    function StateHandler($rootScope, $state, $sessionStorage, $translate, JhiLanguageService, TranslationHandler, $window, Auth, Principal) {
        return {
            initialize: initialize
        };
        function initialize() {
            $rootScope.VERSION = app_constants_1.VERSION;
            var stateChangeStart = $rootScope.$on('$stateChangeStart', function (event, toState, toStateParams, fromState) {
                $rootScope.toState = toState;
                $rootScope.toStateParams = toStateParams;
                $rootScope.fromState = fromState;
                // Redirect to a state with an external URL (http://stackoverflow.com/a/30221248/1098564)
                if (toState.external) {
                    event.preventDefault();
                    $window.open(toState.url, '_self');
                }
                if (Principal.isIdentityResolved()) {
                    Auth.authorize();
                }
                // Update the language
                JhiLanguageService.getCurrent().then(function (language) {
                    $translate.use(language);
                });
            });
            var stateChangeSuccess = $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                var titleKey = 'global.title';
                // Set the page title key to the one configured in state or use default one
                if (toState.data.pageTitle) {
                    titleKey = toState.data.pageTitle;
                }
                TranslationHandler.updateTitle(titleKey);
            });
            $rootScope.$on('$destroy', function () {
                if (angular.isDefined(stateChangeStart) && stateChangeStart !== null) {
                    stateChangeStart();
                }
                if (angular.isDefined(stateChangeSuccess) && stateChangeSuccess !== null) {
                    stateChangeSuccess();
                }
            });
        }
    }
    exports_1("StateHandler", StateHandler);
    return {
        setters:[
            function (app_constants_1_1) {
                app_constants_1 = app_constants_1_1;
            }],
        execute: function() {
            StateHandler.$inject = ['$rootScope', '$state', '$sessionStorage', '$translate', 'JhiLanguageService', 'TranslationHandler', '$window',
                'Auth', 'Principal'];
        }
    }
});

//# sourceMappingURL=state.handler.js.map

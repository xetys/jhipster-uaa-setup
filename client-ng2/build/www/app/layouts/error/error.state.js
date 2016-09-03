System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function ErrorStateConfig($stateProvider) {
        $stateProvider
            .state('error', {
            parent: 'app',
            url: '/error',
            data: {
                authorities: [],
                pageTitle: 'error.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/layouts/error/error.html'
                }
            },
            resolve: {
                mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('error');
                        return $translate.refresh();
                    }]
            }
        })
            .state('accessdenied', {
            parent: 'app',
            url: '/accessdenied',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/layouts/error/accessdenied.html'
                }
            },
            resolve: {
                mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('error');
                        return $translate.refresh();
                    }]
            }
        });
    }
    exports_1("ErrorStateConfig", ErrorStateConfig);
    return {
        setters:[],
        execute: function() {
            ErrorStateConfig.$inject = ['$stateProvider'];
        }
    }
});

//# sourceMappingURL=error.state.js.map

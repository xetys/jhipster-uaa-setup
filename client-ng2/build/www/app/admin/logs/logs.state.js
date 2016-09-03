System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function LogsStateConfig($stateProvider) {
        $stateProvider.state('logs', {
            parent: 'admin',
            url: '/logs',
            data: {
                authorities: ['ROLE_ADMIN'],
                pageTitle: 'logs.title'
            },
            views: {
                'content@': {
                    template: '<jhi-logs></jhi-logs>'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('logs');
                        return $translate.refresh();
                    }]
            }
        });
    }
    exports_1("LogsStateConfig", LogsStateConfig);
    return {
        setters:[],
        execute: function() {
            LogsStateConfig.$inject = ['$stateProvider'];
        }
    }
});

//# sourceMappingURL=logs.state.js.map

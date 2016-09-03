System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function HealthStateConfig($stateProvider) {
        $stateProvider.state('jhi-health', {
            parent: 'admin',
            url: '/health',
            data: {
                authorities: ['ROLE_ADMIN'],
                pageTitle: 'health.title'
            },
            views: {
                'content@': {
                    template: '<jhi-health></jhi-health>'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('health');
                        return $translate.refresh();
                    }]
            }
        });
    }
    exports_1("HealthStateConfig", HealthStateConfig);
    return {
        setters:[],
        execute: function() {
            HealthStateConfig.$inject = ['$stateProvider'];
        }
    }
});

//# sourceMappingURL=health.state.js.map

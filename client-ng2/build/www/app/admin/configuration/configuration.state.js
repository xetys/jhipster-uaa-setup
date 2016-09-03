System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function ConfigStateConfig($stateProvider) {
        $stateProvider.state('jhi-configuration', {
            parent: 'admin',
            url: '/configuration',
            data: {
                authorities: ['ROLE_ADMIN'],
                pageTitle: 'configuration.title'
            },
            views: {
                'content@': {
                    template: '<jhi-configuration></jhi-configuration>'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('configuration');
                        return $translate.refresh();
                    }]
            }
        });
    }
    exports_1("ConfigStateConfig", ConfigStateConfig);
    return {
        setters:[],
        execute: function() {
            ConfigStateConfig.$inject = ['$stateProvider'];
        }
    }
});

//# sourceMappingURL=configuration.state.js.map

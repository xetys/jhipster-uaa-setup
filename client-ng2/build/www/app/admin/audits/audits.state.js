System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function AuditStateConfig($stateProvider) {
        $stateProvider.state('audits', {
            parent: 'admin',
            url: '/audits',
            data: {
                authorities: ['ROLE_ADMIN'],
                pageTitle: 'audits.title'
            },
            views: {
                'content@': {
                    template: '<jhi-audit></jhi-audit>'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('audits');
                        return $translate.refresh();
                    }]
            }
        });
    }
    exports_1("AuditStateConfig", AuditStateConfig);
    return {
        setters:[],
        execute: function() {
            AuditStateConfig.$inject = ['$stateProvider'];
        }
    }
});

//# sourceMappingURL=audits.state.js.map

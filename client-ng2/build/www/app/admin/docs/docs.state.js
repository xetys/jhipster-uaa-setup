System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function DocsStateConfig($stateProvider) {
        $stateProvider.state('docs', {
            parent: 'admin',
            url: '/docs',
            data: {
                authorities: ['ROLE_ADMIN'],
                pageTitle: 'global.menu.admin.apidocs'
            },
            views: {
                'content@': {
                    templateUrl: 'app/admin/docs/docs.html'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', function ($translate) {
                        return $translate.refresh();
                    }]
            }
        });
    }
    exports_1("DocsStateConfig", DocsStateConfig);
    return {
        setters:[],
        execute: function() {
            DocsStateConfig.$inject = ['$stateProvider'];
        }
    }
});

//# sourceMappingURL=docs.state.js.map

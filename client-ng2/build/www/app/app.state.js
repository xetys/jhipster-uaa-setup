System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function AppStateConfig($stateProvider) {
        $stateProvider.state('app', {
            abstract: true,
            views: {
                'navbar@': {
                    template: '<navbar></navbar>'
                }
            },
            resolve: {
                authorize: ['Auth',
                    function (Auth) {
                        return Auth.authorize();
                    }
                ],
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('global');
                    }]
            }
        });
    }
    exports_1("AppStateConfig", AppStateConfig);
    return {
        setters:[],
        execute: function() {
            AppStateConfig.$inject = ['$stateProvider'];
        }
    }
});

//# sourceMappingURL=app.state.js.map

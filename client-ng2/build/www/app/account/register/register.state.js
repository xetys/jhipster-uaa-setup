System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function RegisterStateConfig($stateProvider) {
        $stateProvider.state('register', {
            parent: 'account',
            url: '/register',
            data: {
                authorities: [],
                pageTitle: 'register.title'
            },
            views: {
                'content@': {
                    template: '<register></register>'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('register');
                        return $translate.refresh();
                    }]
            }
        });
    }
    exports_1("RegisterStateConfig", RegisterStateConfig);
    return {
        setters:[],
        execute: function() {
            RegisterStateConfig.$inject = ['$stateProvider'];
        }
    }
});

//# sourceMappingURL=register.state.js.map

System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function HomeStateConfig($stateProvider) {
        $stateProvider.state('home', {
            parent: 'app',
            url: '/',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    template: '<home></home>'
                }
            },
            resolve: {
                mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('home');
                        return $translate.refresh();
                    }]
            }
        });
    }
    exports_1("HomeStateConfig", HomeStateConfig);
    return {
        setters:[],
        execute: function() {
            HomeStateConfig.$inject = ['$stateProvider'];
        }
    }
});

//# sourceMappingURL=home.state.js.map

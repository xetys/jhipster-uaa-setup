
AppStateConfig.$inject = ['$stateProvider'];

export function AppStateConfig($stateProvider) {
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

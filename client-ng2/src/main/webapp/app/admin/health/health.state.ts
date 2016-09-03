HealthStateConfig.$inject = ['$stateProvider'];

export function HealthStateConfig($stateProvider) {
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

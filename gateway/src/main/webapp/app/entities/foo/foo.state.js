(function() {
    'use strict';

    angular
        .module('gatewayApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('foo', {
            parent: 'entity',
            url: '/foo',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'gatewayApp.foo.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/foo/foos.html',
                    controller: 'FooController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('foo');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('foo-detail', {
            parent: 'entity',
            url: '/foo/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'gatewayApp.foo.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/foo/foo-detail.html',
                    controller: 'FooDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('foo');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'Foo', function($stateParams, Foo) {
                    return Foo.get({id : $stateParams.id}).$promise;
                }]
            }
        })
        .state('foo.new', {
            parent: 'foo',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/foo/foo-dialog.html',
                    controller: 'FooDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                value: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('foo', null, { reload: true });
                }, function() {
                    $state.go('foo');
                });
            }]
        })
        .state('foo.edit', {
            parent: 'foo',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/foo/foo-dialog.html',
                    controller: 'FooDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Foo', function(Foo) {
                            return Foo.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('foo', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('foo.delete', {
            parent: 'foo',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/foo/foo-delete-dialog.html',
                    controller: 'FooDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['Foo', function(Foo) {
                            return Foo.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('foo', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();

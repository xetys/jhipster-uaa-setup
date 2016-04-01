(function() {
    'use strict';

    angular
        .module('gatewayApp')
        .controller('FooDetailController', FooDetailController);

    FooDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Foo'];

    function FooDetailController($scope, $rootScope, $stateParams, entity, Foo) {
        var vm = this;
        vm.foo = entity;
        vm.load = function (id) {
            Foo.get({id: id}, function(result) {
                vm.foo = result;
            });
        };
        var unsubscribe = $rootScope.$on('gatewayApp:fooUpdate', function(event, result) {
            vm.foo = result;
        });
        $scope.$on('$destroy', unsubscribe);

    }
})();

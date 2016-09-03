(function() {
    'use strict';

    angular
        .module('gatewayApp')
        .controller('FooController', FooController);

    FooController.$inject = ['$scope', '$state', 'Foo'];

    function FooController ($scope, $state, Foo) {
        var vm = this;
        
        vm.foos = [];

        loadAll();

        function loadAll() {
            Foo.query(function(result) {
                vm.foos = result;
            });
        }
    }
})();

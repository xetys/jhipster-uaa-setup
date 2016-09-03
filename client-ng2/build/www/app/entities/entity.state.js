(function () {
    'use strict';
    angular
        .module('uaaSetupApp.entity')
        .config(stateConfig);
    stateConfig.$inject = ['$stateProvider'];
    function stateConfig($stateProvider) {
        $stateProvider.state('entity', {
            abstract: true,
            parent: 'app'
        });
    }
})();

//# sourceMappingURL=entity.state.js.map

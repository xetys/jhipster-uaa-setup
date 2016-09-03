System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function AdminStateConfig($stateProvider) {
        $stateProvider.state('admin', {
            abstract: true,
            parent: 'app'
        });
    }
    exports_1("AdminStateConfig", AdminStateConfig);
    return {
        setters:[],
        execute: function() {
            AdminStateConfig.$inject = ['$stateProvider'];
        }
    }
});

//# sourceMappingURL=admin.state.js.map

System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function AccountStateConfig($stateProvider) {
        $stateProvider.state('account', {
            abstract: true,
            parent: 'app'
        });
    }
    exports_1("AccountStateConfig", AccountStateConfig);
    return {
        setters:[],
        execute: function() {
            AccountStateConfig.$inject = ['$stateProvider'];
        }
    }
});

//# sourceMappingURL=account.state.js.map

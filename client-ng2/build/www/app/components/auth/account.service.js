System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function Account($resource) {
        var service = $resource('api/account', {}, {
            'get': { method: 'GET', params: {}, isArray: false,
                interceptor: {
                    response: function (response) {
                        // expose response
                        return response;
                    }
                }
            }
        });
        return service;
    }
    exports_1("Account", Account);
    return {
        setters:[],
        execute: function() {
            Account.$inject = ['$resource'];
        }
    }
});

//# sourceMappingURL=account.service.js.map

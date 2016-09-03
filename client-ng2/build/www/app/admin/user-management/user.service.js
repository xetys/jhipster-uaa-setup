System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function User($resource) {
        var service = $resource('api/users/:login', {}, {
            'query': { method: 'GET', isArray: true },
            'get': {
                method: 'GET', isArray: false,
                interceptor: {
                    response: function (response) {
                        // expose response
                        return response;
                    }
                }
            },
            'save': { method: 'POST' },
            'update': { method: 'PUT' },
            'delete': { method: 'DELETE' }
        });
        return service;
    }
    exports_1("User", User);
    return {
        setters:[],
        execute: function() {
            User.$inject = ['$resource'];
        }
    }
});

//# sourceMappingURL=user.service.js.map

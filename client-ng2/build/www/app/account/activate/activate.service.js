System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function Activate($resource) {
        var service = $resource('api/activate', {}, {
            'get': { method: 'GET', params: {}, isArray: false }
        });
        return service;
    }
    exports_1("Activate", Activate);
    return {
        setters:[],
        execute: function() {
            Activate.$inject = ['$resource'];
        }
    }
});

//# sourceMappingURL=activate.service.js.map

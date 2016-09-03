System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function Password($resource) {
        var service = $resource('api/account/change_password', {}, {});
        return service;
    }
    exports_1("Password", Password);
    return {
        setters:[],
        execute: function() {
            Password.$inject = ['$resource'];
        }
    }
});

//# sourceMappingURL=password.service.js.map

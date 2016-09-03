System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function PasswordResetInit($resource) {
        var service = $resource('api/account/reset_password/init', {}, {});
        return service;
    }
    exports_1("PasswordResetInit", PasswordResetInit);
    return {
        setters:[],
        execute: function() {
            PasswordResetInit.$inject = ['$resource'];
        }
    }
});

//# sourceMappingURL=reset-request.service.js.map

System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function PasswordResetFinish($resource) {
        var service = $resource('api/account/reset_password/finish', {}, {});
        return service;
    }
    exports_1("PasswordResetFinish", PasswordResetFinish);
    return {
        setters:[],
        execute: function() {
            PasswordResetFinish.$inject = ['$resource'];
        }
    }
});

//# sourceMappingURL=reset-finish.service.js.map

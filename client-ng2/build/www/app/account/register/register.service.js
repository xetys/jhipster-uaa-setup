System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function Register($resource) {
        return $resource('api/register', {}, {});
    }
    exports_1("Register", Register);
    return {
        setters:[],
        execute: function() {
            Register.$inject = ['$resource'];
        }
    }
});

//# sourceMappingURL=register.service.js.map

System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function ErrorHandlerInterceptor($q, $rootScope) {
        var service = {
            responseError: responseError
        };
        return service;
        function responseError(response) {
            if (!(response.status === 401 && (response.data === '' || (response.data.path && response.data.path.indexOf('/api/account') === 0)))) {
                $rootScope.$emit('uaaSetupApp.httpError', response);
            }
            return $q.reject(response);
        }
    }
    exports_1("ErrorHandlerInterceptor", ErrorHandlerInterceptor);
    return {
        setters:[],
        execute: function() {
            ErrorHandlerInterceptor.$inject = ['$q', '$rootScope'];
        }
    }
});

//# sourceMappingURL=errorhandler.interceptor.js.map

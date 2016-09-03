System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function NotificationInterceptor($q, AlertService) {
        var service = {
            response: response
        };
        return service;
        function response(response) {
            var alertKey = response.headers('X-uaaSetupApp-alert');
            if (angular.isString(alertKey)) {
                AlertService.success(alertKey, { param: response.headers('X-uaaSetupApp-params') });
            }
            return response;
        }
    }
    exports_1("NotificationInterceptor", NotificationInterceptor);
    return {
        setters:[],
        execute: function() {
            NotificationInterceptor.$inject = ['$q', 'AlertService'];
        }
    }
});

//# sourceMappingURL=notification.interceptor.js.map

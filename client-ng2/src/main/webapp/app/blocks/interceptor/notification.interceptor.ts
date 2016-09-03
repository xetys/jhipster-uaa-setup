NotificationInterceptor.$inject = ['$q', 'AlertService'];

export function NotificationInterceptor ($q, AlertService) {
    var service = {
        response: response
    };

    return service;

    function response (response) {
        var alertKey = response.headers('X-uaaSetupApp-alert');
        if (angular.isString(alertKey)) {
            AlertService.success(alertKey, { param : response.headers('X-uaaSetupApp-params')});
        }
        return response;
    }
}

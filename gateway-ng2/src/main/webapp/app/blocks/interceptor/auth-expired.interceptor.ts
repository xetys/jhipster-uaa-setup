import * as angular from 'angular';

AuthExpiredInterceptor.$inject = ['$rootScope', '$q', '$injector'/*, '$localStorage', '$sessionStorage'*/];

export function AuthExpiredInterceptor($rootScope, $q, $injector/*, $localStorage, $sessionStorage*/) {
    var service = {
        responseError: responseError
    };

    return service;

    function responseError(response) {
        if (response.status === 401) {
            //delete $localStorage.authenticationToken;
            //delete $sessionStorage.authenticationToken;
            var Principal = $injector.get('Principal');
            if (Principal.isAuthenticated()) {
                var Auth = $injector.get('Auth');
                Auth.authorize(true);
            }
        }
        return $q.reject(response);
    }
}


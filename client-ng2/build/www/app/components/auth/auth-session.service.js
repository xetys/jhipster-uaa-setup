System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function AuthServerProvider($http, $localStorage) {
        var service = {
            getToken: getToken,
            hasValidToken: hasValidToken,
            login: login,
            logout: logout
        };
        return service;
        function getToken() {
            var token = $localStorage.authenticationToken;
            return token;
        }
        function hasValidToken() {
            var token = this.getToken();
            return !!token;
        }
        function login(credentials) {
            var data = 'j_username=' + encodeURIComponent(credentials.username) +
                '&j_password=' + encodeURIComponent(credentials.password) +
                '&remember-me=' + credentials.rememberMe + '&submit=Login';
            return $http.post('api/authentication', data, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).success(function (response) {
                return response;
            });
        }
        function logout() {
            // logout from the server
            $http.post('api/logout').success(function (response) {
                delete $localStorage.authenticationToken;
                // to get a new csrf token call the api
                $http.get('api/account');
                return response;
            });
        }
    }
    exports_1("AuthServerProvider", AuthServerProvider);
    return {
        setters:[],
        execute: function() {
            AuthServerProvider.$inject = ['$http', '$localStorage'];
        }
    }
});

//# sourceMappingURL=auth-session.service.js.map

(function() {
    'use strict';
    angular
        .module('gatewayApp')
        .factory('Bar', Bar);

    Bar.$inject = ['$resource'];

    function Bar ($resource) {
        var resourceUrl =  'app2/' + 'api/bars/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();

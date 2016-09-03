User.$inject = ['$resource'];

export function User ($resource) {
    var service = $resource('api/users/:login', {}, {
        'query': {method: 'GET', isArray: true},
        'get': {
            method: 'GET', isArray: false,
            interceptor: {
                response: function(response) {
                    // expose response
                    return response;
                }
            }
        },
        'save': { method:'POST' },
        'update': { method:'PUT' },
        'delete':{ method:'DELETE'}
    });

    return service;
}


Activate.$inject = ['$resource'];

export function Activate ($resource) {
    var service = $resource('api/activate', {}, {
        'get': { method: 'GET', params: {}, isArray: false}
    });

    return service;
}

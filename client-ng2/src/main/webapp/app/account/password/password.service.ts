Password.$inject = ['$resource'];

export function Password($resource) {
    var service = $resource('api/account/change_password', {}, {});

    return service;
}

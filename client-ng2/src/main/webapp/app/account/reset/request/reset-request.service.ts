PasswordResetInit.$inject = ['$resource'];

export function PasswordResetInit($resource) {
    var service = $resource('api/account/reset_password/init', {}, {});

    return service;
}

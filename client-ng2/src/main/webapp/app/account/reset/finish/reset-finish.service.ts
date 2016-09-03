PasswordResetFinish.$inject = ['$resource'];

export function PasswordResetFinish($resource) {
    var service = $resource('api/account/reset_password/finish', {}, {});

    return service;
}

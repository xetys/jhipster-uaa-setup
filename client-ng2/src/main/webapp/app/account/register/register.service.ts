Register.$inject = ['$resource'];

export function Register ($resource) {
    return $resource('api/register', {}, {});
}

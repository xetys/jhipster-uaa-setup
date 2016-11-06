import {LANGUAGES} from '../../shared';

TranslationStorageProvider.$inject = ['$cookies', '$log'];

export function TranslationStorageProvider($cookies, $log) {
    return {
        get: get,
        put: put
    };

    function get(name) {
        if (LANGUAGES.indexOf($cookies.getObject(name)) === -1) {
            $log.info('Resetting invalid cookie language "' + $cookies.getObject(name) + '" to prefered language "en"');
            $cookies.putObject(name, 'en');
        }
        return $cookies.getObject(name);
    }

    function put(name, value) {
        $cookies.putObject(name, value);
    }
}

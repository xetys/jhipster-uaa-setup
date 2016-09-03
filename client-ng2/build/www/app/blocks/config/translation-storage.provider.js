System.register(['../../components/language/language.constants'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var language_constants_1;
    function TranslationStorageProvider($cookies, $log) {
        return {
            get: get,
            put: put
        };
        function get(name) {
            if (language_constants_1.LANGUAGES.indexOf($cookies.getObject(name)) === -1) {
                $log.info('Resetting invalid cookie language "' + $cookies.getObject(name) + '" to prefered language "en"');
                $cookies.putObject(name, 'en');
            }
            return $cookies.getObject(name);
        }
        function put(name, value) {
            $cookies.putObject(name, value);
        }
    }
    exports_1("TranslationStorageProvider", TranslationStorageProvider);
    return {
        setters:[
            function (language_constants_1_1) {
                language_constants_1 = language_constants_1_1;
            }],
        execute: function() {
            TranslationStorageProvider.$inject = ['$cookies', '$log'];
        }
    }
});

//# sourceMappingURL=translation-storage.provider.js.map

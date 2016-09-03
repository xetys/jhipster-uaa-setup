System.register(['../../components/language/language.constants'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var language_constants_1;
    function JhiLanguageService($q, $http, $translate, tmhDynamicLocale) {
        var service = {
            changeLanguage: changeLanguage,
            getAll: getAll,
            getCurrent: getCurrent
        };
        return service;
        function changeLanguage(languageKey) {
            $translate.use(languageKey);
            tmhDynamicLocale.set(languageKey);
        }
        function getAll() {
            var deferred = $q.defer();
            deferred.resolve(language_constants_1.LANGUAGES);
            return deferred.promise;
        }
        function getCurrent() {
            var deferred = $q.defer();
            var language = $translate.storage().get('NG_TRANSLATE_LANG_KEY');
            deferred.resolve(language);
            return deferred.promise;
        }
    }
    exports_1("JhiLanguageService", JhiLanguageService);
    return {
        setters:[
            function (language_constants_1_1) {
                language_constants_1 = language_constants_1_1;
            }],
        execute: function() {
            JhiLanguageService.$inject = ['$q', '$http', '$translate', 'tmhDynamicLocale'];
        }
    }
});

//# sourceMappingURL=language.service.js.map

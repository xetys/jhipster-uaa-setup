System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function TranslationConfig($translateProvider, tmhDynamicLocaleProvider) {
        // Initialize angular-translate
        $translateProvider.useLoader('$translatePartialLoader', {
            urlTemplate: 'i18n/{lang}/{part}.json'
        });
        $translateProvider.preferredLanguage('en');
        $translateProvider.useStorage('TranslationStorageProvider');
        $translateProvider.useSanitizeValueStrategy('escaped');
        $translateProvider.addInterpolation('$translateMessageFormatInterpolation');
        tmhDynamicLocaleProvider.localeLocationPattern('i18n/angular-locale_{{locale}}.js');
        tmhDynamicLocaleProvider.useCookieStorage();
        tmhDynamicLocaleProvider.storageKey('NG_TRANSLATE_LANG_KEY');
    }
    exports_1("TranslationConfig", TranslationConfig);
    return {
        setters:[],
        execute: function() {
            TranslationConfig.$inject = ['$translateProvider', 'tmhDynamicLocaleProvider'];
        }
    }
});

//# sourceMappingURL=translation.config.js.map

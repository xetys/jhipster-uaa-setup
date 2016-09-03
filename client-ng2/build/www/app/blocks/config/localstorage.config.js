System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function LocalStorageConfig($localStorageProvider, $sessionStorageProvider) {
        $localStorageProvider.setKeyPrefix('jhi-');
        $sessionStorageProvider.setKeyPrefix('jhi-');
    }
    exports_1("LocalStorageConfig", LocalStorageConfig);
    return {
        setters:[],
        execute: function() {
            LocalStorageConfig.$inject = ['$localStorageProvider', '$sessionStorageProvider'];
        }
    }
});

//# sourceMappingURL=localstorage.config.js.map

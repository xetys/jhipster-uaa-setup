System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function AlertServiceConfig(AlertServiceProvider) {
        // set below to true to make alerts look like toast
        AlertServiceProvider.showAsToast(false);
    }
    exports_1("AlertServiceConfig", AlertServiceConfig);
    return {
        setters:[],
        execute: function() {
            AlertServiceConfig.$inject = ['AlertServiceProvider'];
        }
    }
});

//# sourceMappingURL=alert.config.js.map

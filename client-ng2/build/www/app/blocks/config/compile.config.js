System.register(['../../app.constants'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var app_constants_1;
    function CompileServiceConfig($compileProvider) {
        // disable debug data on prod profile to improve performance
        $compileProvider.debugInfoEnabled(app_constants_1.DEBUG_INFO_ENABLED);
        /*
        If you wish to debug an application with this information
        then you should open up a debug console in the browser
        then call this method directly in this console:
    
        angular.reloadWithDebugInfo();
        */
    }
    exports_1("CompileServiceConfig", CompileServiceConfig);
    return {
        setters:[
            function (app_constants_1_1) {
                app_constants_1 = app_constants_1_1;
            }],
        execute: function() {
            CompileServiceConfig.$inject = ['$compileProvider'];
        }
    }
});

//# sourceMappingURL=compile.config.js.map

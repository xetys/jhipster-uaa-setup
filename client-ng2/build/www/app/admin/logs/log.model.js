System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Log;
    return {
        setters:[],
        execute: function() {
            Log = (function () {
                function Log(name, level) {
                    this.name = name;
                    this.level = level;
                }
                return Log;
            }());
            exports_1("Log", Log);
        }
    }
});

//# sourceMappingURL=log.model.js.map

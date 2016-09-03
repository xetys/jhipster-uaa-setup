System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Audit;
    return {
        setters:[],
        execute: function() {
            Audit = (function () {
                function Audit(data, principal, timestamp, type) {
                    this.data = data;
                    this.principal = principal;
                    this.timestamp = timestamp;
                    this.type = type;
                }
                return Audit;
            }());
            exports_1("Audit", Audit);
        }
    }
});

//# sourceMappingURL=audit.model.js.map

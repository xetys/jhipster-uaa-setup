System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AuditData;
    return {
        setters:[],
        execute: function() {
            AuditData = (function () {
                function AuditData(remoteAddress, sessionId) {
                    this.remoteAddress = remoteAddress;
                    this.sessionId = sessionId;
                }
                return AuditData;
            }());
            exports_1("AuditData", AuditData);
        }
    }
});

//# sourceMappingURL=audit-data.model.js.map

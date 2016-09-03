System.register(['rxjs/add/operator/toPromise', 'rxjs/add/operator/map'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function JhiMetricsService($rootScope) {
        var service = {
            getMetrics: getMetrics,
            threadDump: threadDump
        };
        return service;
        function getMetrics() {
            return this.http.get('management/jhipster/metrics').toPromise().
                then(function (response) {
                return response.data;
            });
        }
        function threadDump() {
            return this.http.get('management/dump').toPromise().
                then(function (response) {
                return response.data;
            });
        }
    }
    exports_1("JhiMetricsService", JhiMetricsService);
    return {
        setters:[
            function (_1) {},
            function (_2) {}],
        execute: function() {
            JhiMetricsService.$inject = ['$rootScope'];
        }
    }
});

//# sourceMappingURL=metrics.service.js.map

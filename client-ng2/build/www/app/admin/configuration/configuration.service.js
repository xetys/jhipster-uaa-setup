System.register(['@angular/core', '@angular/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var JhiConfigurationService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            JhiConfigurationService = (function () {
                function JhiConfigurationService(http) {
                    this.http = http;
                }
                JhiConfigurationService.prototype.get = function () {
                    return this.http.get('management/configprops').map(function (res) {
                        var properties = [];
                        var propertiesObject = res.json();
                        for (var key in propertiesObject) {
                            properties.push(propertiesObject[key]);
                        }
                        return properties.sort(function (propertyA, propertyB) {
                            if (propertyA.prefix === propertyB.prefix)
                                return 0;
                            else if (propertyA.prefix < propertyB.prefix)
                                return -1;
                            else if (propertyA.prefix > propertyB.prefix)
                                return 1;
                        });
                    });
                };
                JhiConfigurationService.prototype.getEnv = function () {
                    return this.http.get('management/env').map(function (res) {
                        var properties = {};
                        var propertiesObject = res.json();
                        for (var key in propertiesObject) {
                            var valsObject = propertiesObject[key];
                            var vals = [];
                            for (var valKey in valsObject) {
                                vals.push({ key: valKey, val: valsObject[valKey] });
                            }
                            properties[key] = vals;
                        }
                        return properties;
                    });
                };
                JhiConfigurationService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], JhiConfigurationService);
                return JhiConfigurationService;
            }());
            exports_1("JhiConfigurationService", JhiConfigurationService);
        }
    }
});

//# sourceMappingURL=configuration.service.js.map

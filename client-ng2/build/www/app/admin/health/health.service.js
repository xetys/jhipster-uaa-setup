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
    var JhiHealthService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            JhiHealthService = (function () {
                function JhiHealthService(http) {
                    this.http = http;
                    this.separator = '.';
                }
                JhiHealthService.prototype.checkHealth = function () {
                    return this.http.get('management/health').map(function (res) { return res.json(); });
                };
                JhiHealthService.prototype.transformHealthData = function (data) {
                    var response = [];
                    this.flattenHealthData(response, null, data);
                    return response;
                };
                JhiHealthService.prototype.getBaseName = function (name) {
                    if (name) {
                        var split = name.split('.');
                        return split[0];
                    }
                };
                JhiHealthService.prototype.getSubSystemName = function (name) {
                    if (name) {
                        var split = name.split('.');
                        split.splice(0, 1);
                        var remainder = split.join('.');
                        return remainder ? ' - ' + remainder : '';
                    }
                };
                /* private methods */
                JhiHealthService.prototype.addHealthObject = function (result, isLeaf, healthObject, name) {
                    var status;
                    var error;
                    var healthData = {
                        'name': name,
                        'error': error,
                        'status': status
                    };
                    var details = {};
                    var hasDetails = false;
                    for (var key in healthObject) {
                        var value = healthObject[key];
                        if (key === 'status' || key === 'error') {
                            healthData[key] = value;
                        }
                        else {
                            if (!this.isHealthObject(value)) {
                                details[key] = value;
                                hasDetails = true;
                            }
                        }
                    }
                    // Add the of the details
                    if (hasDetails) {
                        angular.extend(healthData, { 'details': details });
                    }
                    // Only add nodes if they provide additional information
                    if (isLeaf || hasDetails || healthData.error) {
                        result.push(healthData);
                    }
                    return healthData;
                };
                JhiHealthService.prototype.flattenHealthData = function (result, path, data) {
                    for (var key in data) {
                        var value = data[key];
                        if (this.isHealthObject(value)) {
                            if (this.hasSubSystem(value)) {
                                this.addHealthObject(result, false, value, this.getModuleName(path, key));
                                this.flattenHealthData(result, this.getModuleName(path, key), value);
                            }
                            else {
                                this.addHealthObject(result, true, value, this.getModuleName(path, key));
                            }
                        }
                    }
                    return result;
                };
                JhiHealthService.prototype.getModuleName = function (path, name) {
                    var result;
                    if (path && name) {
                        result = path + this.separator + name;
                    }
                    else if (path) {
                        result = path;
                    }
                    else if (name) {
                        result = name;
                    }
                    else {
                        result = '';
                    }
                    return result;
                };
                JhiHealthService.prototype.hasSubSystem = function (healthObject) {
                    var result = false;
                    for (var key in healthObject) {
                        var value = healthObject[key];
                        if (value && value.status) {
                            result = true;
                        }
                    }
                    return result;
                };
                JhiHealthService.prototype.isHealthObject = function (healthObject) {
                    var result = false;
                    for (var key in healthObject) {
                        if (key === 'status') {
                            result = true;
                        }
                    }
                    return result;
                };
                JhiHealthService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], JhiHealthService);
                return JhiHealthService;
            }());
            exports_1("JhiHealthService", JhiHealthService);
        }
    }
});

//# sourceMappingURL=health.service.js.map

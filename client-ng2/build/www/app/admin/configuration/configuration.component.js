System.register(["@angular/core", "./configuration.service", "../../shared/filter.pipe", "../../shared/order-by.pipe"], function(exports_1, context_1) {
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
    var core_1, configuration_service_1, filter_pipe_1, order_by_pipe_1;
    var JhiConfigurationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (configuration_service_1_1) {
                configuration_service_1 = configuration_service_1_1;
            },
            function (filter_pipe_1_1) {
                filter_pipe_1 = filter_pipe_1_1;
            },
            function (order_by_pipe_1_1) {
                order_by_pipe_1 = order_by_pipe_1_1;
            }],
        execute: function() {
            JhiConfigurationComponent = (function () {
                function JhiConfigurationComponent(jhiConfigurationService) {
                    this.jhiConfigurationService = jhiConfigurationService;
                    this.allConfiguration = null;
                    this.configuration = null;
                    this.configKeys = [];
                    this.filter = '';
                    this.orderProp = 'prefix';
                    this.reverse = false;
                }
                JhiConfigurationComponent.prototype.keys = function (dict) {
                    return Object.keys(dict);
                };
                JhiConfigurationComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.jhiConfigurationService.get().subscribe(function (configuration) {
                        _this.configuration = configuration;
                        for (var _i = 0, configuration_1 = configuration; _i < configuration_1.length; _i++) {
                            var config = configuration_1[_i];
                            _this.configKeys.push(Object.keys(config.properties));
                        }
                    });
                    this.jhiConfigurationService.getEnv().subscribe(function (configuration) {
                        _this.allConfiguration = configuration;
                    });
                };
                JhiConfigurationComponent = __decorate([
                    core_1.Component({
                        selector: 'jhi-configuration',
                        templateUrl: 'app/admin/configuration/configuration.html',
                        pipes: [filter_pipe_1.FilterPipe, order_by_pipe_1.OrderByPipe],
                        providers: [configuration_service_1.JhiConfigurationService]
                    }), 
                    __metadata('design:paramtypes', [configuration_service_1.JhiConfigurationService])
                ], JhiConfigurationComponent);
                return JhiConfigurationComponent;
            }());
            exports_1("JhiConfigurationComponent", JhiConfigurationComponent);
        }
    }
});

//# sourceMappingURL=configuration.component.js.map

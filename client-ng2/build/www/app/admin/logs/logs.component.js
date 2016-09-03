System.register(['@angular/core', "../../shared/filter.pipe", './log.model', './logs.service', "../../shared/order-by.pipe"], function(exports_1, context_1) {
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
    var core_1, filter_pipe_1, log_model_1, logs_service_1, order_by_pipe_1;
    var LogsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (filter_pipe_1_1) {
                filter_pipe_1 = filter_pipe_1_1;
            },
            function (log_model_1_1) {
                log_model_1 = log_model_1_1;
            },
            function (logs_service_1_1) {
                logs_service_1 = logs_service_1_1;
            },
            function (order_by_pipe_1_1) {
                order_by_pipe_1 = order_by_pipe_1_1;
            }],
        execute: function() {
            LogsComponent = (function () {
                function LogsComponent(logsService) {
                    this.logsService = logsService;
                    this.filter = '';
                    this.orderProp = 'name';
                    this.reverse = false;
                }
                LogsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.logsService.findAll().subscribe(function (loggers) { return _this.loggers = loggers; });
                };
                LogsComponent.prototype.changeLevel = function (name, level) {
                    var _this = this;
                    var log = new log_model_1.Log(name, level);
                    this.logsService.changeLevel(log).subscribe(function () {
                        _this.logsService.findAll().subscribe(function (loggers) { return _this.loggers = loggers; });
                    });
                };
                LogsComponent = __decorate([
                    core_1.Component({
                        selector: 'jhi-logs',
                        templateUrl: 'app/admin/logs/logs.html',
                        pipes: [filter_pipe_1.FilterPipe, order_by_pipe_1.OrderByPipe]
                    }), 
                    __metadata('design:paramtypes', [logs_service_1.LogsService])
                ], LogsComponent);
                return LogsComponent;
            }());
            exports_1("LogsComponent", LogsComponent);
        }
    }
});

//# sourceMappingURL=logs.component.js.map

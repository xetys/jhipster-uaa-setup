System.register(["@angular/core", "./health.service", '../../shared/translate.pipe'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, health_service_1, translate_pipe_1;
    var JhiHealthCheckComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (health_service_1_1) {
                health_service_1 = health_service_1_1;
            },
            function (translate_pipe_1_1) {
                translate_pipe_1 = translate_pipe_1_1;
            }],
        execute: function() {
            JhiHealthCheckComponent = (function () {
                function JhiHealthCheckComponent($uibModal, jhiHealthService) {
                    this.jhiHealthService = jhiHealthService;
                    this.$uibModal = $uibModal;
                }
                JhiHealthCheckComponent.prototype.ngOnInit = function () {
                    this.refresh();
                };
                JhiHealthCheckComponent.prototype.baseName = function (name) {
                    return this.jhiHealthService.getBaseName(name);
                };
                JhiHealthCheckComponent.prototype.getLabelClass = function (statusState) {
                    if (statusState === 'UP') {
                        return 'label-success';
                    }
                    else {
                        return 'label-danger';
                    }
                };
                JhiHealthCheckComponent.prototype.refresh = function () {
                    var _this = this;
                    this.updatingHealth = true;
                    this.jhiHealthService.checkHealth().subscribe(function (health) {
                        _this.healthData = _this.jhiHealthService.transformHealthData(health);
                        _this.updatingHealth = false;
                    });
                };
                JhiHealthCheckComponent.prototype.showHealth = function (health) {
                    var vm = this;
                    this.$uibModal.open({
                        templateUrl: 'app/admin/health/health.modal.html',
                        controller: 'JhiHealthModalController',
                        controllerAs: 'vm',
                        size: 'lg',
                        resolve: {
                            currentHealth: function () {
                                return health;
                            },
                            baseName: function () {
                                return vm.baseName;
                            },
                            subSystemName: function () {
                                return vm.subSystemName;
                            }
                        }
                    });
                };
                JhiHealthCheckComponent.prototype.subSystemName = function (name) {
                    return this.jhiHealthService.getSubSystemName(name);
                };
                JhiHealthCheckComponent = __decorate([
                    core_1.Component({
                        selector: 'jhi-health',
                        templateUrl: 'app/admin/health/health.html',
                        pipes: [translate_pipe_1.TranslatePipe]
                    }),
                    __param(0, core_1.Inject('$uibModal')), 
                    __metadata('design:paramtypes', [Object, health_service_1.JhiHealthService])
                ], JhiHealthCheckComponent);
                return JhiHealthCheckComponent;
            }());
            exports_1("JhiHealthCheckComponent", JhiHealthCheckComponent);
        }
    }
});

//# sourceMappingURL=health.component.js.map

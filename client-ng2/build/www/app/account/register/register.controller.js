System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var RegisterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            RegisterComponent = (function () {
                function RegisterComponent($translate, auth, loginService, elementRef, renderer) {
                    this.$translate = $translate;
                    this.auth = auth;
                    this.loginService = loginService;
                    this.elementRef = elementRef;
                    this.renderer = renderer;
                }
                RegisterComponent.prototype.ngOnInit = function () {
                    this.login = this.loginService.open;
                    this.success = false;
                    this.registerAccount = {};
                };
                RegisterComponent.prototype.ngAfterViewInit = function () {
                    this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#login'), 'focus', []);
                };
                RegisterComponent.prototype.register = function () {
                    //TODO: remove this once Auth service is migrated
                    var vm = this;
                    if (this.registerAccount.password !== this.confirmPassword) {
                        this.doNotMatch = 'ERROR';
                    }
                    else {
                        this.registerAccount.langKey = this.$translate.use();
                        this.doNotMatch = null;
                        this.error = null;
                        this.errorUserExists = null;
                        this.errorEmailExists = null;
                        this.auth.createAccount(this.registerAccount).then(function () {
                            vm.success = true;
                        }).catch(function (response) {
                            vm.success = null;
                            if (response.status === 400 && response.data === 'login already in use') {
                                vm.errorUserExists = 'ERROR';
                            }
                            else if (response.status === 400 && response.data === 'e-mail address already in use') {
                                vm.errorEmailExists = 'ERROR';
                            }
                            else {
                                vm.error = 'ERROR';
                            }
                        });
                    }
                };
                RegisterComponent = __decorate([
                    core_1.Component({
                        selector: 'register',
                        templateUrl: 'app/account/register/register.html'
                    }),
                    __param(0, core_1.Inject('$translate')),
                    __param(1, core_1.Inject('Auth')),
                    __param(2, core_1.Inject('LoginService')), 
                    __metadata('design:paramtypes', [Object, Object, Object, core_1.ElementRef, core_1.Renderer])
                ], RegisterComponent);
                return RegisterComponent;
            }());
            exports_1("RegisterComponent", RegisterComponent);
        }
    }
});

//# sourceMappingURL=register.controller.js.map

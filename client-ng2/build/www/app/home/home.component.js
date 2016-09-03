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
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(principal, $state, loginService) {
                    this.principal = principal;
                    this.$state = $state;
                    this.login = loginService.open;
                }
                HomeComponent.prototype.ngOnInit = function () {
                    //TODO: Remove this line after migrating "Principal" service
                    this.principal.identity().then(function (account) {
                        this.account = account;
                        this.isAuthenticated = this.principal.isAuthenticated;
                    }.bind(this));
                };
                HomeComponent.prototype.register = function () {
                    this.$state.go('register');
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        templateUrl: 'app/home/home.html'
                    }),
                    __param(0, core_1.Inject('Principal')),
                    __param(1, core_1.Inject('$state')),
                    __param(2, core_1.Inject('LoginService')), 
                    __metadata('design:paramtypes', [Object, Object, Object])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});

//# sourceMappingURL=home.component.js.map

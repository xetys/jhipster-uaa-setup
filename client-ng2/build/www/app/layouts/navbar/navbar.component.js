System.register(['@angular/core', "../../components/profiles/profile.service", "../../components/language/language.pipe"], function(exports_1, context_1) {
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
    var core_1, profile_service_1, language_pipe_1;
    var NavbarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (profile_service_1_1) {
                profile_service_1 = profile_service_1_1;
            },
            function (language_pipe_1_1) {
                language_pipe_1 = language_pipe_1_1;
            }],
        execute: function() {
            NavbarComponent = (function () {
                function NavbarComponent(principal, $state, auth, languageService, loginService, profileService) {
                    this.principal = principal;
                    this.$state = $state;
                    this.auth = auth;
                    this.languageService = languageService;
                    this.loginService = loginService;
                    this.profileService = profileService;
                }
                NavbarComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    //TODO: Remove this once language service in migrated and use 'subscribe' instead of 'then'
                    var vm = this;
                    this.languageService.getAll().then(function (languages) {
                        vm.languages = languages;
                    });
                    this.changeLanguage = this.languageService.changeLanguage;
                    this.isAuthenticated = this.principal.isAuthenticated;
                    this.profileService.getProfileInfo().subscribe(function (profileInfo) {
                        _this.inProduction = profileInfo.inProduction;
                        _this.swaggerEnabled = profileInfo.swaggerEnabled;
                    });
                };
                NavbarComponent.prototype.collapseNavbar = function () {
                    this.isNavbarCollapsed = true;
                };
                NavbarComponent.prototype.login = function () {
                    this.collapseNavbar();
                    this.loginService.open();
                };
                NavbarComponent.prototype.logout = function () {
                    this.collapseNavbar();
                    this.auth.logout();
                    this.$state.go('home');
                };
                NavbarComponent.prototype.toggleNavbar = function () {
                    this.isNavbarCollapsed = !this.isNavbarCollapsed;
                };
                NavbarComponent = __decorate([
                    core_1.Component({
                        pipes: [language_pipe_1.FindLanguageFromKeyPipe],
                        selector: 'navbar',
                        templateUrl: 'app/layouts/navbar/navbar.html'
                    }),
                    __param(0, core_1.Inject('Principal')),
                    __param(1, core_1.Inject('$state')),
                    __param(2, core_1.Inject('Auth')),
                    __param(3, core_1.Inject('JhiLanguageService')),
                    __param(4, core_1.Inject('LoginService')), 
                    __metadata('design:paramtypes', [Object, Object, Object, Object, Object, profile_service_1.ProfileService])
                ], NavbarComponent);
                return NavbarComponent;
            }());
            exports_1("NavbarComponent", NavbarComponent);
        }
    }
});

//# sourceMappingURL=navbar.component.js.map

System.register(['@angular/core', './profile.service'], function(exports_1, context_1) {
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
    var core_1, profile_service_1;
    var PageRibbonComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (profile_service_1_1) {
                profile_service_1 = profile_service_1_1;
            }],
        execute: function() {
            PageRibbonComponent = (function () {
                function PageRibbonComponent(profileService) {
                    this.profileService = profileService;
                    this.cssClass = 'hidden';
                }
                PageRibbonComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.profileService.getProfileInfo().subscribe(function (profileInfo) {
                        _this.profileInfo = profileInfo;
                        _this.ribbonEnv = profileInfo.ribbonEnv;
                        _this.cssClass = profileInfo.ribbonEnv;
                    });
                };
                PageRibbonComponent = __decorate([
                    core_1.Component({
                        selector: 'page-ribbon',
                        template: '<div class="ribbon {{cssClass}}"><a href="" translate="global.ribbon.{{ribbonEnv}}">{{ribbonEnv}}</a></div>'
                    }), 
                    __metadata('design:paramtypes', [profile_service_1.ProfileService])
                ], PageRibbonComponent);
                return PageRibbonComponent;
            }());
            exports_1("PageRibbonComponent", PageRibbonComponent);
        }
    }
});

//# sourceMappingURL=page-ribbon.component.js.map

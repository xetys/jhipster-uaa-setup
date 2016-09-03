System.register(['@angular/core', '@angular/http', 'rxjs/add/operator/map', './profile-info'], function(exports_1, context_1) {
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
    var core_1, http_1, profile_info_1;
    var ProfileService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (profile_info_1_1) {
                profile_info_1 = profile_info_1_1;
            }],
        execute: function() {
            ProfileService = (function () {
                function ProfileService(http) {
                    this.http = http;
                    this.profileInfoUrl = 'api/profile-info';
                }
                ProfileService.prototype.getProfileInfo = function () {
                    return this.http.get(this.profileInfoUrl)
                        .map(function (res) {
                        var data = res.json();
                        var pi = new profile_info_1.ProfileInfo();
                        pi.activeProfiles = data.activeProfiles;
                        pi.ribbonEnv = data.ribbonEnv;
                        pi.inProduction = data.activeProfiles.indexOf("prod") !== -1;
                        pi.swaggerEnabled = data.activeProfiles.indexOf("swagger") !== -1;
                        return pi;
                    });
                };
                ProfileService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ProfileService);
                return ProfileService;
            }());
            exports_1("ProfileService", ProfileService);
        }
    }
});

//# sourceMappingURL=profile.service.js.map

System.register(["@angular/core", "@angular/common", "./audits.service", "../../components/util/parse-links.service"], function(exports_1, context_1) {
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
    var core_1, common_1, audits_service_1, parse_links_service_1;
    var AuditsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (audits_service_1_1) {
                audits_service_1 = audits_service_1_1;
            },
            function (parse_links_service_1_1) {
                parse_links_service_1 = parse_links_service_1_1;
            }],
        execute: function() {
            AuditsComponent = (function () {
                function AuditsComponent(auditsService, parseLinks) {
                    this.auditsService = auditsService;
                    this.parseLinks = parseLinks;
                    this.page = 1;
                    this.reverse = false;
                    this.orderProp = "timestamp";
                }
                AuditsComponent.prototype.getAudits = function () {
                    return this.sortAudits(this.audits);
                };
                AuditsComponent.prototype.loadPage = function (page) {
                    this.page = page;
                    this.onChangeDate();
                };
                AuditsComponent.prototype.ngOnInit = function () {
                    this.today();
                    this.previousMonth();
                    this.onChangeDate();
                };
                AuditsComponent.prototype.onChangeDate = function () {
                    var _this = this;
                    this.auditsService.query({ page: this.page - 1, size: 20, fromDate: this.fromDate, toDate: this.toDate }).subscribe(function (res) {
                        _this.audits = res.json();
                        _this.links = _this.parseLinks.parse(res.headers.get('link'));
                        console.log(_this.audits);
                        _this.totalItems = +res.headers.get('X-Total-Count');
                    });
                };
                AuditsComponent.prototype.previousMonth = function () {
                    var dateFormat = 'yyyy-MM-dd';
                    var fromDate = new Date();
                    if (fromDate.getMonth() === 0) {
                        fromDate = new Date(fromDate.getFullYear() - 1, 11, fromDate.getDate());
                    }
                    else {
                        fromDate = new Date(fromDate.getFullYear(), fromDate.getMonth() - 1, fromDate.getDate());
                    }
                    this.fromDate = new common_1.DatePipe().transform(fromDate, dateFormat);
                };
                AuditsComponent.prototype.today = function () {
                    var dateFormat = 'yyyy-MM-dd';
                    // Today + 1 day - needed if the current day must be included
                    var today = new Date();
                    var date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
                    this.toDate = new common_1.DatePipe().transform(date, dateFormat);
                };
                AuditsComponent.prototype.sortAudits = function (audits) {
                    var _this = this;
                    audits = audits.slice(0).sort(function (a, b) {
                        if (a[_this.orderProp] < b[_this.orderProp]) {
                            return -1;
                        }
                        else if ([b[_this.orderProp] < a[_this.orderProp]]) {
                            return 1;
                        }
                        else {
                            return 0;
                        }
                    });
                    if (this.reverse)
                        audits.reverse();
                    return audits;
                };
                AuditsComponent = __decorate([
                    core_1.Component({
                        selector: 'jhi-audit',
                        templateUrl: 'app/admin/audits/audits.component.html'
                    }), 
                    __metadata('design:paramtypes', [audits_service_1.AuditsService, parse_links_service_1.ParseLinks])
                ], AuditsComponent);
                return AuditsComponent;
            }());
            exports_1("AuditsComponent", AuditsComponent);
        }
    }
});

//# sourceMappingURL=audits.component.js.map

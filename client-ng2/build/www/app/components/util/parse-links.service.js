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
    var core_1;
    var ParseLinks;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ParseLinks = (function () {
                function ParseLinks() {
                }
                ParseLinks.prototype.parse = function (header) {
                    if (header.length === 0) {
                        throw new Error('input must not be of zero length');
                    }
                    // Split parts by comma
                    var parts = header.split(',');
                    var links = {};
                    // Parse each part into a named link
                    parts.forEach(function (p) {
                        var section = p.split(';');
                        if (section.length !== 2) {
                            throw new Error('section could not be split on ";"');
                        }
                        var url = section[0].replace(/<(.*)>/, '$1').trim();
                        var queryString = {};
                        url.replace(new RegExp('([^?=&]+)(=([^&]*))?', 'g'), function ($0, $1, $2, $3) { return queryString[$1] = $3; });
                        var page = queryString.page;
                        if (typeof page === "string") {
                            page = parseInt(page);
                        }
                        var name = section[1].replace(/rel="(.*)"/, '$1').trim();
                        links[name] = page;
                    });
                    return links;
                };
                ParseLinks = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ParseLinks);
                return ParseLinks;
            }());
            exports_1("ParseLinks", ParseLinks);
        }
    }
});

//# sourceMappingURL=parse-links.service.js.map

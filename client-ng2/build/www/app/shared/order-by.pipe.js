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
    var OrderByPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            OrderByPipe = (function () {
                function OrderByPipe() {
                }
                OrderByPipe.prototype.transform = function (value, predicate, reverse) {
                    value = value.slice(0).sort(function (a, b) {
                        if (a[predicate] < b[predicate]) {
                            return -1;
                        }
                        else if ([b[predicate] < a[predicate]]) {
                            return 1;
                        }
                        else {
                            return 0;
                        }
                    });
                    if (reverse)
                        value.reverse();
                    return value;
                };
                OrderByPipe = __decorate([
                    core_1.Pipe({
                        name: 'orderBy'
                    }), 
                    __metadata('design:paramtypes', [])
                ], OrderByPipe);
                return OrderByPipe;
            }());
            exports_1("OrderByPipe", OrderByPipe);
        }
    }
});

//# sourceMappingURL=order-by.pipe.js.map

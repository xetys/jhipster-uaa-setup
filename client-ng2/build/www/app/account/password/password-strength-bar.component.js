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
    var PasswordStrengthBarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PasswordStrengthBarComponent = (function () {
                function PasswordStrengthBarComponent(el) {
                    this.el = el;
                    this.strength = {
                        colors: ['#F00', '#F90', '#FF0', '#9F0', '#0F0'],
                        mesureStrength: function (p) {
                            var _force = 0;
                            var _regex = /[$-/:-?{-~!"^_`\[\]]/g; // "
                            var _lowerLetters = /[a-z]+/.test(p);
                            var _upperLetters = /[A-Z]+/.test(p);
                            var _numbers = /[0-9]+/.test(p);
                            var _symbols = _regex.test(p);
                            var _flags = [_lowerLetters, _upperLetters, _numbers, _symbols];
                            var _passedMatches = $.grep(_flags, function (el) {
                                return el === true;
                            }).length;
                            _force += 2 * p.length + ((p.length >= 10) ? 1 : 0);
                            _force += _passedMatches * 10;
                            // penality (short password)
                            _force = (p.length <= 6) ? Math.min(_force, 10) : _force;
                            // penality (poor variety of characters)
                            _force = (_passedMatches === 1) ? Math.min(_force, 10) : _force;
                            _force = (_passedMatches === 2) ? Math.min(_force, 20) : _force;
                            _force = (_passedMatches === 3) ? Math.min(_force, 40) : _force;
                            return _force;
                        },
                        getColor: function (s) {
                            var idx = 0;
                            if (s <= 10) {
                                idx = 0;
                            }
                            else if (s <= 20) {
                                idx = 1;
                            }
                            else if (s <= 30) {
                                idx = 2;
                            }
                            else if (s <= 40) {
                                idx = 3;
                            }
                            else {
                                idx = 4;
                            }
                            return { idx: idx + 1, col: this.colors[idx] };
                        }
                    };
                }
                Object.defineProperty(PasswordStrengthBarComponent.prototype, "passwordToCheck", {
                    set: function (password) {
                        if (password) {
                            var c = this.strength.getColor(this.strength.mesureStrength(password));
                            this.el.nativeElement.className = "";
                            var lis = this.el.nativeElement.getElementsByTagName("li");
                            for (var i = 0; i < lis.length; i++) {
                                if (i < c.idx) {
                                    lis[i].style.backgroundColor = c.col;
                                }
                                else {
                                    lis[i].style.backgroundColor = '#DDD';
                                }
                            }
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String), 
                    __metadata('design:paramtypes', [String])
                ], PasswordStrengthBarComponent.prototype, "passwordToCheck", null);
                PasswordStrengthBarComponent = __decorate([
                    core_1.Component({
                        selector: 'password-strength-bar',
                        template: '<div id="strength">' +
                            '<small translate="global.messages.validate.newpassword.strength">Password strength:</small>' +
                            '<ul id="strengthBar">' +
                            '<li class="point"></li><li class="point"></li><li class="point"></li><li class="point"></li><li class="point"></li>' +
                            '</ul>' +
                            '</div>'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], PasswordStrengthBarComponent);
                return PasswordStrengthBarComponent;
            }());
            exports_1("PasswordStrengthBarComponent", PasswordStrengthBarComponent);
        }
    }
});

//# sourceMappingURL=password-strength-bar.component.js.map

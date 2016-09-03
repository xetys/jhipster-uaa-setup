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
    var FindLanguageFromKeyPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FindLanguageFromKeyPipe = (function () {
                function FindLanguageFromKeyPipe() {
                }
                FindLanguageFromKeyPipe.prototype.transform = function (lang, args) {
                    return {
                        'ca': 'Català',
                        'cs': 'Český',
                        'da': 'Dansk',
                        'de': 'Deutsch',
                        'el': 'Ελληνικά',
                        'en': 'English',
                        'es': 'Español',
                        'fr': 'Français',
                        'gl': 'Galego',
                        'hu': 'Magyar',
                        'hi': 'हिंदी',
                        'it': 'Italiano',
                        'ja': '日本語',
                        'ko': '한국어',
                        'mr': 'मराठी',
                        'nl': 'Nederlands',
                        'pl': 'Polski',
                        'pt-br': 'Português (Brasil)',
                        'pt-pt': 'Português',
                        'ro': 'Română',
                        'ru': 'Русский',
                        'sk': 'Slovenský',
                        'sv': 'Svenska',
                        'ta': 'தமிழ்',
                        'tr': 'Türkçe',
                        'zh-cn': '中文（简体）',
                        'zh-tw': '繁體中文'
                    }[lang];
                };
                FindLanguageFromKeyPipe = __decorate([
                    core_1.Pipe({
                        name: 'findLanguageFromKey'
                    }), 
                    __metadata('design:paramtypes', [])
                ], FindLanguageFromKeyPipe);
                return FindLanguageFromKeyPipe;
            }());
            exports_1("FindLanguageFromKeyPipe", FindLanguageFromKeyPipe);
        }
    }
});

//# sourceMappingURL=language.pipe.js.map

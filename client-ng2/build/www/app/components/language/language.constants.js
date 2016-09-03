System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LANGUAGES;
    return {
        setters:[],
        execute: function() {
            /*
                Languages codes are ISO_639-1 codes, see http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
                They are written in English to avoid character encoding issues (not a perfect solution)
            */
            exports_1("LANGUAGES", LANGUAGES = []);
        }
    }
});

//# sourceMappingURL=language.constants.js.map

System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PaginationUtil;
    return {
        setters:[],
        execute: function() {
            PaginationUtil = (function () {
                function PaginationUtil() {
                }
                PaginationUtil.prototype.parseAscending = function (sort) {
                    var sortArray = sort.split(',');
                    if (sortArray.length > 1) {
                        return sort.split(',').slice(-1)[0] === 'asc';
                    }
                    else {
                        // default to true if no sort defined
                        return true;
                    }
                };
                // query params are strings, and need to be parsed
                PaginationUtil.prototype.parsePage = function (page) {
                    return parseInt(page);
                };
                // sort can be in the format `id,asc` or `id`
                PaginationUtil.prototype.parsePredicate = function (sort) {
                    var sortArray = sort.split(',');
                    if (sortArray.length > 1) {
                        sortArray.pop();
                    }
                    return sortArray.join(',');
                };
                return PaginationUtil;
            }());
            exports_1("PaginationUtil", PaginationUtil);
        }
    }
});

//# sourceMappingURL=pagination-util.service.js.map

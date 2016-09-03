System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DateUtils;
    return {
        setters:[],
        execute: function() {
            DateUtils = (function () {
                function DateUtils(datePipe) {
                    this.datePipe = datePipe;
                }
                DateUtils.prototype.convertDateTimeFromServer = function (date) {
                    if (date) {
                        return new Date(date);
                    }
                    else {
                        return null;
                    }
                };
                DateUtils.prototype.convertLocalDateFromServer = function (date) {
                    if (date) {
                        var dateString = date.split('-');
                        return new Date(dateString[0], dateString[1] - 1, dateString[2]);
                    }
                    return null;
                };
                DateUtils.prototype.convertLocalDateToServer = function (date) {
                    if (date) {
                        return this.datePipe.transform(date, 'yyyy-MM-dd');
                    }
                    else {
                        return null;
                    }
                };
                DateUtils.prototype.dateformat = function () {
                    return 'yyyy-MM-dd';
                };
                return DateUtils;
            }());
            exports_1("DateUtils", DateUtils);
        }
    }
});

//# sourceMappingURL=date-util.service.js.map

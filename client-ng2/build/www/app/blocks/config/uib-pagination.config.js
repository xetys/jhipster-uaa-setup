System.register(['../../components/form/pagination.constants'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var pagination_constants_1;
    function PaginationConfig(uibPaginationConfig) {
        uibPaginationConfig.itemsPerPage = pagination_constants_1.ITEMS_PER_PAGE;
        uibPaginationConfig.maxSize = 5;
        uibPaginationConfig.boundaryLinks = true;
        uibPaginationConfig.firstText = '«';
        uibPaginationConfig.previousText = '‹';
        uibPaginationConfig.nextText = '›';
        uibPaginationConfig.lastText = '»';
    }
    exports_1("PaginationConfig", PaginationConfig);
    return {
        setters:[
            function (pagination_constants_1_1) {
                pagination_constants_1 = pagination_constants_1_1;
            }],
        execute: function() {
            PaginationConfig.$inject = ['uibPaginationConfig'];
        }
    }
});

//# sourceMappingURL=uib-pagination.config.js.map

System.register(['../../components/form/pagination.constants'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var pagination_constants_1;
    function PagerConfig(uibPagerConfig) {
        uibPagerConfig.itemsPerPage = pagination_constants_1.ITEMS_PER_PAGE;
        uibPagerConfig.previousText = '«';
        uibPagerConfig.nextText = '»';
    }
    exports_1("PagerConfig", PagerConfig);
    return {
        setters:[
            function (pagination_constants_1_1) {
                pagination_constants_1 = pagination_constants_1_1;
            }],
        execute: function() {
            PagerConfig.$inject = ['uibPagerConfig'];
        }
    }
});

//# sourceMappingURL=uib-pager.config.js.map

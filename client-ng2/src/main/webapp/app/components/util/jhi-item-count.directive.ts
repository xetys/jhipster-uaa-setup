(function() {
    'use strict';

    let jhiItemCount: any = {
        template: '<div class="info">' +
                    'Showing {{(($ctrl.page - 1) * $ctrl.itemsPerPage) == 0 ? 1 : (($ctrl.page - 1) * $ctrl.itemsPerPage + 1)}} - ' +
                    '{{($ctrl.page * $ctrl.itemsPerPage) < $ctrl.queryCount ? ($ctrl.page * $ctrl.itemsPerPage) : $ctrl.queryCount}} ' +
                    'of {{$ctrl.queryCount}} items.' +
                '</div>',
        bindings: {
            page: '<',
            queryCount: '<total',
            itemsPerPage: '<'
        }
    };

    angular
        .module('uaaSetupApp.common')
        .component('jhiItemCount', jhiItemCount);
})();
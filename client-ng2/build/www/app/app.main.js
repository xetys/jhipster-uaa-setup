System.register(['./upgrade_adapter', '@angular/http', '@angular/forms', './app.module'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var upgrade_adapter_1, http_1, forms_1;
    return {
        setters:[
            function (upgrade_adapter_1_1) {
                upgrade_adapter_1 = upgrade_adapter_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (_1) {}],
        execute: function() {
            upgrade_adapter_1.upgradeAdapter.addProvider(http_1.HTTP_PROVIDERS);
            upgrade_adapter_1.upgradeAdapter.addProvider(forms_1.disableDeprecatedForms());
            upgrade_adapter_1.upgradeAdapter.addProvider(forms_1.provideForms());
            upgrade_adapter_1.upgradeAdapter.addProvider({
                provide: http_1.XSRFStrategy, useValue: new http_1.CookieXSRFStrategy('CSRF-TOKEN', 'X-CSRF-TOKEN')
            });
            upgrade_adapter_1.upgradeAdapter.bootstrap(document.body, ['uaaSetupApp.app'], { strictDi: true });
        }
    }
});

//# sourceMappingURL=app.main.js.map

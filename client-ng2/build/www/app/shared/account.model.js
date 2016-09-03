System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Account;
    return {
        setters:[],
        execute: function() {
            Account = (function () {
                function Account(activated, authorities, email, firstName, langKey, lastName, login) {
                    this.activated = activated;
                    this.authorities = authorities;
                    this.email = email;
                    this.firstName = firstName;
                    this.langKey = langKey;
                    this.lastName = lastName;
                    this.login = login;
                }
                return Account;
            }());
            exports_1("Account", Account);
        }
    }
});

//# sourceMappingURL=account.model.js.map

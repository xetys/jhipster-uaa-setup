import { Injectable, Inject } from '@angular/core';

import { JhiLanguageService } from '../language/language.service';
import { Principal } from '../auth/principal.service';
import { AuthServerProvider } from '../auth/auth-jwt.service';

@Injectable()
export class LoginService {

    constructor (
        private languageService: JhiLanguageService,
        private principal: Principal,
        private authServerProvider: AuthServerProvider
    ) {}

    login (credentials, callback?) {
        var cb = callback || function(){};

        return new Promise((resolve, reject) => {
            this.authServerProvider.login(credentials).subscribe(data => {
                this.principal.identity(true).then(account => {
                    // After the login the language will be changed to
                    // the language selected by the user during his registration
                    if (account!== null) {
                        this.languageService.changeLanguage(account.langKey);
                    }
                    resolve(data);
                });
                return cb();
            }, err => {
                this.logout();
                reject(err);
                return cb(err);
            });
        });
    }


    logout () {
        this.authServerProvider.logout().subscribe();
        this.principal.authenticate(null);
    }
}

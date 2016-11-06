import { Component, OnInit, Inject } from '@angular/core';
import { StateService } from "ui-router-ng2";
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { ProfileService } from '../profiles/profile.service'; //barrel doesnt work here
import { JhiLanguageService, Principal, LoginModalService, LoginService } from '../../shared';

@Component({
    selector: 'navbar',
    templateUrl: 'app/layouts/navbar/navbar.html'
})
export class NavbarComponent implements OnInit {

    inProduction: boolean;
    isNavbarCollapsed: boolean;
    languages: any[];
    swaggerEnabled: boolean;
    modalRef: NgbModalRef;

    constructor(
        private $state: StateService,
        private loginService : LoginService,
        private languageService: JhiLanguageService,
        private principal: Principal,
        private loginModalService: LoginModalService,
        private profileService: ProfileService
    ) { }

    ngOnInit() {
        this.languageService.getAll().then((languages) => {
            this.languages = languages;
        });

        this.profileService.getProfileInfo().subscribe(profileInfo => {
            this.inProduction = profileInfo.inProduction;
            this.swaggerEnabled = profileInfo.swaggerEnabled;
        });
    }

    changeLanguage(languageKey: string) {
      this.languageService.changeLanguage(languageKey);
    }

    collapseNavbar() {
        this.isNavbarCollapsed = true;
    }

    isAuthenticated() {
        return this.principal.isAuthenticated();
    }

    login() {
        this.modalRef = this.loginModalService.open();
    }

    logout() {
        this.collapseNavbar();
        this.loginService.logout();
        this.$state.go('home');
    }

    toggleNavbar() {
        this.isNavbarCollapsed = !this.isNavbarCollapsed;
    }
}

import { Component, OnInit, Inject, Renderer, ElementRef } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { Register } from './register.service';
import { LoginModalService, JhiLanguageService } from "../../shared";

@Component({
    selector: 'jhi-register',
    templateUrl: 'app/account/register/register.html'
})
export class RegisterComponent implements OnInit {

    confirmPassword: string;
    doNotMatch: string;
    error: string;
    errorEmailExists: string;
    errorUserExists: string;
    registerAccount: any;
    success: boolean;
    modalRef: NgbModalRef;

    constructor(
        private languageService: JhiLanguageService,
        private loginModalService : LoginModalService,
        private registerService: Register,
        private elementRef: ElementRef,
        private renderer: Renderer) {
    }

    ngOnInit() {
        this.success = false;
        this.registerAccount = {};
    }

    ngAfterViewInit() {
        this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#login'), 'focus', []);
    }

    register() {
        if (this.registerAccount.password !== this.confirmPassword) {
            this.doNotMatch = 'ERROR';
        } else {
            this.registerAccount.langKey = this.languageService.getCurrent();
            this.doNotMatch = null;
            this.error = null;
            this.errorUserExists = null;
            this.errorEmailExists = null;

            this.registerService.save(this.registerAccount).subscribe(() => {
                this.success = true;
            }, (response) => {
                //TODO handle this.logout(); on error
                this.success = null;
                if (response.status === 400 && response.data === 'login already in use') {
                    this.errorUserExists = 'ERROR';
                } else if (response.status === 400 && response.data === 'e-mail address already in use') {
                    this.errorEmailExists = 'ERROR';
                } else {
                    this.error = 'ERROR';
                }
            });
        }
    }

    openLogin() {
        this.modalRef = this.loginModalService.open();
    }
}

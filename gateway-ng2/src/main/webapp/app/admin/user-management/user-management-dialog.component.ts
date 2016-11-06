import { Component, OnInit, Inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { User } from './user.model';
import { UserService } from './user.service';
import { JhiLanguageService } from '../../shared';

@Component({
    selector: 'user-mgmt-dialog',
    templateUrl: 'app/admin/user-management/user-management-dialog.html'
})
export class UserMgmtDialogComponent implements OnInit {

    user: User;
    languages: any[];
    authorities: any[];
    isSaving: Boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private languageService: JhiLanguageService,
        private userService: UserService
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
        this.languageService.getAll().then((languages) => {
            this.languages = languages;
        });
    }

    clear () {
        this.activeModal.dismiss('cancel');
    }

    save () {
        this.isSaving = true;
        if (this.user.id !== null) {
            this.userService.update(this.user).subscribe(response => this.onSaveSuccess(response), () => this.onSaveError());
        } else {
            this.userService.create(this.user).subscribe(response => this.onSaveSuccess(response), () => this.onSaveError());
        }
    }
    private onSaveSuccess (result) {
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError () {
        this.isSaving = false;
    }

}

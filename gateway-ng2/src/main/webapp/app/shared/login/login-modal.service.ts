import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { JhiLoginModalComponent } from './login.component';

@Injectable()
export class LoginModalService {

    constructor (
        private modalService: NgbModal,
    ) {}

    open (): NgbModalRef {
        let modalRef = this.modalService.open(JhiLoginModalComponent);
        modalRef.result.then(result => {
            console.log(`Closed with: ${result}`);
        }, (reason) => {
            console.log(`Dismissed ${reason}`);
        });
        return modalRef;
    }
}

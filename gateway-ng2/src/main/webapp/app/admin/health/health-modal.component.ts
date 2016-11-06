import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiHealthService } from './health.service';

@Component({
    selector: 'jhi-health-modal',
    templateUrl: 'app/admin/health/health-modal.html'
})
export class JhiHealthModalComponent {

    currentHealth: any;

    constructor(private healthService:JhiHealthService, public activeModal: NgbActiveModal) {}

    baseName(name) {
        return this.healthService.getBaseName(name);
    }

    subSystemName(name) {
        return this.healthService.getSubSystemName(name);
    }

}

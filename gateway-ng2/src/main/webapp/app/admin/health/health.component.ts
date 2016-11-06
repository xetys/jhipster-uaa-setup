import { Component, Inject, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiHealthService } from './health.service';
import { JhiHealthModalComponent } from './health-modal.component';

@Component({
    selector: 'jhi-health',
    templateUrl: 'app/admin/health/health.html',
})
export class JhiHealthCheckComponent implements OnInit {
    healthData:any;
    updatingHealth:boolean;

    constructor(private modalService: NgbModal, private healthService:JhiHealthService) {}

    ngOnInit() {
        this.refresh();
    }

    baseName(name: string) {
        return this.healthService.getBaseName(name);
    }

    getLabelClass(statusState) {
        if (statusState === 'UP') {
            return 'label-success';
        } else {
            return 'label-danger';
        }
    }

    refresh() {
        this.updatingHealth = true;

        this.healthService.checkHealth().subscribe(health => {
            this.healthData = this.healthService.transformHealthData(health);
            this.updatingHealth = false;
        });
    }

    showHealth(health: any) {
        const modalRef  = this.modalService.open(JhiHealthModalComponent);
        modalRef.componentInstance.currentHealth = health;
        modalRef.result.then((result) => {
            console.log(`Closed with: ${result}`);
        }, (reason) => {
            console.log(`Dismissed ${reason}`);
        });
    }

    subSystemName(name: string) {
        return this.healthService.getSubSystemName(name);
    }

}

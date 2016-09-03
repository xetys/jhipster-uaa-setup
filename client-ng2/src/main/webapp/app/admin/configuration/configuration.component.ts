import { Component, OnInit } from "@angular/core";

import { JhiConfigurationService } from "./configuration.service";
import { FilterPipe } from "../../shared/filter.pipe";
import { OrderByPipe } from "../../shared/order-by.pipe";


@Component({
    selector: 'jhi-configuration',
    templateUrl: 'app/admin/configuration/configuration.html',
    pipes: [FilterPipe, OrderByPipe],
    providers: [ JhiConfigurationService ]
})
export class JhiConfigurationComponent {
    allConfiguration:any = null;
    configuration:any = null;
    configKeys:any[];
    filter: string;
    orderProp: string;
    reverse: boolean;

    constructor(private jhiConfigurationService:JhiConfigurationService){
        this.configKeys = [];
        this.filter = '';
        this.orderProp = 'prefix';
        this.reverse = false;
    }


    keys(dict) : Array<string> {
        return Object.keys(dict);
    }

    ngOnInit() {
        this.jhiConfigurationService.get().subscribe((configuration) => {
            this.configuration = configuration;

            for(var config of configuration) {
                this.configKeys.push(Object.keys(config.properties));
            }
        });

        this.jhiConfigurationService.getEnv().subscribe((configuration) => {
            this.allConfiguration = configuration;
        });
    }
}

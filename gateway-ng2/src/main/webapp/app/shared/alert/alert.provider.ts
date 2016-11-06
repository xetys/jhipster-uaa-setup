import { Sanitizer } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';

import { AlertService } from './alert.service';

export function alertServiceProvider(toast?: boolean) {
    // set below to true to make alerts look like toast
    let isToast = toast ? toast : false;
    return {
        provide: AlertService,
        useFactory: (sanitizer: Sanitizer, translateService: TranslateService) => new AlertService(sanitizer, translateService, isToast),
        deps: [Sanitizer, TranslateService]
    }
}

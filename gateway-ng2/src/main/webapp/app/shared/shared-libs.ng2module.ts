import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { createTranslatePartialLoader } from './language/translate-partial-loader.provider';

@NgModule({
    imports: [
        TranslateModule.forRoot(createTranslatePartialLoader()),
        NgbModule.forRoot()

    ],
    exports: [
        FormsModule,
        HttpModule,
        CommonModule,
        TranslateModule,
        NgbModule
    ]
})
export class Angular2UaaGatewaySharedLibsModule {
    /*static forRoot(): ModuleWithProviders {
        return {
            ngModule: Angular2TestSharedLibsModule,
            providers: [TranslateService],
        };
    }*/
}

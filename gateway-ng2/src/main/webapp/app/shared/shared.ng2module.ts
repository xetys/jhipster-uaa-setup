import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {
    Angular2UaaGatewaySharedLibsModule,
    Angular2UaaGatewaySharedCommonModule,
    CSRFService,
    AuthService,
    AuthServerProvider,
    AccountService,
    StateStorageService,
    LoginService,
    LoginModalService,
    Principal,
    HasAuthorityDirective,
    HasAnyAuthorityDirective,
    JhiLoginModalComponent
} from './';

@NgModule({
    imports: [
        Angular2UaaGatewaySharedLibsModule,
        Angular2UaaGatewaySharedCommonModule
    ],
    declarations: [
        JhiLoginModalComponent,
        HasAuthorityDirective,
        HasAnyAuthorityDirective
    ],
    providers: [
        LoginService,
        LoginModalService,
        AccountService,
        StateStorageService,
        Principal,
        CSRFService,
        AuthServerProvider,
        AuthService
    ],
    entryComponents: [JhiLoginModalComponent],
    exports: [
        Angular2UaaGatewaySharedCommonModule,
        JhiLoginModalComponent,
        HasAuthorityDirective,
        HasAnyAuthorityDirective
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class Angular2UaaGatewaySharedModule {}

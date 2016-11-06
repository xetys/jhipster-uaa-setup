import { AuthInterceptor } from './blocks/interceptor/auth.interceptor';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http, Request, RequestOptionsArgs, RequestOptions, XHRBackend } from '@angular/http';
import { UIRouterModule } from 'ui-router-ng2';
import { Ng1ToNg2Module } from 'ui-router-ng1-to-ng2';
import { Ng2Webstorage, LocalStorageService, SessionStorageService } from 'ng2-webstorage';

import { Angular2UaaGatewaySharedModule } from './shared';
import { Angular2UaaGatewayAdminModule } from './admin/admin.ng2module'; //TODO these couldnt be used from barrels due to an error
import { Angular2UaaGatewayAccountModule } from './account/account.ng2module';

import { appState } from './app.state';
import { HomeComponent, homeState } from './home';
import {
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent,
    errorState,
    accessdeniedState
} from './layouts';
import { localStorageConfig } from './blocks/config/localstorage.config';
import { HttpInterceptor } from './blocks/interceptor/http.interceptor';


localStorageConfig();

let routerConfig = {
    otherwise: '/',
    states: [
        appState,
        homeState,
        errorState,
        accessdeniedState
    ]
};

@NgModule({
    imports: [
        BrowserModule,
        Ng2Webstorage,
        Ng1ToNg2Module,
        UIRouterModule.forChild(routerConfig),
        Angular2UaaGatewaySharedModule,
        Angular2UaaGatewayAdminModule,
        Angular2UaaGatewayAccountModule
    ],
    declarations: [
        HomeComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent,
        ActiveMenuDirective
    ],
    providers: [
        ProfileService,
        { provide: Window, useValue: window },
        { provide: Document, useValue: document },
        {
            provide: Http,
            useFactory: (
                backend: XHRBackend,
                defaultOptions: RequestOptions,
                localStorage : LocalStorageService,
                sessionStorage : SessionStorageService
            ) => new HttpInterceptor(
                backend,
                defaultOptions,
                [
                    new AuthInterceptor(localStorage, sessionStorage)
                    //other intecetpors can be added here
                ]
            ),
            deps: [
                XHRBackend,
                RequestOptions,
                LocalStorageService,
                SessionStorageService
            ]
        }
    ],
    bootstrap: [ HomeComponent ]
})
export class Angular2UaaGatewayAppModule {}

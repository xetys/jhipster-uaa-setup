import './components/common.module';
import './account/account.module';
import './admin/admin.module';
import './entities/entity.module';

import { upgradeAdapter } from "./upgrade_adapter";

import { StateHandler } from './blocks/handlers/state.handler';
import { TranslationHandler } from './blocks/handlers/translation.handler';

import { TranslationConfig } from './blocks/config/translation.config';
import { TranslationStorageProvider } from './blocks/config/translation-storage.provider';

import { CompileServiceConfig } from './blocks/config/compile.config';
import { HttpConfig } from './blocks/config/http.config';
import { LocalStorageConfig } from './blocks/config/localstorage.config';
import { PagerConfig } from './blocks/config/uib-pager.config';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';

import { AuthExpiredInterceptor } from './blocks/interceptor/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './blocks/interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from './blocks/interceptor/notification.interceptor';

import { AppStateConfig } from './app.state';
import { HomeStateConfig } from './home/home.state';
import { ErrorStateConfig } from './layouts/error/error.state';

angular
    .module('uaaSetupApp.app', [
        'ngStorage', 
        'tmh.dynamicLocale',
        'pascalprecht.translate', 
        'ngResource',
        'ngCookies',
        'ngAria',
        'ngCacheBuster',
        'ngFileUpload',
        'ui.bootstrap',
        'ui.bootstrap.datetimepicker',
        'ui.router',
        'infinite-scroll',
        'angular-loading-bar',
        // jhipster-needle-angularjs-add-module JHipster will add new module here
        'uaaSetupApp.common',
        'uaaSetupApp.account',
        'uaaSetupApp.admin',
        'uaaSetupApp.entity'
    ])
    .config(CompileServiceConfig)
    .config(HttpConfig)
    .config(LocalStorageConfig)
    .config(PagerConfig)
    .config(PaginationConfig)
    .config(AppStateConfig)
    .config(HomeStateConfig)
    .config(ErrorStateConfig)
    .directive('home', <angular.IDirectiveFactory> upgradeAdapter.downgradeNg2Component(HomeComponent))
    .directive('navbar', <angular.IDirectiveFactory> upgradeAdapter.downgradeNg2Component(NavbarComponent))
    .factory('AuthExpiredInterceptor', AuthExpiredInterceptor)
    .factory('ErrorHandlerInterceptor', ErrorHandlerInterceptor)
    .factory('NotificationInterceptor', NotificationInterceptor)
    .factory('StateHandler',StateHandler)
    .factory('TranslationStorageProvider', TranslationStorageProvider)
    .config(TranslationConfig)
    .factory('TranslationHandler',TranslationHandler)
    .run(run);

run.$inject = ['StateHandler', 'TranslationHandler'];

function run(StateHandler, TranslationHandler) {
    StateHandler.initialize();
    TranslationHandler.initialize();
}

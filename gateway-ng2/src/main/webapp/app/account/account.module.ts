import * as angular from 'angular';

import { upgradeAdapter } from '../upgrade_adapter';

import {
    Register,
    Activate,
    Password,
    PasswordResetInit,
    PasswordResetFinish,
    PasswordStrengthBarComponent,
    RegisterComponent,
    ActivateComponent,
    PasswordComponent,
    PasswordResetInitComponent,
    PasswordResetFinishComponent,
    SettingsComponent
} from './';

angular
    .module('angular2UaaGatewayApp.account', [
        'tmh.dynamicLocale',
        'ngResource',
        'ui.bootstrap',
        'ui.router'
    ])
    .directive('passwordStrengthBar', <angular.IDirectiveFactory> upgradeAdapter.downgradeNg2Component(PasswordStrengthBarComponent))
    .directive('jhiRegister', <angular.IDirectiveFactory> upgradeAdapter.downgradeNg2Component(RegisterComponent))
    .directive('activate', <angular.IDirectiveFactory> upgradeAdapter.downgradeNg2Component(ActivateComponent))
    .directive('password', <angular.IDirectiveFactory> upgradeAdapter.downgradeNg2Component(PasswordComponent))
    .directive('passwordResetInit', <angular.IDirectiveFactory> upgradeAdapter.downgradeNg2Component(PasswordResetInitComponent))
    .directive('passwordResetFinish', <angular.IDirectiveFactory> upgradeAdapter.downgradeNg2Component(PasswordResetFinishComponent))
    .directive('settings', <angular.IDirectiveFactory> upgradeAdapter.downgradeNg2Component(SettingsComponent));

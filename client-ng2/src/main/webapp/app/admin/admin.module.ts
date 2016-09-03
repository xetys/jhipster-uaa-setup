import { AdminStateConfig } from './admin.state';
import { AuditStateConfig } from './audits/audits.state';
import { ConfigStateConfig } from './configuration/configuration.state';
import { DocsStateConfig } from './docs/docs.state';
import { HealthStateConfig } from './health/health.state';
import { LogsStateConfig } from './logs/logs.state';
import { MetricsStateConfig } from './metrics/metrics.state';
import { UserMgmntStateConfig } from './user-management/user-management.state';

import { AuditsComponent } from "./audits/audits.component";
import { LogsComponent } from './logs/logs.component';

import { JhiMetricsMonitoringModalController } from "./metrics/metrics-modal.controller";
import { JhiMetricsMonitoringController } from "./metrics/metrics.controller";
import { JhiHealthModalController } from "./health/health-modal.controller";

import { JhiHealthCheckComponent } from './health/health.component';
import { JhiConfigurationComponent } from './configuration/configuration.component';

import { AuditsService } from './audits/audits.service';
import { JhiHealthService } from './health/health.service';
import { LogsService } from './logs/logs.service';
import { ParseLinks } from "../components/util/parse-links.service";

import { upgradeAdapter } from '../upgrade_adapter';

upgradeAdapter.addProvider(AuditsService);
upgradeAdapter.addProvider(JhiHealthService);
upgradeAdapter.addProvider(LogsService);
upgradeAdapter.addProvider(ParseLinks);

upgradeAdapter.upgradeNg1Provider('$uibModal');

angular
    .module('uaaSetupApp.admin', [
        'ngStorage', 
        'tmh.dynamicLocale',
        'pascalprecht.translate', 
        'ngResource',
        'ui.bootstrap',
        'ui.router'
    ])
    .config(AdminStateConfig)
    .config(AuditStateConfig)
    .config(ConfigStateConfig)
    .config(DocsStateConfig)
    .config(HealthStateConfig)
    .config(LogsStateConfig)
    .config(MetricsStateConfig)
    .config(UserMgmntStateConfig)
    .controller('JhiMetricsMonitoringController', JhiMetricsMonitoringController)
    .controller('JhiMetricsMonitoringModalController', JhiMetricsMonitoringModalController)
    .controller('JhiHealthModalController', JhiHealthModalController)
    .directive('jhiAudit', <angular.IDirectiveFactory> upgradeAdapter.downgradeNg2Component(AuditsComponent))
    .directive('jhiConfiguration', <angular.IDirectiveFactory> upgradeAdapter.downgradeNg2Component(JhiConfigurationComponent))
    .directive('jhiHealth', <angular.IDirectiveFactory> upgradeAdapter.downgradeNg2Component(JhiHealthCheckComponent))
    .directive('jhiLogs', <angular.IDirectiveFactory> upgradeAdapter.downgradeNg2Component(LogsComponent))
    .factory('JhiHealthService', upgradeAdapter.downgradeNg2Provider(JhiHealthService));

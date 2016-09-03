System.register(['./admin.state', './audits/audits.state', './configuration/configuration.state', './docs/docs.state', './health/health.state', './logs/logs.state', './metrics/metrics.state', './user-management/user-management.state', "./audits/audits.component", './logs/logs.component', "./metrics/metrics-modal.controller", "./metrics/metrics.controller", "./health/health-modal.controller", './health/health.component', './configuration/configuration.component', './audits/audits.service', './health/health.service', './logs/logs.service', "../components/util/parse-links.service", '../upgrade_adapter'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var admin_state_1, audits_state_1, configuration_state_1, docs_state_1, health_state_1, logs_state_1, metrics_state_1, user_management_state_1, audits_component_1, logs_component_1, metrics_modal_controller_1, metrics_controller_1, health_modal_controller_1, health_component_1, configuration_component_1, audits_service_1, health_service_1, logs_service_1, parse_links_service_1, upgrade_adapter_1;
    return {
        setters:[
            function (admin_state_1_1) {
                admin_state_1 = admin_state_1_1;
            },
            function (audits_state_1_1) {
                audits_state_1 = audits_state_1_1;
            },
            function (configuration_state_1_1) {
                configuration_state_1 = configuration_state_1_1;
            },
            function (docs_state_1_1) {
                docs_state_1 = docs_state_1_1;
            },
            function (health_state_1_1) {
                health_state_1 = health_state_1_1;
            },
            function (logs_state_1_1) {
                logs_state_1 = logs_state_1_1;
            },
            function (metrics_state_1_1) {
                metrics_state_1 = metrics_state_1_1;
            },
            function (user_management_state_1_1) {
                user_management_state_1 = user_management_state_1_1;
            },
            function (audits_component_1_1) {
                audits_component_1 = audits_component_1_1;
            },
            function (logs_component_1_1) {
                logs_component_1 = logs_component_1_1;
            },
            function (metrics_modal_controller_1_1) {
                metrics_modal_controller_1 = metrics_modal_controller_1_1;
            },
            function (metrics_controller_1_1) {
                metrics_controller_1 = metrics_controller_1_1;
            },
            function (health_modal_controller_1_1) {
                health_modal_controller_1 = health_modal_controller_1_1;
            },
            function (health_component_1_1) {
                health_component_1 = health_component_1_1;
            },
            function (configuration_component_1_1) {
                configuration_component_1 = configuration_component_1_1;
            },
            function (audits_service_1_1) {
                audits_service_1 = audits_service_1_1;
            },
            function (health_service_1_1) {
                health_service_1 = health_service_1_1;
            },
            function (logs_service_1_1) {
                logs_service_1 = logs_service_1_1;
            },
            function (parse_links_service_1_1) {
                parse_links_service_1 = parse_links_service_1_1;
            },
            function (upgrade_adapter_1_1) {
                upgrade_adapter_1 = upgrade_adapter_1_1;
            }],
        execute: function() {
            upgrade_adapter_1.upgradeAdapter.addProvider(audits_service_1.AuditsService);
            upgrade_adapter_1.upgradeAdapter.addProvider(health_service_1.JhiHealthService);
            upgrade_adapter_1.upgradeAdapter.addProvider(logs_service_1.LogsService);
            upgrade_adapter_1.upgradeAdapter.addProvider(parse_links_service_1.ParseLinks);
            upgrade_adapter_1.upgradeAdapter.upgradeNg1Provider('$uibModal');
            angular
                .module('uaaSetupApp.admin', [
                'ngStorage',
                'tmh.dynamicLocale',
                'pascalprecht.translate',
                'ngResource',
                'ui.bootstrap',
                'ui.router'
            ])
                .config(admin_state_1.AdminStateConfig)
                .config(audits_state_1.AuditStateConfig)
                .config(configuration_state_1.ConfigStateConfig)
                .config(docs_state_1.DocsStateConfig)
                .config(health_state_1.HealthStateConfig)
                .config(logs_state_1.LogsStateConfig)
                .config(metrics_state_1.MetricsStateConfig)
                .config(user_management_state_1.UserMgmntStateConfig)
                .controller('JhiMetricsMonitoringController', metrics_controller_1.JhiMetricsMonitoringController)
                .controller('JhiMetricsMonitoringModalController', metrics_modal_controller_1.JhiMetricsMonitoringModalController)
                .controller('JhiHealthModalController', health_modal_controller_1.JhiHealthModalController)
                .directive('jhiAudit', upgrade_adapter_1.upgradeAdapter.downgradeNg2Component(audits_component_1.AuditsComponent))
                .directive('jhiConfiguration', upgrade_adapter_1.upgradeAdapter.downgradeNg2Component(configuration_component_1.JhiConfigurationComponent))
                .directive('jhiHealth', upgrade_adapter_1.upgradeAdapter.downgradeNg2Component(health_component_1.JhiHealthCheckComponent))
                .directive('jhiLogs', upgrade_adapter_1.upgradeAdapter.downgradeNg2Component(logs_component_1.LogsComponent))
                .factory('JhiHealthService', upgrade_adapter_1.upgradeAdapter.downgradeNg2Provider(health_service_1.JhiHealthService));
        }
    }
});

//# sourceMappingURL=admin.module.js.map

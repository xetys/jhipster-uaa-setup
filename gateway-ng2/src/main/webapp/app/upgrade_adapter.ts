import { UpgradeAdapter } from '@angular/upgrade';
import { uiRouterNgUpgrade } from 'ui-router-ng1-to-ng2';
import { forwardRef } from '@angular/core';
import { Angular2UaaGatewayAppModule } from './app.ng2module';

export var upgradeAdapter: UpgradeAdapter = new UpgradeAdapter(forwardRef(() => Angular2UaaGatewayAppModule));
uiRouterNgUpgrade.setUpgradeAdapter(upgradeAdapter);
upgradeAdapter.upgradeNg1Provider('$stateParams');
upgradeAdapter.upgradeNg1Provider('$uibModal');
upgradeAdapter.upgradeNg1Provider('$state');
upgradeAdapter.upgradeNg1Provider('$rootScope');
upgradeAdapter.upgradeNg1Provider('tmhDynamicLocale');

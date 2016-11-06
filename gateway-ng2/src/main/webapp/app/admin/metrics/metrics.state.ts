import { JhiMetricsMonitoringComponent } from './metrics.component';
import { JhiLanguageService } from '../../shared';

export const metricsState = {
    name: 'jhi-metrics',
    parent: 'admin',
    url: '/metrics',
    data: {
        authorities: ['ROLE_ADMIN'],
        pageTitle: 'metrics.title'
    },
    views: {
        'content@': { component: JhiMetricsMonitoringComponent }
    },
    resolve: [{
        token: 'translate',
        deps: [JhiLanguageService],
        resolveFn: (languageService) => languageService.setLocations(['metrics'])
    }]
}

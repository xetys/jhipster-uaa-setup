import { JhiHealthCheckComponent } from './health.component';
import { JhiLanguageService } from '../../shared';

export const healthState = {
    name: 'jhi-health',
    parent: 'admin',
    url: '/health',
    data: {
        authorities: ['ROLE_ADMIN'],
        pageTitle: 'health.title'
    },
    views: {
        'content@': { component: JhiHealthCheckComponent }
    },
    resolve: [{
        token: 'translate',
        deps: [JhiLanguageService],
        resolveFn: (languageService) => languageService.setLocations(['health'])
    }]
}

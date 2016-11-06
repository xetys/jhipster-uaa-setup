import { JhiGatewayComponent } from './gateway.component';
import { JhiLanguageService } from '../../shared';

export const gatewayState = {
    name: 'gateway',
    parent: 'admin',
    url: '/gateway',
    data: {
        authorities: ['ROLE_ADMIN'],
        pageTitle: 'gateway.title'
    },
    views: {
        'content@': { component: JhiGatewayComponent }
    },
    resolve: [{
        token: 'translate',
        deps: [JhiLanguageService],
        resolveFn: (languageService) => languageService.setLocations(['gateway'])
    }]
}

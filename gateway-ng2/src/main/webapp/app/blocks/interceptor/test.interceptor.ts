import { Response, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpInterceptable } from './http.interceptable';

export class TestInterceptor extends HttpInterceptable {
    
    requestIntercept(options? : RequestOptionsArgs) : RequestOptionsArgs {
        console.log('1: intercepting request', options);

        return options;
    }

    responseIntercept(observable : Observable<Response>) : Observable<Response> {
        console.log('1: intercepting response', observable);

        return observable;
    }

}
export class TestInterceptor2 extends HttpInterceptable {
    
    requestIntercept(options? : RequestOptionsArgs) : RequestOptionsArgs {
        console.log('2: intercepting request', options);

        return options;
    }

    responseIntercept(observable : Observable<Response>) : Observable<Response> {
        console.log('2: intercepting response', observable);

        return observable;
    }

}
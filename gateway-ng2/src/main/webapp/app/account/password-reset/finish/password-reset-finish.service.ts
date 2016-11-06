import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class PasswordResetFinish {

    constructor (private http: Http) {}

    save(keyAndPassword: any): Observable<any> {
        return this.http.post('uaa/api/account/reset_password/finish', keyAndPassword);
    }
}

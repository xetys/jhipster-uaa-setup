import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class PasswordResetInit {

    constructor (private http: Http) {}

    save(mail: string): Observable<any> {
        return this.http.post('uaa/api/account/reset_password/init', mail);
    }
}

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { UserRegistration } from '../models/user.registration.interface';
import { ConfigService } from '../utils/config.service';

import { BaseService } from "./base.service";

import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/Rx';
import 'rxjs/Rx';
import { Router } from '@angular/router';

//import * as _ from 'lodash';
// Add the RxJS Observable operators we need in this app.
//import '../../rxjs-operators';

@Injectable()
export class UserService extends BaseService {

    baseUrl: string = '';
    TOKEN_KEY = 'auth_token';
    NAME_KEY = 'name';

    // Observable navItem source
    private _authNavStatusSource = new BehaviorSubject<boolean>(false);
    // Observable navItem stream
    authNavStatus$ = this._authNavStatusSource.asObservable();

    private loggedIn = false;

    constructor(private http: Http, private configService: ConfigService, private router: Router) {
        super();
        //this.loggedIn = !!localStorage.getItem(this.TOKEN_KEY);

        // ?? not sure if this the best way to broadcast the status but seems to resolve issue on page refresh where auth status is lost in
        // header component resulting in authed user nav links disappearing despite the fact user is still logged in
        this._authNavStatusSource.next(this.loggedIn);
        this.baseUrl = configService.getApiURI();
    }

    register(email: string, password: string, firstName: string, lastName: string): Observable<UserRegistration> {
        let body = JSON.stringify({ email, password, firstName, lastName});
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.baseUrl + "/accounts", body, options)
            .map(res => true)
            .catch(this.handleError);
    }

    login(userName: any, password: any) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http
            .post(
            this.baseUrl + '/auth/login',
            JSON.stringify({ userName, password }), { headers }
            )
            .map(res => res.json())
            .map(res => {
                localStorage.setItem(this.TOKEN_KEY, res.auth_token);
                this.loggedIn = true;
                this._authNavStatusSource.next(true);
                return true;
            })
            .catch(this.handleError);
    }

    logout() {
        localStorage.removeItem(this.TOKEN_KEY);
        this.loggedIn = false;
        this._authNavStatusSource.next(false);
    }

    isLoggedIn() {
        return this.loggedIn;
    }

    get isAuthenticated() {
        return !!localStorage.getItem(this.TOKEN_KEY);
    }

    get name() {
        return localStorage.getItem(this.NAME_KEY);
    }
}
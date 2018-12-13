import { Profile } from './models/profile.model';
import { Http } from '@angular/http';
import { Injectable } from  '@angular/core';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/toPromise';

@Injectable()

export class GenericHttpService {

    constructor(private http: Http){}

    // public getProfiles(): Observable<Response> {
    //     return this.http.get('https://randomuser.me/api/?results=10');

    // }
}
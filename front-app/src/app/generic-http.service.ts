import { Injectable } from  '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class GenericHttpService {

    constructor(private _http: HttpClient){}

    public getProfiles(): Observable<object>{
        return this._http.get('https://randomuser.me/api/?results=10');
    }
}
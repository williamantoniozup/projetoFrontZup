import { Injectable } from  '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class GenericHttpService {

    constructor(private _http: HttpClient){}

    public getProfiles(): Observable<any>{return this._http.get('https://randomuser.me/api/?results=1');}

    public getProfilesAll(): Observable<any>{return this._http.get('http://localhost:3000/profiles');}

    public getProfilesAttended(): Observable<any>{return this._http.get('http://localhost:3000/attended');}

    public getProfilesTrash(): Observable<any>{return this._http.get('http://localhost:3000/trashcan');}

    public saveProfilesAll(payload): Observable<any>{return this._http.post('http://localhost:3000/profiles', payload);}

    public saveProfilesAttended(payload): Observable<any>{return this._http.post('http://localhost:3000/attended', payload);}

    public saveProfilesTrash(payload): Observable<any>{return this._http.post('http://localhost:3000/trashcan', payload);}

    public updateProfilesAll(payload): Observable<any>{return this._http.put('http://localhost:3000/profiles', payload);}

    public updateProfilesAttended(payload): Observable<any>{return this._http.put('http://localhost:3000/attended', payload);}

    public updateProfilesTrash(payload): Observable<any>{return this._http.put('http://localhost:3000/trashcan', payload);}

    public deleteProfilesAll(payload): Observable<any>{return this._http.delete('http://localhost:3000/profiles/', payload);}

    public deleteProfilesAttended(payload): Observable<any>{return this._http.delete('http://localhost:3000/attended', payload);}

    public deleteProfilesTrash(payload): Observable<any>{return this._http.delete('http://localhost:3000/trashcan', payload);}
}
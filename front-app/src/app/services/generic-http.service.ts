import { Injectable } from  '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class GenericHttpService {

    constructor(private _http: HttpClient){}

    // ENDPOINT API RANDOMUSER
    public getProfiles(): Observable<any>{return this._http.get('https://randomuser.me/api/?results=1');}
    public getImageProfileAccount(): Observable<any>{return this._http.get('https://randomuser.me/api/?results=1');}

    // ENDPOINT PROFILESALL
    public getProfilesAll(): Observable<any>{return this._http.get('http://localhost:3000/profiles');}
    public saveProfilesAll(payload: any): Observable<any>{return this._http.post('http://localhost:3000/profiles', payload);}
    public updateProfilesAll(payload: any): Observable<any>{return this._http.put('http://localhost:3000/profiles', payload);}
    public deleteProfilesAll(payload: any): Observable<any>{return this._http.delete('http://localhost:3000/profiles/' + payload.id);}

    // ENDPOINT ATTENDED
    public getProfilesAttended(): Observable<any>{return this._http.get('http://localhost:3000/attended');}
    public saveProfilesAttended(payload: any): Observable<any>{return this._http.post('http://localhost:3000/attended', payload);}
    public updateProfilesAttended(payload: any): Observable<any>{return this._http.put('http://localhost:3000/attended', payload);}
    public deleteProfilesAttended(payload: any): Observable<any>{return this._http.delete('http://localhost:3000/attended/' + payload.id);}

    // ENDPOINT TRASHCAN
    public getProfilesTrash(): Observable<any>{return this._http.get('http://localhost:3000/trashcan');}
    public saveProfilesTrash(payload: any): Observable<any>{return this._http.post('http://localhost:3000/trashcan', payload);}
    public updateProfilesTrash(payload: any): Observable<any>{return this._http.put('http://localhost:3000/trashcan', payload);}
    public deleteProfilesTrash(payload: any): Observable<any>{return this._http.delete('http://localhost:3000/trashcan/'+ payload.id);}
}
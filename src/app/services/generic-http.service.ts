import { Injectable } from  '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable()
export class GenericHttpService{
    
    private _environment: any;

    constructor(private _http: HttpClient){
        this._environment = environment;
    }

    public getUrlApiRandom(): string {
        return this._environment.URL_API;
    }

    public getUrlApiRandomImgAccount(): string {
        return this._environment.URL_ACCOUNT;
    }

    public getUrlApiJsonServer(): string {
        return this._environment.URL_JSON_API;
    }

    public getEndPointProfileAll(): string {
        return this._environment.ALL;
    }

    public getEndPointProfileAttended(): string {
        return this._environment.ATTENDED;
    }

    public getEndPointProfileTrashCan(): string {
        return this._environment.TRASHCAN;
    }

    // ENDPOINT API RANDOMUSER
    public getProfiles(): Observable<any>{return this._http.get(this.getUrlApiRandom());}
    public getImageProfileAccount(): Observable<any>{return this._http.get(this.getUrlApiRandomImgAccount());}

    // ENDPOINT PROFILESALL
    public getProfilesAll(): Observable<any>{return this._http.get(this.getUrlApiJsonServer() + this.getEndPointProfileAll());}
    public saveProfilesAll(payload: any): Observable<any>{return this._http.post(this.getUrlApiJsonServer() + this.getEndPointProfileAll(), payload);}
    public updateProfilesAll(payload: any): Observable<any>{return this._http.put(this.getUrlApiJsonServer() + this.getEndPointProfileAll(), payload);}
    public deleteProfilesAll(payload: any): Observable<any>{return this._http.delete(this.getUrlApiJsonServer() + this.getEndPointProfileAll() + '/' + payload.id);}

    // ENDPOINT ATTENDED
    public getProfilesAttended(): Observable<any>{return this._http.get(this.getUrlApiJsonServer() + this.getEndPointProfileAttended());}
    public saveProfilesAttended(payload: any): Observable<any>{return this._http.post(this.getUrlApiJsonServer() + this.getEndPointProfileAttended(), payload);}
    public updateProfilesAttended(payload: any): Observable<any>{return this._http.put(this.getUrlApiJsonServer() + this.getEndPointProfileAttended(), payload);}
    public deleteProfilesAttended(payload: any): Observable<any>{return this._http.delete(this.getUrlApiJsonServer() + this.getEndPointProfileAttended() + '/' + payload.id);}

    // ENDPOINT TRASHCAN
    public getProfilesTrash(): Observable<any>{return this._http.get(this.getUrlApiJsonServer() + this.getEndPointProfileTrashCan());}
    public saveProfilesTrash(payload: any): Observable<any>{return this._http.post(this.getUrlApiJsonServer() + this.getEndPointProfileTrashCan(), payload);}
    public updateProfilesTrash(payload: any): Observable<any>{return this._http.put(this.getUrlApiJsonServer() + this.getEndPointProfileTrashCan(), payload);}
    public deleteProfilesTrash(payload: any): Observable<any>{return this._http.delete(this.getUrlApiJsonServer() + this.getEndPointProfileTrashCan() + '/' + payload.id);}

    /* 
    // ENDPOINT API RANDOMUSER
    public getProfiles(): Observable<any>{return this._http.get('https://randomuser.me/api/?results=0');}
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
    */
}
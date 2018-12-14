import { GenericHttpService } from './generic-http.service';
import { Injectable } from "@angular/core";
import { Observable, Subject } from 'rxjs';
import { Profile } from '../models/profile.model';
import { filter, map } from 'rxjs/operators';


@Injectable()

export class GenericSandboxService{

    public payload: any;

    constructor(private _httpRequest: GenericHttpService){}

    public doGetListProfiles(){
        this._httpRequest.getProfiles()
        .pipe(map((res) => res.results))
        .subscribe(
            (response) => {
                console.log('aqui')
                this.payload = response;
                console.log(this.payload)
            }
        );
    }
}
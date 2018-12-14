import { GenericHttpService } from './generic-http.service';
import { Injectable } from "@angular/core";
import { Observable, Subject } from 'rxjs';
import { Profile } from '../models/profile.model';
import { filter, map } from 'rxjs/operators';


@Injectable()

export class GenericSandboxService{

    public profiles: Subject<any> = new Subject<any>();

    constructor(private _httpRequest: GenericHttpService){}

    public doGetListProfiles(){
        this._httpRequest.getProfiles()
        .pipe(map((res) => res.results))
        .subscribe(
            (response) => {
                this.profiles.next(response)
            }
        );
    }
}
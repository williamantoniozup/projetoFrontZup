import { GenericHttpService } from './generic-http.service';
import { Injectable } from "@angular/core";
import { Observable, Subject } from 'rxjs';
import { Profile } from '../models/profile.model';
import { filter, map } from 'rxjs/operators';


@Injectable()

export class GenericSandboxService{

    public profiles: Subject<Profile[]> = new Subject<Profile[]>();
    public listProfiles: Profile[] = [];

    constructor(private _httpRequest: GenericHttpService){}

    public doGetListProfiles(){
        // this.profiles.next(null);
        this._httpRequest.getProfiles()
        .pipe(map((res) => res.results))
        .subscribe(
            (response) => {
                this.listProfiles = this.formatPayloadProfiles(response);
                this.profiles.next(this.listProfiles);
            }
        );
    }

    public formatPayloadProfiles(payload){
        const listProfileAux: Profile[] = [];

        payload.map((profile)=>{
            let profileObject = {
                imgProfile: '',
                name: '',
                email: '',
                phone: '',
                city: ''
            }

            profileObject.imgProfile = profile['picture'].thumbnail;
            profileObject.name = profile['name'].first;
            profileObject.email = profile.email;
            profileObject.phone = profile.phone;
            profileObject.city = profile['location'].city;

            listProfileAux.push(profileObject);
        });
        return listProfileAux;
    }
}
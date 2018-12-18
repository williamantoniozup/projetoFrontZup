import { GenericHttpService } from './generic-http.service';
import { Injectable } from "@angular/core";
import { Observable, Subject } from 'rxjs';
import { Profile } from '../models/profile.model';
import { filter, map } from 'rxjs/operators';


@Injectable()

export class GenericSandboxService{

    public profiles: Subject<Profile[]> = new Subject<Profile[]>();
    public profilesAll: Subject<Profile[]> = new Subject<Profile[]>();
    public profilesAttended: Subject<Profile[]> = new Subject<Profile[]>();
    public profilesTrash: Subject<Profile[]> = new Subject<Profile[]>();
    public listProfiles: Profile[] = [];

    constructor(private _httpRequest: GenericHttpService){}

    public doGetListProfiles(): void{
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

    // ALL
    public doGetListProfilesAll(): void{
        this._httpRequest.getProfilesAll().subscribe(
            res => {
                this.profilesAll.next(res);
            }
        )
    }

    public doPostListProfilesAll(payload: Array<object>): void{
        payload.forEach(element => {
            this._httpRequest.saveProfilesAll(element).subscribe((data:any)=>{});
        });   
    }

    // ATTENDED
    public doGetListProfilesAttended(): void{
        this._httpRequest.getProfilesAttended().subscribe(
            res => {
                this.profilesAttended.next(res);
            }
        )
    }

    public doPostListProfilesAttended(payload: Array<object>): void{
        payload.forEach(element => {
            this._httpRequest.saveProfilesAttended(element).subscribe((data:any)=>{});
        });   
    }

    // TRASH
    public doGetListProfilesTrash(): void{
        this._httpRequest.getProfilesAttended().subscribe(
            res => {
                this.profilesTrash.next(res);
            }
        )
    }

    public doPostListProfilesTrash(payload: Array<object>): void{
        payload.forEach(element => {
            this._httpRequest.saveProfilesAttended(element).subscribe((data:any)=>{});
        });   
    }


    public formatPayloadProfiles(payload: any): Array<Profile>{
        const listProfileAux: Profile[] = [];

        payload.map((profile: any)=>{
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
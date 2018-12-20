import { GenericHttpService } from './generic-http.service';
import { Injectable, EventEmitter } from "@angular/core";
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Profile } from '../models/profile.model';
import { filter, map } from 'rxjs/operators';


@Injectable()

export class GenericSandboxService{

    public profiles: Subject<Profile[]> = new Subject<Profile[]>();
    public profilesAll: Subject<Profile[]> = new Subject<Profile[]>();
    public profilesAttended: Subject<Profile[]> = new Subject<Profile[]>();
    public profilesTrash: Subject<Profile[]> = new Subject<Profile[]>();
    public profilesImage: Subject<Profile[]> = new Subject<Profile[]>();
    public listProfiles: Profile[] = [];
    public textSearch = new Subject<string>();
    
    constructor(private _httpRequest: GenericHttpService){}

    public changeTextSearch(text: string): void {
        this.textSearch.next(text);
    }

    //API RANDOM
    public doGetListProfiles(): void {
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

    public doGetImageProfileAccount(): void {
        this._httpRequest.getImageProfileAccount()
        .pipe(map((res) => res.results))
        .subscribe(
            (response) => {
                this.listProfiles = this.formatPayloadProfiles(response);
                this.profilesImage.next(this.listProfiles);
            }
        );
    }

    // ALL
    public doGetListProfilesAll(): void {
        this._httpRequest.getProfilesAll().subscribe(
            res => {
                this.profilesAll.next(res);
            }
        )
    }

    public doPostListProfilesAll(payload: Array<object>): void {
        payload.forEach(element => {
            this._httpRequest.saveProfilesAll(element).subscribe((data:any)=>{});
        });   
    }

    public doPostListProfilesAllJustObjetc(payload: object): void {
        this._httpRequest.saveProfilesAll(payload).subscribe((data:any)=>{});
    }

    public doUpdateListProfilesAll(payload: object): void {
        this._httpRequest.updateProfilesAll(payload).subscribe((data:any)=>{});
    }   
    
    public doDeleteListProfilesAll(payload: object): void {
        this._httpRequest.deleteProfilesAll(payload).subscribe((data:any)=>{});
    }

    // ATTENDED
    public doGetListProfilesAttended(): void {
        this._httpRequest.getProfilesAttended().subscribe(
            res => {
                this.profilesAttended.next(res);
            }
        )
    }

    public doPostListProfilesAttended(payload: object): void {
        this._httpRequest.saveProfilesAttended(payload).subscribe((data:any)=>{});
    }

    public doUpdateListProfilesAttended(payload: object): void {
        this._httpRequest.updateProfilesAttended(payload).subscribe((data:any)=>{});
    }

    public doDeleteListProfilesAttended(payload: object): void {
        this._httpRequest.deleteProfilesAttended(payload).subscribe((data:any)=>{});
    }

    // TRASHCAN
    public doGetListProfilesTrash(): void {
        this._httpRequest.getProfilesTrash().subscribe(
            res => {
                this.profilesTrash.next(res);
            }
        )
    }

    public doPostListProfilesTrash(payload: object): void {
        this._httpRequest.saveProfilesTrash(payload).subscribe((data:any)=>{});      
    }

    public doUpdateListProfilesTrash(payload: object): void {
        this._httpRequest.updateProfilesTrash(payload).subscribe((data:any)=>{});
    }

    public doDeleteListProfilesTrash(payload: object): void {
        this._httpRequest.deleteProfilesTrash(payload).subscribe((data:any)=>{});
    }

    public formatPayloadProfiles(payload: any): Array<Profile> {
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
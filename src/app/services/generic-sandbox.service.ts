import { GenericHttpService } from './generic-http.service';
import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { Profile } from '../models/profile.model';
import { map } from 'rxjs/operators';


@Injectable()
export class GenericSandboxService{

    public profiles: Subject<Profile[]> = new Subject<Profile[]>();
    public profilesAll: Subject<Profile[]> = new Subject<Profile[]>();
    public profilesAttended: Subject<Profile[]> = new Subject<Profile[]>();
    public profilesTrash: Subject<Profile[]> = new Subject<Profile[]>();
    public profilesImage: Subject<Profile[]> = new Subject<Profile[]>();
    public listProfiles: Profile[] = [];
    public textSearch: Subject<string> = new Subject<string>();
    public errorGeneric: Subject<boolean> = new Subject<boolean>();
    public clearSearch: Subject<boolean> = new Subject<boolean>();

    
    constructor(private _httpRequest: GenericHttpService){}

    public changeTextSearch(text: string): void {
        this.textSearch.next(text);
    }

    public setErrorGeneric(status: boolean): void {
        this.errorGeneric.next(status);
    }

    public clearInputSearch(hasClearText: boolean): void {
        this.clearSearch.next(hasClearText);
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

    public doPostListProfilesAllJustObjetc(payload: object) {
        return this._httpRequest.saveProfilesAll(payload);
    }

    public doUpdateListProfilesAll(payload: object): void {
        this._httpRequest.updateProfilesAll(payload).subscribe((data:any)=>{});
    }   
    
    public doDeleteListProfilesAll(payload: object) {
        return this._httpRequest.deleteProfilesAll(payload);
    }

    // ATTENDED
    public doGetListProfilesAttended(): void {
        this._httpRequest.getProfilesAttended().subscribe(
            res => {
                this.profilesAttended.next(res);
            }
        )
    }

    public doPostListProfilesAttended(payload: object) {
        return this._httpRequest.saveProfilesAttended(payload);
    }

    public doUpdateListProfilesAttended(payload: object): void {
        this._httpRequest.updateProfilesAttended(payload).subscribe((data:any)=>{});
    }

    public doDeleteListProfilesAttended(payload: object) {
        return this._httpRequest.deleteProfilesAttended(payload);
    }

    // TRASHCAN
    public doGetListProfilesTrash(): void {
        this._httpRequest.getProfilesTrash().subscribe(
            res => {
                this.profilesTrash.next(res);
            }
        )
    }

    public doPostListProfilesTrash(payload: object) {
        return this._httpRequest.saveProfilesTrash(payload);   
    }

    public doUpdateListProfilesTrash(payload: object): void {
        this._httpRequest.updateProfilesTrash(payload).subscribe((data:any)=>{});
    }

    public doDeleteListProfilesTrash(payload: object) {
        return this._httpRequest.deleteProfilesTrash(payload);
    }
    
    public formatPayloadProfiles(payload: any): Array<Profile> {
        const listProfileAux: Profile[] = [];
       
        payload.map((profile: any)=>{
            let profileObject = {
                imgProfile: '',
                imgProfileModal: '',
                name: '',
                email: '',
                phone: '',
                city: '',
                birthday: '',
                address: '',
                password: ''
            }

            profileObject.imgProfile = profile['picture'].thumbnail;
            profileObject.imgProfileModal = profile['picture'].large;
            profileObject.name = profile['name'].first;
            profileObject.email = profile.email;
            profileObject.phone = profile.phone;
            profileObject.city = profile['location'].city;
            profileObject.birthday = profile['dob'].date;
            profileObject.address = profile['location'].street;
            profileObject.password = profile['login'].password;

            listProfileAux.push(profileObject);
        });
        return listProfileAux;
    }
}
import { GenericSandboxService } from 'src/app/services/generic-sandbox.service';
import { Profile } from './../../models/profile.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-attended',
  templateUrl: './panel-attended.component.html',
  styleUrls: ['./panel-attended.component.css']
})
export class PanelAttendedComponent implements OnInit{

  public listProfilesAttended: Profile[] = [];
  public textSearchSmart: string;

  constructor(private _sandbox: GenericSandboxService){}


  ngOnInit(): void{
    this.loadListAllAttended();
    this._sandbox.textSearch.subscribe(message => this.textSearchSmart = message);
  }

  public onGetIdAttendedToTrash(id: number): void {
    this.searchProfileTrash(id);
  }

  public onGetIdAttendedToAll(id: number): void {
    this.searchProfileAll(id);
  }

  public moveProfileAttendedToProfileAll(payload: object): void {
    this._sandbox.doDeleteListProfilesAttended(payload).subscribe(
      (data:any) => {
        this._sandbox.setErrorGeneric(false);
        this.loadListAllAttended();
      },
      (error) => {
        this._sandbox.setErrorGeneric(true);
      }
    );

    this._sandbox.doPostListProfilesAllJustObjetc(payload).subscribe(
      (data:any) => {},
      (error) => {
        this._sandbox.setErrorGeneric(true);
      }
    );
  }

  public moveProfileAttendedToProfileTrash(payload: object): void {
    this._sandbox.doDeleteListProfilesAttended(payload).subscribe(
      (data:any) => { 
        this._sandbox.setErrorGeneric(false);
        this.loadListAllAttended();
      },
      (error) => {
        this._sandbox.setErrorGeneric(true);
      }
    );
    
    this._sandbox.doPostListProfilesTrash(payload).subscribe(
      (data:any) => {},
      (error) => {
        this._sandbox.setErrorGeneric(true);
      }
    );
  }

  public searchProfileTrash(id: number): void {
    this.listProfilesAttended.forEach(obj => {
      if(obj.id == id){
        this.moveProfileAttendedToProfileTrash(obj);
      }
    });
  }

  public searchProfileAll(id: number): void {
    this.listProfilesAttended.forEach(obj => {
      if(obj.id == id){
        this.moveProfileAttendedToProfileAll(obj);
      }
    });
  }

  public loadListAllAttended(): void{
    this._sandbox.doGetListProfilesAttended();
    this._sandbox.profilesAttended.subscribe(
      res => {
        this.listProfilesAttended = res;
      }
    )
  }
}
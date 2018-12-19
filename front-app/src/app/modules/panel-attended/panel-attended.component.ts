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
  public idProfileAttendedMove: number;

  constructor(private _sandbox: GenericSandboxService){}


  ngOnInit(): void{
    this._sandbox.doGetListProfilesAttended();
    this._sandbox.profilesAttended.subscribe(
      res => {
        this.listProfilesAttended = res;
      }
    )
  }

  public onGetIdAttendedToTrash(id: number): void {
    this.searchProfileTrash(id);
  }

  public onGetIdAttendedToAll(id: number): void {
    this.searchProfileAll(id);
  }

  public moveProfileAttendedToProfileAll(payload: object): void {
    this._sandbox.doDeleteListProfilesAttended(payload);
    this._sandbox.doPostListProfilesAllJustObjetc(payload);
  }

  public moveProfileAttendedToProfileTrash(payload: object): void {
    this._sandbox.doDeleteListProfilesAttended(payload);
    this._sandbox.doPostListProfilesTrash(payload);
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
}
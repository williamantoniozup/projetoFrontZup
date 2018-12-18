import { Profile } from './../../models/profile.model';
import { GenericSandboxService } from './../../services/generic-sandbox.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-panel-all',
  templateUrl: './panel-all.component.html',
  styleUrls: ['./panel-all.component.css']
})
export class PanelAllComponent implements OnInit{

  public listProfilesAll: Profile[] = [];
  public idProfileMoveToAttended: number;
  public idProfileMoveToTrash: number;

  constructor(private _sandbox: GenericSandboxService){}  

  ngOnInit(): void {
    this._sandbox.doGetListProfilesAll();
    this._sandbox.profilesAll.subscribe(
      res => {
        this.listProfilesAll = res;
        console.log(this.listProfilesAll);
      }
    )
  }  

  public onGetIdAttended(id: number): void {
    this.idProfileMoveToAttended = id;
    console.log( 'peguei id attended  '+this.idProfileMoveToAttended);
  }

  public onGetIdTrash(id: number): void {
    this.idProfileMoveToTrash = id;
    console.log( 'peguei id trash  '+this.idProfileMoveToTrash);
  }


}

/* 
profile
name
email
telefone
city
*/
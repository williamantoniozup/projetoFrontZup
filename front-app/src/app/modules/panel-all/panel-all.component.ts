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
        // console.log(this.listProfilesAll);
      }
    )
  }  

  public onGetIdAttended(id: number): void {
    // this.idProfileMoveToAttended = id;
    // console.log( 'peguei id attended  '+id);
    this.searchProfileAttended(id);
  }

  public onGetIdTrash(id: number): void {
    // console.log( 'peguei id trash  '+this.idProfileMoveToTrash);
    this.searchProfileTrash(id);
  }


  public moveProfileAllToProfileAttended(payload: object){
    // console.log("imprimindo MOVE \n" + payload);
    this._sandbox.doDeleteListProfilesAll(payload);
    this._sandbox.doPostListProfilesAttended(payload);
    this._sandbox.doGetListProfilesAll();
  }

  public moveProfileAllToProfileTrash(payload: object){
    // console.log("imprimindo MOVE \n" + payload);
    this._sandbox.doDeleteListProfilesAll(payload);
    this._sandbox.doPostListProfilesTrash(payload);
  }

  public searchProfileAttended(id: number): void{
    this.listProfilesAll.forEach(obj => {
      if(obj.id == id){
        this.moveProfileAllToProfileAttended(obj);
      }
    });
  }

  public searchProfileTrash(id: number): void{
    this.listProfilesAll.forEach(obj => {
      if(obj.id == id){
        this.moveProfileAllToProfileTrash(obj);
      }
    });
  }


  


}

/* 
profile
name
email
telefone
city
*/
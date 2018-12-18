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

  constructor(private _sandbox: GenericSandboxService){}  

  ngOnInit() {
    this._sandbox.doGetListProfilesAll();
    this._sandbox.profilesAll.subscribe(
      res => {
        this.listProfilesAll = res;
        console.log(this.listProfilesAll);
      }
    )
  }  
}

/* 
profile
name
email
telefone
city
*/
import { Profile } from './../../models/profile.model';
import { GenericSandboxService } from './../../services/generic-sandbox.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-all',
  templateUrl: './panel-all.component.html',
  styleUrls: ['./panel-all.component.css']
})
export class PanelAllComponent implements OnInit{

  public listProfilesAll: Profile[] = [];
  public menuTable: string;

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

  public sendIndexMenu(tipo: string){
    console.log('Peguei menu ALL!');
    console.log(tipo);
    this.menuTable = tipo;
  }

  
}

/* 
profile
name
email
telefone
city
*/
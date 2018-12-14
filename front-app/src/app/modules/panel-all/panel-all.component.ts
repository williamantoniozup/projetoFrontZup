import { GenericSandboxService } from './../../services/generic-sandbox.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-all',
  templateUrl: './panel-all.component.html',
  styleUrls: ['./panel-all.component.css'],
})
export class PanelAllComponent implements OnInit{

  public listProfilesAll: any = [];

  constructor(private _sandbox: GenericSandboxService){}  

  ngOnInit() {
    this._sandbox.doGetListProfiles();
    this._sandbox.profiles.subscribe(
      res => {
        this.listProfilesAll = res;
      }
    )
  }
}
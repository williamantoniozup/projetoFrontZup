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

  constructor(private _sandbox: GenericSandboxService){}


  ngOnInit(): void{
    this._sandbox.doGetListProfilesAttended();
    this._sandbox.profilesAttended.subscribe(
      res => {
        this.listProfilesAttended = res;
      }
    )
  }


}
import { Component, OnInit } from '@angular/core';
import { GenericSandboxService } from 'src/app/services/generic-sandbox.service';
import { Profile } from 'src/app/models/profile.model';

@Component({
  selector: 'app-panel-trash',
  templateUrl: './panel-trash.component.html',
  styleUrls: ['./panel-trash.component.css']
})
export class PanelTrashComponent implements OnInit {
  
  public listProfilesTrash: Profile[] = [];

  constructor(private _sandbox: GenericSandboxService){} 
  
  ngOnInit(): void {
    this._sandbox.doGetListProfilesTrash();
    this._sandbox.profilesTrash.subscribe(
      res => {
        this.listProfilesTrash = res;
      }
    )
  }
}
import { Component } from '@angular/core';
import { Profile } from 'src/app/models/profile.model';
import { GenericSandboxService } from 'src/app/services/generic-sandbox.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
  
  public listProfilesAll: Profile[] = [];

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
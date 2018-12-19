import { Component } from '@angular/core';

import { GenericSandboxService } from 'src/app/services/generic-sandbox.service';
import { Profile } from 'src/app/models/profile.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  
  public listProfilesImage: Profile[] = [];

  constructor(private _sandbox: GenericSandboxService){}  

  ngOnInit() {
    this._sandbox.doGetImageProfileAccount();
    this._sandbox.profilesImage.subscribe(
      res => {
        this.listProfilesImage = res;
        console.log('aeee' , this.listProfilesImage);
      }
    )
  }
}

import { Component } from '@angular/core';
import { GenericHttpService } from 'src/app/generic-http.service';
import { Profile } from 'selenium-webdriver/firefox';

@Component({
  selector: 'app-panel-all',
  templateUrl: './panel-all.component.html',
  styleUrls: ['./panel-all.component.css'],
  providers:[GenericHttpService]
})
export class PanelAllComponent {

  public profiles: Profile[];

  constructor(private _profileService: GenericHttpService){}

  // ngOnInit(){
  //   this._profileService.getProfiles()
  //     .then((profiles: Profile[]) => {
  //       this.profiles = profiles;
  //     })
  //     .catch((error: any) => {
  //       console.log(error);
  //   })

  //   console.log(this.profiles);

  
  // }
}
import { Component, Output, EventEmitter } from '@angular/core';

import { GenericSandboxService } from 'src/app/services/generic-sandbox.service';
import { Profile } from 'src/app/models/profile.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  
  @Output() public textSearch = new EventEmitter<Event>();
  public listProfilesImage: Profile[] = [];
  public urlImg: string = '';
  public addSearchValueInput: string = '';

  constructor(private _sandbox: GenericSandboxService){}  

  ngOnInit() {
    this._sandbox.doGetImageProfileAccount();
    this._sandbox.profilesImage.subscribe(
      res => {
        this.listProfilesImage = res;
        this.urlImg = this.listProfilesImage[0].imgProfile;
      }
    )
  }

  public applyFilter(event: any){
    this.textSearch.emit(event);
  }

  // public applyEnterTextInput(event): void {
  //   this._sandbox.changeTextSearch(event);
  // (keyup.enter)="applyEnterTextInput($event.target.value)"
  // }
}
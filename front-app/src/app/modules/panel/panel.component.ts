import { Router } from '@angular/router';
import { Component, Input, OnChanges, OnInit} from '@angular/core';
import { Profile } from 'src/app/models/profile.model';
import { GenericSandboxService } from 'src/app/services/generic-sandbox.service';



@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})

export class PanelComponent implements OnChanges, OnInit {
  
  public listProfiles: Profile[] = [];

  @Input() public textSearchSon: string;

  constructor(private _sandbox: GenericSandboxService){}  

  ngOnInit() {
    this._sandbox.doGetListProfiles();
    this._sandbox.profiles.subscribe(
      res => {
        this.listProfiles = res;
        this._sandbox.doPostListProfilesAll(this.listProfiles);
      }
    )
  }
  ngOnChanges(): void {
    // console.log(this.textSearchSon);
    this._sandbox.changeTextSearch(this.textSearchSon);
  }
}
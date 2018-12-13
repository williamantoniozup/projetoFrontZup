
import { Component, OnInit } from '@angular/core';
import { GenericHttpService } from 'src/app/generic-http.service';
import { Profile } from 'src/app/models/profile.model';

@Component({
  selector: 'app-panel-all',
  templateUrl: './panel-all.component.html',
  styleUrls: ['./panel-all.component.css'],
})
export class PanelAllComponent implements OnInit{

  public list$: Array<Profile> = [];

  constructor(private _genericService: GenericHttpService){}  

  ngOnInit() {
    
    this._genericService.getProfiles().subscribe(
      (response) => {
        // console.log(response);
        // console.log(response);
        // console.log(typeof(response))
        this.list$ = response['Profiles'];
      }
    )

    console.log(this.list$);
    
    
    
  }

}
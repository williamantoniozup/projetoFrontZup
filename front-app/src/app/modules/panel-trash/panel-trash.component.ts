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
  public textSearchSmart: string;

  constructor(private _sandbox: GenericSandboxService){} 
  
  ngOnInit(): void {
    this._sandbox.doGetListProfilesTrash();
    this._sandbox.profilesTrash.subscribe(
      res => {
        this.listProfilesTrash = res;
      }
    )
    this._sandbox.textSearch.subscribe(message => this.textSearchSmart = message);
  }

  public onGetIdTrashToAll(id: number): void {
    this.searchProfileAll(id);
  }

  public onGetIdTrashToAttended(id: number): void {
    this.searchProfileAttended(id);
  }

  public moveProfileTrashToProfileAll(payload: object): void {
    this._sandbox.doDeleteListProfilesTrash(payload);
    this._sandbox.doPostListProfilesAllJustObjetc(payload);
  }

  public moveProfileTrashToProfileAttended(payload: object): void {
    this._sandbox.doDeleteListProfilesTrash(payload);
    this._sandbox.doPostListProfilesAttended(payload);
  }

  public searchProfileAll(id: number): void {
    this.listProfilesTrash.forEach(obj => {
      if(obj.id == id){
        this.moveProfileTrashToProfileAll(obj);
      }
    });
  }

  public searchProfileAttended(id: number): void {
    this.listProfilesTrash.forEach(obj => {
      if(obj.id == id){
        this.moveProfileTrashToProfileAttended(obj);
      }
    });
  }
}
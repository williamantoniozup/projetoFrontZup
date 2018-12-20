import { Profile } from './../../models/profile.model';
import { GenericSandboxService } from './../../services/generic-sandbox.service';
import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-panel-all',
  templateUrl: './panel-all.component.html',
  styleUrls: ['./panel-all.component.css']
})
export class PanelAllComponent implements OnInit, OnChanges{

  public listProfilesAll: Profile[] = [];
  @Input() public textSearch: string;
  public textSearchPanelAll: string;

  constructor(private _sandbox: GenericSandboxService){
    
  }  

  ngOnInit(): void {
    this._sandbox.doGetListProfilesAll();
    this._sandbox.profilesAll.subscribe(
      res => {
        this.listProfilesAll = res;
      }
    )
  }  

  ngOnChanges(): void {
    this._sandbox.currentTextSearch$.subscribe(message => this.textSearchPanelAll = message);
    console.log('insissssde son', this.textSearchPanelAll);
  }

  public onGetIdAllToAttended(id: number): void {
    this.searchProfileAttended(id);
  }

  public onGetIdAllToTrash(id: number): void {
    this.searchProfileTrash(id);
  }


  public moveProfileAllToProfileAttended(payload: object): void{
    this._sandbox.doDeleteListProfilesAll(payload);
    this._sandbox.doPostListProfilesAttended(payload);
  }

  public moveProfileAllToProfileTrash(payload: object): void {
    this._sandbox.doDeleteListProfilesAll(payload);
    this._sandbox.doPostListProfilesTrash(payload);
  }

  public searchProfileAttended(id: number): void {
    this.listProfilesAll.forEach(obj => {
      if(obj.id == id){
        this.moveProfileAllToProfileAttended(obj);
      }
    });
  }

  public searchProfileTrash(id: number): void {
    this.listProfilesAll.forEach(obj => {
      if(obj.id == id){
        this.moveProfileAllToProfileTrash(obj);
      }
    });
  }
}

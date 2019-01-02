import { Profile } from './../../models/profile.model';
import { GenericSandboxService } from './../../services/generic-sandbox.service';
import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-panel-all',
  templateUrl: './panel-all.component.html',
  styleUrls: ['./panel-all.component.css']
})
export class PanelAllComponent implements OnInit {

  @Output()
  public clearSearchTextInput: EventEmitter<boolean> = new EventEmitter(false);
  public listProfilesAll: Profile[] = [];
  public textSearchSmart: string;

  constructor(private _sandbox: GenericSandboxService){}  

  ngOnInit(): void {
    this.clearSearchTextInput.emit(true);
    this.loadListAll();
    this._sandbox.textSearch.subscribe(message => this.textSearchSmart = message);
  }  

  public onGetIdAllToAttended(id: number): void {
    this.searchProfileAttended(id);
  }

  public onGetIdAllToTrash(id: number): void {
    this.searchProfileTrash(id);
  }


  public moveProfileAllToProfileAttended(payload: object): void{
    this._sandbox.doDeleteListProfilesAll(payload).subscribe(
      (data:any)=>{ 
        this._sandbox.setErrorGeneric(false);
        this.loadListAll();
      }, 
      (error) => {
        this._sandbox.setErrorGeneric(true);
      }
    );

    this._sandbox.doPostListProfilesAttended(payload).subscribe(
      (data:any)=>{}, 
      (error) => {
        this._sandbox.setErrorGeneric(true);
      } 
    );
  }

  public moveProfileAllToProfileTrash(payload: object): void {
    this._sandbox.doDeleteListProfilesAll(payload).subscribe(
      (data:any)=>{ 
        this._sandbox.setErrorGeneric(false);
        this.loadListAll();
      },
      (error) => {
        this._sandbox.setErrorGeneric(true);
      }
    );
    
    this._sandbox.doPostListProfilesTrash(payload).subscribe(
      (data:any)=>{},
      (error) => {
        this._sandbox.setErrorGeneric(true);
      }
    );   
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

  public loadListAll(): void{
    this._sandbox.doGetListProfilesAll();
    this._sandbox.profilesAll.subscribe(
      res => {
        this.listProfilesAll = res;
      }
    )
  }
}
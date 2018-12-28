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
    this.loadListAll();
    this._sandbox.textSearch.subscribe(message => this.textSearchSmart = message);
  }

  public onGetIdTrashToAll(id: number): void {
    this.searchProfileAll(id);
  }

  public onGetIdTrashToAttended(id: number): void {
    this.searchProfileAttended(id);
  }

  public moveProfileTrashToProfileAll(payload: object): void {
    this._sandbox.doDeleteListProfilesTrash(payload).subscribe(
      (data:any) => {
        this._sandbox.setErrorGeneric(false);
        this.loadListAll();
      },
      (error) => {
        this._sandbox.setErrorGeneric(true);
        console.log('Erro DELETE-> ', error);
      }
    );
    this._sandbox.doPostListProfilesAllJustObjetc(payload).subscribe(
      (data:any) => {
        this.loadListAll();
      },
      (error) => {
        this._sandbox.setErrorGeneric(true);
        console.log('Erro DELETE-> ', error);
      }
    );
  }

  public moveProfileTrashToProfileAttended(payload: object): void {
    this._sandbox.doDeleteListProfilesTrash(payload).subscribe(
      (data:any) => { 
        this._sandbox.setErrorGeneric(false);
        this.loadListAll();
      },
      (error) => {
        this._sandbox.setErrorGeneric(true);
        console.log('Erro DELETE-> ', error);
      }
    );
    this._sandbox.doPostListProfilesAttended(payload).subscribe(
      (data:any) => {
        this.loadListAll();
      },
      (error) => {
        this._sandbox.setErrorGeneric(true);
        console.log('Erro DELETE-> ', error);
      }
    );
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

  public loadListAll(): void{
    this._sandbox.doGetListProfilesTrash();
    this._sandbox.profilesTrash.subscribe(
      res => {
        this.listProfilesTrash = res;
      }
    )
  }
}
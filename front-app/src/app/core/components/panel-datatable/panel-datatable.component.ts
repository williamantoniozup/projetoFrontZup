import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel-datatable',
  templateUrl: './panel-datatable.component.html',
  styleUrls: ['./panel-datatable.component.css']
})
export class PanelDatatableComponent implements OnInit {

  @Input() data = []; 

  public profiles: any = [];
  public validationAll: boolean = false;
  public validationAttended: boolean = false;
  public validationTrash: boolean = false;
  public href: string = '';

  constructor(private router: Router){}

  ngOnInit(): void {
    this.href = this.router.url;
    console.log(this.href);
    if(this.href == '/allprofiles'){
      this.setTableAll();
    }else if(this.href == '/attended'){
      this.setTableAttended();
    }else if(this.href == '/trash'){
      this.setTableTrash();
    }
  }

  ngOnChanges(changes): void {
    if(this.data.length > 0){
      this.profiles = this.data;
    }
  }

  public setTableAll(): void {
    this.validationAll = true;
    this.validationAttended = false;
    this.validationTrash = false;
  }

  public setTableAttended(): void {
    this.validationAttended = true;
    this.validationAll = false;
    this.validationTrash = false;
  }

  public setTableTrash(): void {
    this.validationTrash = true;
    this.validationAll = false;
    this.validationAttended = false;
  }

  public sendToAttended(id: number){
    // console.log('id attended ' +id);
  }

  public sendToTrash(id: number){
    // console.log('id trash ' + id)
  }
}
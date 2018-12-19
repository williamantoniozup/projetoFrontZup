import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel-datatable',
  templateUrl: './panel-datatable.component.html',
  styleUrls: ['./panel-datatable.component.css']
})
export class PanelDatatableComponent implements OnInit {

  @Input() data = []; 
  @Output() onIdAllToAttended = new EventEmitter<number>();
  @Output() onIdAllToTrash = new EventEmitter<number>();
  @Output() onIdAttendedToTrash = new EventEmitter<number>();
  @Output() onIdAttendedToAll = new EventEmitter<number>();
  @Output() onIdTrashToAll = new EventEmitter<number>();
  @Output() onIdTrashToAttended = new EventEmitter<number>();

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

  ngOnChanges(changes: any): void {
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

  public sendAllToAttended(id: number): void {
    // console.log('id attended ' +id);
    this.onIdAllToAttended.emit(id);
  }

  public sendAllToTrash(id: number): void {
    // console.log('id trash ' + id)
    this.onIdAllToTrash.emit(id);
  }

  public sendAttendedToTrash(id: number): void {
    this.onIdAttendedToTrash.emit(id);
  }

  public sendAttendedToAll(id: number): void {
    this.onIdAttendedToAll.emit(id);
  }

  public sendTrashToall(id: number): void {
    this.onIdTrashToAll.emit(id);
  }

  public sendTrashToAttended(id: number): void {
    this.onIdTrashToAttended.emit(id);
  }
}
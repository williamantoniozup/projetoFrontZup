import { ModalComponent } from './../modal/modal.component';
import { MzModalService } from 'ngx-materialize';
import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatDialog, MatSort } from '@angular/material';

@Component({
  selector: 'app-panel-datatable',
  templateUrl: './panel-datatable.component.html',
  styleUrls: ['./panel-datatable.component.css']
})
export class PanelDatatableComponent implements OnInit {

  @Input() public data = []; 
  @Input() public textSearch: string = '';
  @Output() public onIdAllToAttended = new EventEmitter<number>();
  @Output() public onIdAllToTrash = new EventEmitter<number>();
  @Output() public onIdAttendedToTrash = new EventEmitter<number>();
  @Output() public onIdAttendedToAll = new EventEmitter<number>();
  @Output() public onIdTrashToAll = new EventEmitter<number>();
  @Output() public onIdTrashToAttended = new EventEmitter<number>();

  public profiles: any = [];
  public validationAll: boolean = false;
  public validationAttended: boolean = false;
  public validationTrash: boolean = false;
  public href: string = '';
  public displayedColumns: string[] = ['imgProfile','name','email','phone','city','customIcons'];
  public dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router, private modalService: MzModalService, public dialog: MatDialog){}

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
      this.dataSource = new MatTableDataSource<any>(this.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      // this.profiles = this.data;
    }
    this.filterProfiles(this.textSearch);
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
    this.onIdAllToAttended.emit(id);
  }

  public sendAllToTrash(id: number): void {
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

  public filterProfiles(filterValue: string): any {
    if(filterValue) {
      filterValue = filterValue.trim();
      filterValue = filterValue.toLowerCase();
      this.dataSource.filter = filterValue;
    }
  }

  public openServiceModal(element: any) {
    this.modalService.open(ModalComponent, {myPropertyModal: element});
    // console.log( 'aeeeee', element);
    // const dialogRef = this.dialog.open(ModalComponent, {
    //   position: { top: '6%' },
    //   data: { data: element }
    // });
  }

    
}
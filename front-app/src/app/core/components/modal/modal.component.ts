import { Component, Inject } from '@angular/core';
import { MzBaseModal, MzModalComponent } from 'ngx-materialize';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent extends MzBaseModal{

  public profile: object;
  
  constructor(public dialogRef: MatDialogRef<ModalComponent>,@Inject(MAT_DIALOG_DATA) public data: object){
    super();
  }

  ngOnInit(): void {
    this.profile = this.data;
    console.log('bbbbbbbb', this.profile)
  }
    
}
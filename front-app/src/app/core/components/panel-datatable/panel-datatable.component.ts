import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-datatable',
  templateUrl: './panel-datatable.component.html',
  styleUrls: ['./panel-datatable.component.css']
})
export class PanelDatatableComponent implements OnInit {

  @Input() textShowTable: string = '';
  @Input() data = []; 
  public profileAll: any = [];

  public validationAll: boolean = false;
  public validationAttended: boolean = false;
  public validationTrash: boolean = false;

  constructor(){}

  ngOnInit(): void {
    if(this.textShowTable == ''){
      this.validationAll = true;
    }
    
  }


  ngOnChanges(changes): void {
    if(this.data.length > 0){
      this.profileAll = this.data;
      // console.log(this.profileAll);
    }
  }

}
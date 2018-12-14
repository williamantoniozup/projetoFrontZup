import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-panel-all-datatable',
  templateUrl: './panel-all-datatable.component.html',
  styleUrls: ['./panel-all-datatable.component.css']
})
export class PanelAllDatatableComponent implements OnChanges{

  @Input() data = []; 
  public profileAll: any = [];

  ngOnChanges(changes): void {
    if(this.data.length > 0){
      console.log(this.data);
      console.log(this.data[1]['name'].first) 
      // this.profileAll = 
    }
  }
}
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
      this.profileAll = this.data;
      console.log(this.profileAll);
    }
  }
}




// profileObject.imgProfile = profile['picture'].thumbnail;
//             profileObject.name = profile['name'].first;
//             profileObject.email = profile.email;
//             profileObject.phone = profile.phone;
//             profileObject.city = profile['location'].city;
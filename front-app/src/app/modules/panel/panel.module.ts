import { NgModule } from '@angular/core';
import { PanelDatatableComponent } from 'src/app/core/components/panel-datatable/panel-datatable.component';
import { ModalComponent } from 'src/app/core/components/modal/modal.component';


@NgModule({
    declarations: [
     
      PanelDatatableComponent,
      ModalComponent,
   
    ],
    imports: [
    ],
    bootstrap: [PanelModule]
  })
  export class PanelModule { }
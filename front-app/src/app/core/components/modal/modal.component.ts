import { Component } from '@angular/core';
import { MzBaseModal, MzModalComponent } from 'ngx-materialize';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent extends MzBaseModal{
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-error-generic',
  templateUrl: './error-generic.component.html',
  styleUrls: ['./error-generic.component.css']
})
export class ErrorGenericComponent {
    
    public hasErrorMessage: boolean = false;
    constructor(){ }  
    
}
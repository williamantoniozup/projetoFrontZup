import { Component } from '@angular/core';
import { GenericSandboxService } from './services/generic-sandbox.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  public textSearchFather: string;

  constructor(private _sandbox: GenericSandboxService){}
  

  public filterText(text: string){
    this.textSearchFather = text;
  }

  public clearSearchTextInput(hasClearText: boolean){
    if(hasClearText) this._sandbox.clearInputSearch(hasClearText);
  }
}

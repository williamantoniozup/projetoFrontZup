import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  public textSearchFather: string;
  

  public filterText(text: string){
    this.textSearchFather = text;
  }
}

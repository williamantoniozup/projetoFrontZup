import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  @Output()
  public sendIndexMenu: EventEmitter<string> = new EventEmitter();

  public getIndexMenuAll(){
    this.sendIndexMenu.emit('all');
    console.log("menu ALL")
  }

  public getIndexMenuAttended(){
    console.log("menu Attended")
  }

  public getIndexMenuTrash(){
    console.log("menu Trash")
  }
}
import { PanelTrashComponent } from './modules/panel/panel-trash/panel-trash.component';
import { PanelAttendedComponent } from './modules/panel/panel-attended/panel-attended.component';
import { PanelAllComponent } from './modules/panel/panel-all/panel-all.component';
import { ModalComponent } from './core/components/modal/modal.component';
import { PanelDatatableComponent } from './core/components/panel-datatable/panel-datatable.component'
import { MenuComponent } from './modules/menu/menu.component';
import { HeaderComponent } from './modules/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PanelComponent } from './modules/panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    PanelComponent,
    PanelDatatableComponent,
    ModalComponent,
    PanelAllComponent,
    PanelAttendedComponent,
    PanelTrashComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

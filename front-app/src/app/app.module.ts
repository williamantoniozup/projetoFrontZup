import { GenericSandboxService } from './services/generic-sandbox.service';
import { HttpClientModule } from '@angular/common/http';
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
import { GenericHttpService } from './services/generic-http.service';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { PanelAllComponent } from './modules/panel-all/panel-all.component';
import { PanelAttendedComponent } from './modules/panel-attended/panel-attended.component';
import { PanelTrashComponent } from './modules/panel-trash/panel-trash.component';
import { PanelTrashDatatableComponent } from './modules/panel-trash/panel-trash-datatable/panel-trash-datatable.component';
import { PanelAllDatatableComponent } from './modules/panel-all/panel-all-datatable/panel-all-datatable.component';
import { PanelAttendedDatatableComponent } from './modules/panel-attended/panel-attended-datatable/panel-attended-datatable.component';

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
    PanelTrashComponent,
    PanelTrashDatatableComponent,
    PanelAllDatatableComponent,
    PanelAttendedDatatableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    GenericHttpService,
    GenericSandboxService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

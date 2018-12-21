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
import { MzModalModule, MzPaginationModule  } from 'ngx-materialize'
import { FlexLayoutModule } from '@angular/flex-layout';
import { DataTablesModule } from 'angular-datatables';
import { MatTableModule, MatPaginatorModule, MatDialogModule } from "@angular/material";

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

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MzModalModule,
    DataTablesModule,
    MzPaginationModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    RouterModule.forRoot(ROUTES),
    FlexLayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  providers: [
    GenericHttpService,
    GenericSandboxService
  ],
  entryComponents: [
    ModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

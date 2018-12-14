import { Routes } from '@angular/router';
import { PanelAllComponent } from './modules/panel-all/panel-all.component';
import { PanelAttendedComponent } from './modules/panel-attended/panel-attended.component';
import { PanelTrashComponent } from './modules/panel-trash/panel-trash.component';

export const ROUTES: Routes = [
    { path: '', redirectTo: 'allprofiles', pathMatch:'full'},
    { path: 'allprofiles', component: PanelAllComponent},
    { path: 'attended', component: PanelAttendedComponent},
    { path: 'trash', component: PanelTrashComponent}
];
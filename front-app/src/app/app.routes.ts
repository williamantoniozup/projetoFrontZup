
import { Routes } from '@angular/router';
import { PanelComponent } from './modules/panel/panel.component';
import { PanelAllComponent } from './modules/panel-all/panel-all.component';
import { PanelAttendedComponent } from './modules/panel-attended/panel-attended.component';
import { PanelTrashComponent } from './modules/panel-trash/panel-trash.component';

export const ROUTES: Routes = [
    { path:'', component: PanelComponent},
    { path: 'all', component: PanelAllComponent},
    { path: 'attended', component: PanelAttendedComponent},
    { path: 'trash', component: PanelTrashComponent}
];
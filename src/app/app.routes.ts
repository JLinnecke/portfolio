import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { MainContentComponent } from './main-content/main-content.component';

export const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'menu', component: MenuComponent }
];

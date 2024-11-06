import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
];

export const AppRoutingModule = RouterModule.forRoot(routes);

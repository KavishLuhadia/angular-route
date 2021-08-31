import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponentComponent } from './settings-component/settings-component.component';

const routes: Route[] = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home' , component: HomeComponentComponent },
  {path: 'settings', component: SettingsComponentComponent, children :[
        {path: 'profile', component: ProfileComponent},
        {path: 'account', component: AccountComponent},
        {path: '', redirectTo: 'account', pathMatch: 'full' }

  ]
      


},
  {path: '**', component: PageNotFoundComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// angular modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// auth-module components
import { AuthComponent } from './auth-module/auth-module.component';
import { LoginComponent } from './auth-module/login/login.component';
import { RegisterComponent } from './auth-module/register/register.component';

// nav-module components
import { NavComponent } from './nav-module/nav-module.component';
import { NavigationComponent } from './nav-module/navigation/navigation.component';
import { SettingsComponent } from './nav-module/settings-module/settings/settings.component';
import { ProfileComponent } from './nav-module/profile-module/profile/profile.component';

// our components
import { NotFoundComponent } from './../shared-module/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: ''
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'nav',
    pathMatch: 'full'
  },
  {
    path: 'nav',
    component: NavComponent,
    children: [
      {
        path: '404',
        component: NotFoundComponent,
      },
      {
        path: '',
        redirectTo: 'navigation',
        pathMatch: ''
      },
      {
        path: 'navigation',
        component: NavigationComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule],
  providers: []
})
export class FeaturesRoutingModule { }

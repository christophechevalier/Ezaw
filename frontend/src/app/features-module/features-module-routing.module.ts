// angular modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// our components
import { AuthComponent } from './auth-module/auth-module.component';
import { LoginComponent } from './auth-module/login/login.component';
import { RegisterComponent } from './auth-module/register/register.component';

import { NavComponent } from './nav-module/nav-module.component';
import { NavigationComponent } from './nav-module/navigation/navigation.component';

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
        path: '',
        redirectTo: 'navigation',
        pathMatch: ''
      },
      {
        path: 'navigation',
        component: NavigationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule],
  providers: []
})
export class FeaturesRoutingModule { }

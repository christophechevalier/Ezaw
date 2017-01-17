// angular modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// nav-module components
import { NavComponent } from './nav-module/nav-module.component';
import { NavigationComponent } from './nav-module/navigation/navigation.component';
import { SettingsComponent } from './nav-module/settings-module/settings/settings.component';
import { ProfileComponent } from './nav-module/profile-module/profile/profile.component';

// our components
import { NotFoundComponent } from './../shared-module/components/not-found/not-found.component';

// our guards
// import { AuthGuardService } from './../shared-module/services/auth-guard.service';
// import { AlreadyLoggedGuardService } from './../shared-module/services/already-logged-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'nav/navigation',
    pathMatch: 'full'
  },
  {
    path: 'login',
    // canActivate: [AlreadyLoggedGuardService],
    loadChildren: 'app/features-module/auth-module/auth-module.module#AuthModule'
  },
  {
    path: 'nav',
    component: NavComponent,
    // canActivate: [AuthGuardService],
    children: [
      {
        path: '404',
        component: NotFoundComponent,
      },
      {
        path: '',
        redirectTo: 'navigation',
        pathMatch: 'full'
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

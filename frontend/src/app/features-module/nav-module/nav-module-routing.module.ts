/*// angular modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// our modules


// our components
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent
/!*    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'workspaces'
      },
      {
        path: 'workspaces',
        loadChildren: () => WorkspacesRoutingModule
      }
    ]*!/
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class NavRoutingModule { }*/

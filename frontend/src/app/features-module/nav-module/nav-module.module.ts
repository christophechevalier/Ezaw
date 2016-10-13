// angular modules
import { NgModule } from '@angular/core';
import { NavComponent } from './nav-module.component';

// our modules
import { SharedModule } from '../../shared-module/shared-module.module';
import { ProfileModule } from './profile-module/profile-module.module';

// our components
import { NavigationComponent } from './navigation/navigation.component';

// our routes
import { RouterModule } from '@angular/router';

// google maps
import { AgmCoreModule } from 'angular2-google-maps/core';
import { ProfileModuleComponent } from './profile-module/profile-module.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBrTxwdypG6uUnm3hxb_ZtGh8niBD0aHww'
    }),
    ProfileModule
  ],
  declarations: [
    NavComponent,
    NavigationComponent,
    ProfileModuleComponent,
    SettingsComponent
  ],
  exports: [
    NavComponent,
    NavigationComponent
  ]
})
export class NavModule { }

// angular modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// our modules
import { SharedModule } from '../../shared-module/shared-module.module';
import { ProfileModule } from './profile-module/profile-module.module';
import { MarkerModule } from './marker-module/marker-module.module';
import { SettingsModule } from './settings-module/settings-module.module';

// our components
import { NavigationComponent } from './navigation/navigation.component';
import { NavComponent } from './nav-module.component';

// google maps
import { AgmCoreModule } from 'angular2-google-maps/core';

const NAV_COMPONENTS = [
  NavigationComponent,
  NavComponent
];

const NAV_MODULES = [
  SharedModule,
  RouterModule,
  AgmCoreModule.forRoot({
    apiKey: 'AIzaSyBrTxwdypG6uUnm3hxb_ZtGh8niBD0aHww'
  }),
  ProfileModule,
  MarkerModule,
  SettingsModule
];

@NgModule({
  imports: [
    ...NAV_MODULES
  ],
  declarations: [
    ...NAV_COMPONENTS
  ],
  exports: [
    ...NAV_COMPONENTS
  ],
  providers: []
})
export class NavModule { }

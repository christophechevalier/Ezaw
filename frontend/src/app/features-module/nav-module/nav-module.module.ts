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
import { SettingsComponent } from './settings/settings.component';
import { provideLazyMapsAPILoaderConfig } from 'angular2-google-maps/core/services/maps-api-loader/lazy-maps-api-loader';


@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    AgmCoreModule.forRoot(),
    ProfileModule
  ],
  declarations: [
    NavComponent,
    NavigationComponent,
    SettingsComponent
  ],
  exports: [
    NavComponent,
    NavigationComponent
  ],
  providers: [
    provideLazyMapsAPILoaderConfig({apiKey: 'AIzaSyBrTxwdypG6uUnm3hxb_ZtGh8niBD0aHww'})
  ]
})
export class NavModule { }

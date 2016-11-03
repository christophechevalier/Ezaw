// angular modules
import { NgModule } from '@angular/core';
import { FeatureComponent } from './features-module.component';

// our modules
import { AuthModule } from './auth-module/auth-module.module';
import { NavModule } from './nav-module/nav-module.module';
import { SharedModule } from '../shared-module/shared-module.module';
import { ItineraryModule } from './nav-module/itinerary-module/itinerary-module.module';

// our routes
import { FeaturesRoutingModule } from './features-module-routing.module';

@NgModule({
  imports: [
    SharedModule,

    // routes
    FeaturesRoutingModule,

    // our modules
    AuthModule,
    NavModule,
    ItineraryModule
  ],
  declarations: [
    FeatureComponent
  ],
  exports: [
    FeatureComponent
  ]
})
export class FeatureModule { }

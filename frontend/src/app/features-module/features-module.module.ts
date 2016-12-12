// angular modules
import { NgModule } from '@angular/core';

// component
import { FeatureComponent } from './features-module.component';

// our modules
import { AuthModule } from './auth-module/auth-module.module';
import { NavModule } from './nav-module/nav-module.module';
import { SharedModule } from '../shared-module/shared-module.module';
import { ItineraryModule } from './nav-module/itinerary-module/itinerary-module.module';
import { MarkerModule } from './nav-module/marker-module/marker-module.module';
import { FeaturesRoutingModule } from './features-module-routing.module';

const FEATURES_MODULES = [
  SharedModule,
  // routes
  FeaturesRoutingModule,
  AuthModule,
  NavModule,
  ItineraryModule,
  MarkerModule
];

@NgModule({
  imports: [
    ...FEATURES_MODULES
  ],
  declarations: [
    FeatureComponent
  ],
  exports: [
    FeatureComponent
  ]
})
export class FeatureModule { }

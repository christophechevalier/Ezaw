// angular modules
import { NgModule } from '@angular/core';

// component
import { FeatureComponent } from './features-module.component';

// our modules
import { AuthModule } from './auth-module/auth-module.module';
import { NavModule } from './nav-module/nav-module.module';
import { SharedModule } from '../shared-module/shared-module.module';
import { MarkerModule } from './nav-module/marker-module/marker-module.module';

// our routes
import { FeaturesRoutingModule } from './features-module-routing.module';

const FEATURES_MODULES = [
  SharedModule,
  // routes
  FeaturesRoutingModule,
  AuthModule,
  NavModule,
  MarkerModule
];

@NgModule({
  imports: [
    SharedModule,
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

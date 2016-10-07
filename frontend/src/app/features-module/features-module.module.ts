// angular modules
import { NgModule } from '@angular/core';
import { FeatureComponent } from './features-module.component';

// our modules
import { AuthModule } from './auth-module/auth-module.module';
import { SharedModule } from '../shared-module/shared-module.module';

// our routes
import { FeaturesRoutingModule } from './features-module-routing.module';

@NgModule({
  imports: [
    SharedModule,

    // routes
    FeaturesRoutingModule,

    // our modules
    AuthModule
  ],
  declarations: [
    FeatureComponent
  ],
  exports: [
    FeatureComponent
  ]
})
export class FeatureModule { }

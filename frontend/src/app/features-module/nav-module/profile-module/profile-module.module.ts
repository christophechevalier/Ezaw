// angular modules
import { NgModule } from '@angular/core';

// our modules
import { SharedModule } from '../../../shared-module/shared-module.module';

// our components
import { ProfileModuleComponent } from './profile-module.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ProfileComponent,
    ProfileModuleComponent
  ],
  exports: [
    ProfileComponent,
    ProfileModuleComponent
  ]
})
export class ProfileModule { }

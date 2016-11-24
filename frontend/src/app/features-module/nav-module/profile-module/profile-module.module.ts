// angular modules
import { NgModule } from '@angular/core';

// our modules
import { SharedModule } from '../../../shared-module/shared-module.module';

// our components
import { ProfileModuleComponent } from './profile-module.component';
import { ProfileComponent } from './profile/profile.component';

const PROFILE_COMPONENTS = [
  ProfileModuleComponent,
  ProfileComponent
];

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ...PROFILE_COMPONENTS
  ],
  exports: [
    ...PROFILE_COMPONENTS
  ]
})
export class ProfileModule { }

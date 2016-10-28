// angular modules
import { NgModule } from '@angular/core';

// our modules
import { SharedModule } from '../../../shared-module/shared-module.module';

// our components
import { ProfileModuleComponent } from './profile-module.component';
import { ProfileComponent } from './profile/profile.component';

// our service
import { DialogsService } from '../../../shared-module/services/dialogs.service';

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
  ],
  providers: [
    DialogsService
  ],
  entryComponents: [
    ProfileComponent
  ],
})
export class ProfileModule { }

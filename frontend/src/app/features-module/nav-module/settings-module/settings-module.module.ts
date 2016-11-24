// angular modules
import { NgModule } from '@angular/core';

// our modules
import { SharedModule } from '../../../shared-module/shared-module.module';

// our components
import { SettingsModuleComponent } from './settings-module.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    SettingsComponent,
    SettingsModuleComponent
  ],
  exports: [
    SettingsComponent,
    SettingsModuleComponent
  ]
})
export class SettingsModule { }

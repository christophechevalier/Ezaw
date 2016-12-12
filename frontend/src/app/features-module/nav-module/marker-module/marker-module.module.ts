// angular module
import { NgModule } from '@angular/core';

// our modules
import { SharedModule } from '../../../shared-module/shared-module.module';

// our components
import { MarkerModuleComponent } from './marker-module.component';
import { MarkerComponent } from './marker/marker.component';
import { MarkerDetailComponent } from './marker-detail/marker-detail.component';

// service
import { MarkerService } from '../../../shared-module/services/marker.service';

const MARKER_COMPONENTS = [
  MarkerModuleComponent,
  MarkerComponent,
  MarkerDetailComponent
];

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ...MARKER_COMPONENTS
  ],
  exports: [
    ...MARKER_COMPONENTS
  ],
  providers: [
    MarkerService
  ]
})
export class MarkerModule { }

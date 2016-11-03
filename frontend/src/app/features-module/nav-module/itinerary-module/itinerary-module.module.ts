// angular modules
import { NgModule } from '@angular/core';

// our modules
import { SharedModule } from '../../../shared-module/shared-module.module';

// our components
import { ItineraryModuleComponent } from './itinerary-module.component';
import { ItineraryComponent } from './itinerary/itinerary.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ItineraryComponent,
    ItineraryModuleComponent
  ],
  exports: [
    ItineraryComponent,
    ItineraryModuleComponent
  ]
})
export class ItineraryModule { }

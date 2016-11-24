// angular module
import { NgModule } from '@angular/core';

// our modules
import { SharedModule } from '../../../shared-module/shared-module.module';

// our components
import { ItineraryModuleComponent } from './itinerary-module.component';
import { ItineraryComponent } from './itinerary/itinerary.component';

const ITINERARY_COMPONENTS = [
  ItineraryModuleComponent,
  ItineraryComponent
];

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ...ITINERARY_COMPONENTS
  ],
  exports: [
    ...ITINERARY_COMPONENTS
  ]
})
export class ItineraryModule { }

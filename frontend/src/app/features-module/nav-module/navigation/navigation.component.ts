import { Component } from '@angular/core';

import { IMarker } from '../../../shared-module/interfaces/marker.interface';

import { MouseEvent} from 'angular2-google-maps/core';









@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent{

  zoom: number = 15;
  lat: number = 43.548317;
  lng: number = 1.502877;

  constructor(public markers: IMarker[] = []) { }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  mapClicked($event: MouseEvent) {
    this.markers.push(<IMarker>{
      lat: $event.coords.lat,
      lng: $event.coords.lng
    });
  }

  markerDragEnd(m: IMarker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

}

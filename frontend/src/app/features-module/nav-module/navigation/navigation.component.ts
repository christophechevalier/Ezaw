// angular module
import { Component } from '@angular/core';

// Interfaces
import { IMarker } from '../../../shared-module/interfaces/marker.interface';
// import { ILocation } from '../../../shared-module/interfaces/location.interface';

// Google Map
import { MouseEvent } from 'angular2-google-maps/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent {

  public markers: IMarker[] = [];

  zoom: number = 15;
  lat: number = 43.548317;
  lng: number = 1.502877;
  showMap = true;

  constructor() { }

  clickedMarker(index: number) {
    this.markers.splice(index, 1);
  }

  mapClicked($event: MouseEvent) {
    this.markers.push(<IMarker>{
      lat: $event.coords.lat,
      lng: $event.coords.lng
    });
  }
}

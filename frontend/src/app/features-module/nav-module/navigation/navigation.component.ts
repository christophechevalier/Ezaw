// angular module
import { Component, OnInit } from '@angular/core';

// Interfaces
import { IMarker } from '../../../shared-module/interfaces/marker.interface';

// Google Map
import { MouseEvent } from 'angular2-google-maps/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
  public currentPosLat: number;
  public currentPosLng: number;
  public markers: IMarker[] = [];

  zoom: number = 12;
  showMap = true;
  centerLat: number = 43.548317;
  centerLng: number = 1.502877;

  constructor() { }

  ngOnInit() {
    this.initGeoLocation();
  }

  mapClicked($event: MouseEvent) {
    this.markers.push(<IMarker>{
      label: `New Marker`,
      coordinates: {
        lat: $event.coords.lat,
        lng: $event.coords.lng
      },
      draggable: true
    });
  }

  markerDragEnd($event: MouseEvent) {
    console.log('Position of the marker updated after drag: ' + '\n', $event);
  }

  clickedMarker(m: IMarker, label: string) {
    console.log(`Clicked on the marker: ${label, m}`)
  }

  initGeoLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.currentPosLat = position.coords.latitude;
        this.currentPosLng = position.coords.longitude;

        this.markers.push(<IMarker>{
          label: 'User Position Marker',
          coordinates: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          },
          draggable: false
        });
        console.log('User Current Position: ' + '\n' + '- Lat: ' + this.currentPosLat + '\n' + '- Lng: ' + this.currentPosLng);
      });
    }
  }
}

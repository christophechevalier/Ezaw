import {Component, ViewChild } from '@angular/core';

// Interfaces
import { IMarker } from '../../../shared-module/interfaces/marker.interface';
// import { ILocation } from '../../../shared-module/interfaces/location.interface';

// Google Map
import * as mapTypes from 'angular2-google-maps/core/services/google-maps-types';
import { MouseEvent } from 'angular2-google-maps/core';
import { LatLngBounds } from 'angular2-google-maps/core/services/google-maps-types';
import { SebmGoogleMap } from 'angular2-google-maps/core/directives/google-map';
import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core/services';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent {
  @ViewChild(SebmGoogleMap) private map: SebmGoogleMap;
  public markers: IMarker[] = [];

  zoom: number = 15;
  lat: number = 43.548317;
  lng: number = 1.502877;

  showMap = true;
  bounds: LatLngBounds;
  ready: Promise<void>;

  private _readyResolver;
  private _googMap: mapTypes.GoogleMap;

  constructor() {
    // Promise
    this.ready = new Promise<void>(
      (resolve, reject) => this._readyResolver = resolve
    );
    /*    navigator.geolocation.getCurrentPosition(function(position) {
     this.lat = position.coords.latitude;
     this.lng = position.coords.longitude;
     });*/
  }

  getNativeMap(): Promise<mapTypes.GoogleMap> {
    // call from this.ready().then()
    if (this._googMap) {
      return Promise.resolve(this._googMap);
    }

    console.log(`map, keys=${Object.keys(this.map._mapsWrapper._map)}`);
    let googMapApiWrapper: GoogleMapsAPIWrapper  = this.map._mapsWrapper;
    // find google.map object
    return googMapApiWrapper.getNativeMap()
      .then((map: mapTypes.GoogleMap) => {
        // console.log("getNativeMap() resolved");
        // console.log(`google.map, keys=${Object.keys(map)}`);
        return this._googMap = map;
      })
      .catch( (err) => {
        // console.log("catch GoogleMapsAPIWrapper.getNativeMap()");
        return Promise.reject(err);
      });
  }

  onIdle() {
    // mapReady
    this._readyResolver();
  }

  clickedMarker(label: string, index: number) {
    // console.log(`clicked the marker: ${label || index}`);
    this.markers.splice(index, 1);
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

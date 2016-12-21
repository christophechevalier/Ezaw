// angular modules
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

// rxjs
import { Observable } from 'rxjs';

// our interfaces
import { IStore } from './../../shared-module/interfaces/store.interface';
import {
  IMarker,
  IMarkers,
  INavigationRecord,
  ETypeMarkers,
  EControls,
  EControlPolices,
  EControlAccidents,
  EControlTrafficJams,
  EControlWarnings,
  EWarnings,
  EControlFavorites,
  EOnTheRoadCauses,
  ESideRoadCauses,
  EWeatherCauses
} from './../../shared-module/interfaces/navigation.interface';

// http interceptor
import { InterceptorService } from 'ng2-interceptors';

// our environment
import { environment } from '../../../environments/environment';

// our helpers
import { generateUuidV4 } from '../../shared-module/helpers/helper';

// description of markers buttons
import { Marker } from '../../features-module/nav-module/marker-module/marker/marker';

// generate marker
import { generateMarker } from './../helpers/helper';

@Injectable()
export class MarkerService {
  public marker: IMarker;
  public currentPosLat: number;
  public currentPosLng: number;
  public markers: IMarker[] = [];

  constructor(private http: InterceptorService) { }

// Todo: Remove Javascript Object assign & use typescript Object
/*  this.initGeoLocation(currentPosLat, currentPosLng);
  this.markers.push({
    ...generateMarker(m, currentPosLat, currentPosLng),
    title: 'Details marker accident :',
    label: 'Marker Accident',
    typeMarker: ETypeMarkers.Accident,
    control: null,
    warning: null
  })
  break;*/

  // Add new marker with all details
  addMarker(mkType: ETypeMarkers, currentPosLat: number, currentPosLng: number) {
    console.log(mkType, 'is added');
    switch (mkType) {
      case (ETypeMarkers.Police):
        this.initGeoLocation(currentPosLat, currentPosLng);
        this.markers.push(Object.assign(
          generateMarker(mkType, currentPosLat, currentPosLng),
          {
            icon: 'assets/img/markers/police.png',
            title: 'Details marker police :',
            label: 'Marker Police',
            typeMarker: ETypeMarkers.Police,
            control: null,
            warning: null,
            isFetchingDetails: true
          }
        ));
        break;
      case (ETypeMarkers.Accident):
        this.initGeoLocation(currentPosLat, currentPosLng);
        this.markers.push(Object.assign(
          generateMarker(mkType, currentPosLat, currentPosLng),
          {
            icon: 'assets/img/markers/accident.png',
            title: 'Details marker accident :',
            label: 'Marker Accident',
            typeMarker: ETypeMarkers.Accident,
            control: null,
            warning: null,
            isFetchingDetails: true
          }
        ));
        break;
      case (ETypeMarkers.TrafficJam):
        this.initGeoLocation(currentPosLat, currentPosLng);
        this.markers.push(Object.assign(
          generateMarker(mkType, currentPosLat, currentPosLng),
          {
            icon: 'assets/img/markers/traffic_jam.png',
            title: 'Details marker traffic jam :',
            label: 'Marker Traffic Jam',
            typeMarker: ETypeMarkers.TrafficJam,
            control: null,
            warning: null,
            isFetchingDetails: true
          }
        ));
        break;
      case (ETypeMarkers.Warning):
        this.initGeoLocation(currentPosLat, currentPosLng);
        this.markers.push(Object.assign(
          generateMarker(mkType, currentPosLat, currentPosLng),
          {
            icon: 'assets/img/markers/danger.png',
            title: 'Details marker warning :',
            label: 'Marker Warning',
            typeMarker: ETypeMarkers.Warning,
            control: null,
            warning: null,
            isFetchingDetails: true
          }
        ));
        break;

      default: this.initGeoLocation(currentPosLat, currentPosLng);
    }
  }

  currentUserPosition(mkType, currentPosLat, currentPosLng) {
    this.initGeoLocation(currentPosLat, currentPosLng);
    // console.log('User Current Position : ' + '\n' + '- Type: ' + mkType + '\n' + '- Lat: ' + currentPosLat + '\n' + '- Lng: ' + currentPosLng);
    this.markers.push(Object.assign(
      generateMarker(mkType, currentPosLat, currentPosLng),
      {
        icon: 'assets/img/markers/baby.png',
        title: 'Details current position :',
        label: 'Current User Position',
        typeMarker: ETypeMarkers.User,
        control: null,
        warning: null,
        isFetchingDetails: true
      }
    ));
  }

  // getCurrentPosition with refresh position in real time
  initGeoLocation(currentPosLat: number, currentPosLng: number) {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(position => {
        this.currentPosLat = position.coords.latitude;
        this.currentPosLng = position.coords.longitude;
      });
    // console.log('Coordinates : ' + '\n' + '- Lat: ' + this.currentPosLat + '\n' + '- Lng: ' + this.currentPosLng)
    }
  }

  // Get the icons markers of sidenav markers
  getMarkers() {
    console.log('Getting markers for sidenav right');
    return this.http.get('../../../mocks-json/markers.json')
      .map((response: Response) => <Marker[]>response.json().data);
  }
}

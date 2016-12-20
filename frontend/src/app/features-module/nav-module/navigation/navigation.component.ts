// angular module
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// nrgx
import { Store } from '@ngrx/store';

// rxjs
import { Subscription } from 'rxjs';

// our interfaces
import { IStore } from './../../../shared-module/interfaces/store.interface';
import {
  IMarker,
  IMarkers,
  INavigationRecord,
  ETypeMarkers,
  EControlPolices,
  EControlAccidents,
  EControlTrafficJams,
  EControlWarnings,
  EControlFavorites,
  EOnTheRoadCauses,
  ESideRoadCauses,
  EWeatherCauses
 } from './../../../shared-module/interfaces/navigation.interface';

// Google Map
import { MouseEvent } from 'angular2-google-maps/core';

// our helpers
import { generateUuidV4 } from '../../../shared-module/helpers/helper';

// service
import { MarkerService } from './../../../shared-module/services/marker.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit, OnDestroy {
  public marker: IMarker;
  private markerSub: Subscription;

  public currentPosLat: number;
  public currentPosLng: number;
  public markers: IMarker[] = [];

  // public markers: IMarkers[];

  public zoom: number = 12;
  public showMap = true;
  public centerLat: number = 43.548317;
  public centerLng: number = 1.502877;

  constructor(
    private store$: Store<IStore>,
    private router: Router,
    private route: ActivatedRoute,
    private markerService: MarkerService
  ) {
    this.markerSub =
      store$.select('marker')
        .map((navigationR: INavigationRecord) => navigationR)
        .subscribe((marker: IMarker) => this.marker = marker);
  }

  ngOnInit() {
    this.markerSub =
      this.route.params.subscribe(params => {

      });

    this.markerService.initGeoLocation(this.currentPosLat, this.currentPosLng);
  }

  ngOnDestroy() {
    this.markerSub.unsubscribe();
  }

  markerDragEnd($event: MouseEvent) {
    console.log('Position of the marker updated after drag: ' + '\n', $event);
  }

  clickedMarker(m: IMarker) {
    console.log(`Clicked on the marker: ${ m }`);
  }

  // addMarkerPolice($event: MouseEvent, m: IMarker) {
  //   this.initGeoLocation();
  //   this.markers.push(<IMarker> {
  //     id: generateUuidV4(),
  //     title: 'Details marker police :',
  //     label: 'Marker Police',
  //     lat: this.currentPosLat,
  //     lng: this.currentPosLng,
  //     duration: null,
  //     draggable: false,
  //     typeMarker: ETypeMarkers.Police,
  //     controlPolices: null
  //   });
  // }

  // addMarkerAccident($event: MouseEvent, m: IMarker) {
  //   this.initGeoLocation();
  //   this.markers.push(<IMarker> {
  //     id: generateUuidV4(),
  //     title: 'Details marker accident :',
  //     label: 'Marker Accident',
  //     lat: this.currentPosLat,
  //     lng: this.currentPosLng,
  //     duration: null,
  //     draggable: false,
  //     typeMarker: ETypeMarkers.Accident,
  //     controlAccidents: null
  //   });
  // }

  // addMarkerTrafficJam($event: MouseEvent, m: IMarker) {
  //   this.initGeoLocation();
  //   this.markers.push(<IMarker> {
  //     id: generateUuidV4(),
  //     title: 'Details marker traffic jam :',
  //     label: 'Marker Traffic Jam',
  //     lat: this.currentPosLat,
  //     lng: this.currentPosLng,
  //     duration: null,
  //     draggable: false,
  //     typeMarker: ETypeMarkers.TrafficJam,
  //     controlTrafficJams: null
  //   });
  // }

  // addMarkerWarning($event: MouseEvent, m: IMarker) {
  //   this.initGeoLocation();
  //   this.markers.push(<IMarker> {
  //     id: generateUuidV4(),
  //     title: 'Details marker warning :',
  //     label: 'Marker Traffic Jam',
  //     lat: this.currentPosLat,
  //     lng: this.currentPosLng,
  //     duration: null,
  //     draggable: false,
  //     typeMarker: ETypeMarkers.Warning,
  //     controlWarnings: null,
  //     onTheRoadCauses: null,
  //     sideRoadCauses: null,
  //     weatherCauses: null
  //   });
  // }

  // getCurrentPosition with refresh position in real time
  // initGeoLocation() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.watchPosition(position => {
  //       this.currentPosLat = position.coords.latitude;
  //       this.currentPosLng = position.coords.longitude;

  //       this.markers.push(<IMarker> {
  //         id: generateUuidV4(),
  //         title: 'Details marker user location :',
  //         label: 'Marker User',
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude,
  //         duration: null,
  //         draggable: false,
  //         typeMarker: ETypeMarkers.User
  //       });
  //       console.log('User Current Position: ' + '\n' + '- Lat: ' + this.currentPosLat + '\n' + '- Lng: ' + this.currentPosLng);
  //     });
  //   }
  // }
}

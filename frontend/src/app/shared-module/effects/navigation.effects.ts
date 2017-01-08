// angular modules
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

// rxjs
import { Observable, Subscription } from 'rxjs';
import 'rxjs/add/observable/fromPromise';

// ngrx
import { Store, Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

// our environment
import { environment } from './../../../environments/environment';

// our services
import { NavigationService } from './../services/navigation.service';
import { MarkerService } from './../services/marker.service';


// our interfaces
import { IStore } from './../interfaces/store.interface';
import {
  IMarker,
  IMarkers,
  INavigationList,
  ETypeMarkers,
  EControls,
  EWarnings,
  EControlPolices,
  EControlAccidents,
  EControlTrafficJams,
  EControlWarnings,
  EControlFavorites,
  EOnTheRoadCauses,
  ESideRoadCauses,
  EWeatherCauses
} from './../interfaces/navigation.interface';

// our actions
import { NavigationActions } from './../reducers/navigation.actions';

// our helpers
import { generateUuidV4, generateMarker, getCurrentLocation } from './../helpers/helper';

// description of markers buttons
import { Marker } from './../../features-module/nav-module/marker-module/marker/marker';

import { List } from 'immutable';

@Injectable()
export class NavigationEffects {

  public marker: IMarker;
  public currentPosLat: number;
  public currentPosLng: number;
  public markers: IMarker[] = [];
  public mktype: ETypeMarkers;
  public id: number;


  constructor(
    private actions$: Actions,
    private store$: Store<IStore>,
    private markerService: MarkerService,
    public navigationService: NavigationService,
    private router: Router
  ) { }


  @Effect({ dispatch: true }) NearByAlert$: Observable<Action> = this.actions$
    .ofType(NavigationActions.GET_MARKERS)
    .switchMap(x => this.navigationService.getNearByMarkers(this.currentPosLat, this.currentPosLng)
      .map((res: Response) => {
        if (!res.ok) {
          throw new Error("coucou")
        }
        let listMarkers: List<IMarker> = res.json();
        return { type: NavigationActions.GET_MARKERS_SUCCESS, payload: listMarkers }
      }


      
    ));


// FETCH TYPE MARKER DETAILS
// tslint:disable-next-line:member-ordering
@Effect({ dispatch: true }) fetchDetails$: Observable < Action > = this.actions$
  .ofType(NavigationActions.FETCH_MARKER)
  .switchMap(x => {
    console.log("etape 2");
    let locationPromise = getCurrentLocation().then(pos => {

      let markers = this.navigationService.getNearByMarkers(pos.lat, pos.lng)

      markers
        .map(res => res.json())
        .subscribe(res => {

          for (var i = 0; i < res.length; i++) {
            console.log(res[i]['type'])
          }
          //   for (var i = 0; i < res.length; i++) {
          //     switch(res[i]['type']){
          //       case "POLICE":
          //       console.log("POLICE");
          //       console.log(res[i]['lat'], res[i]['lng']);
          //       let etmP = Object.assign(
          //       generateMarker(res[i]['lat'], res[i]['lng']),
          //       {
          //       lat: res[i]['lat'],
          //       lng: res[i]['lng'],
          //       icon: 'assets/img/markers/police.png',
          //       title: 'Details marker police :',
          //       label: 'Marker Police',
          //       typeMarker: ETypeMarkers.Police,
          //       control: null,
          //       warning: null,
          //       isFetchingDetails: true
          //         }
          //       );
          //       console.log("Moncul");
          //       return { type: NavigationActions.FETCH_MARKER_SUCCESS, payload: etmP };
          //       //break;
          //       case "TRAFFICJAM":
          //       console.log("TRAFFIC")
          //       return { type: NavigationActions.FETCH_MARKER_SUCCESS, payload: etmP };
          //     }
          //  }
        })




      switch (x.payload) {
        case ETypeMarkers.Police:
          let marker = this.markerService.addMarker(pos.lat, pos.lng, ETypeMarkers.Police);
          marker
            .map(res => res.json())
            .subscribe(res => this.id = res[0])
          console.log("console id : " + this.id)
          let etmP = Object.assign(
            generateMarker(pos.lat, pos.lng, this.id),
            {
              lat: pos.lat,
              lng: pos.lng,
              icon: 'assets/img/markers/police.png',
              title: 'Details marker police :',
              label: 'Marker Police',
              typeMarker: ETypeMarkers.Police,
              control: null,
              warning: null,
              isFetchingDetails: true
            }
          );
          //break;
          return { type: NavigationActions.FETCH_MARKER_SUCCESS, payload: etmP };

        case ETypeMarkers.Accident:
          let etmA = (Object.assign(
            generateMarker(pos.lat, pos.lng),
            {
              icon: 'assets/img/markers/accident.png',
              title: 'Accident !!',
              label: 'Marker Accident',
              typeMarker: ETypeMarkers.Accident,
              control: null,
              warning: null,
              isFetchingDetails: true
            }
          ));

          //  break;
          return { type: NavigationActions.FETCH_MARKER_SUCCESS, payload: etmA };

        case ETypeMarkers.TrafficJam:
          console.log('typeMarker :' + ETypeMarkers.TrafficJam)
          let etmT = (Object.assign(
            generateMarker(pos.lat, pos.lng),
            {
              icon: 'assets/img/markers/traffic_jam.png',
              title: 'Traffic Jam !!',
              label: 'Marker Traffic Jam',
              typeMarker: ETypeMarkers.TrafficJam,
              control: null,
              warning: null,
              isFetchingDetails: true
            }
          ));
          //break;  
          return { type: NavigationActions.FETCH_MARKER_SUCCESS, payload: etmT };

        case ETypeMarkers.Warning:
          let etmW = (Object.assign(
            generateMarker(pos.lat, pos.lng),
            {
              icon: 'assets/img/markers/danger.png',
              title: 'Warning !!',
              label: 'Marker Warning',
              typeMarker: ETypeMarkers.Warning,
              control: null,
              warning: null,
              isFetchingDetails: true
            }
          ));
          //break;
          return { type: NavigationActions.FETCH_MARKER_SUCCESS, payload: etmW };

        case ETypeMarkers.User:
          let etmU = (Object.assign(
            generateMarker(pos.lat, pos.lng),
            {
              icon: 'assets/img/markers/tux.png',
              title: 'Current Position !!',
              label: 'Marker User',
              typeMarker: ETypeMarkers.User,
              control: null,
              warning: null,
              isFetchingDetails: true
            }
          ));
          //break;
          return { type: NavigationActions.FETCH_MARKER_SUCCESS, payload: etmU };

        case ETypeMarkers.GasStation:
          let etmG = (Object.assign(
            generateMarker(pos.lat, pos.lng),
            {
              icon: 'assets/img/markers/gas_station.png',
              title: 'Gas Station !!',
              label: 'Marker Gas Station',
              typeMarker: ETypeMarkers.GasStation,
              control: null,
              warning: null,
              isFetchingDetails: true
            }
          ));
          //break;
          return { type: NavigationActions.FETCH_MARKER_SUCCESS, payload: etmW };
        //return null;
      }
    });
    //console.log("loc : "+locationPromise);
    return Observable.fromPromise(locationPromise);

  });




}

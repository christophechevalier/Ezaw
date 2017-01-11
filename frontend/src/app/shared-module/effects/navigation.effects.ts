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

import { navigationRecordFactory } from '../reducers/navigation.state';

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

        let listMarker = navigationRecordFactory;
        console.log("TEST EFFECT");
        if (!res.ok) {
          throw new Error("coucou")
        }
        let listMarkers: List<IMarker> = res.json();
        return { type: NavigationActions.GET_MARKERS_SUCCESS, payload: listMarkers }
      }
      ));

  // FETCH TYPE MARKER DETAILS
  // tslint:disable-next-line:member-ordering
  @Effect({ dispatch: true }) fetchDetails$: Observable<Action> = this.actions$
    .ofType(NavigationActions.FETCH_MARKER)
    .switchMap(x => {

      let locationPromise = getCurrentLocation().then(pos => {

        if (x.payload == ETypeMarkers.Police) {
          this.id = ETypeMarkers.Police
        } else {
          if (x.payload == ETypeMarkers.Accident) {
            this.id = ETypeMarkers.Accident
          } else {
            if (x.payload == ETypeMarkers.TrafficJam) {
              this.id = ETypeMarkers.TrafficJam
            } else {
              if (x.payload == ETypeMarkers.Warning) {
                this.id = ETypeMarkers.Warning
              } else {
                if (x.payload == ETypeMarkers.User) {
                  this.id = ETypeMarkers.User
                } else {
                  if (x.payload == ETypeMarkers.GasStation) {
                    this.id = ETypeMarkers.GasStation
                  }
                }
              }
            }
          }
        }
        let locationpro = this.markerService.addMarker(pos.lat, pos.lng, this.id).then(data => {
          console.log(data)
          if (data == "ko") {
            let etmN = Object.assign(
              generateMarker(null, null, null),
              {
                lat: null,
                lng: null,
                icon: 'assets/img/markers/police.png',
                title: 'Details marker police :',
                label: 'Marker Police',
                typeMarker: ETypeMarkers.Police,
                control: null,
                warning: null,
                isFetchingDetails: true
              }
            );
            return { type: NavigationActions.FETCH_MARKER_ALREADY_EXIST, payload: etmN };
          } else {
            switch (x.payload) {
              case ETypeMarkers.Police:
                let etmP = Object.assign(
                  generateMarker(pos.lat, pos.lng, data),
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
                  generateMarker(pos.lat, pos.lng, data),
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
                return { type: NavigationActions.FETCH_MARKER_SUCCESS, payload: etmA };
              case ETypeMarkers.TrafficJam:
                let etmT = (Object.assign(
                  generateMarker(pos.lat, pos.lng, data),
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
                return { type: NavigationActions.FETCH_MARKER_SUCCESS, payload: etmT };
              case ETypeMarkers.Warning:
                let etmW = (Object.assign(
                  generateMarker(pos.lat, pos.lng, data),
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
                return { type: NavigationActions.FETCH_MARKER_SUCCESS, payload: etmW };
              case ETypeMarkers.User:
                let etmU = (Object.assign(
                  generateMarker(pos.lat, pos.lng, data),
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
                return { type: NavigationActions.FETCH_MARKER_SUCCESS, payload: etmU };
              case ETypeMarkers.GasStation:
                let etmG = (Object.assign(
                  generateMarker(pos.lat, pos.lng, data),
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
                return { type: NavigationActions.FETCH_MARKER_SUCCESS, payload: etmG };
            }
          }
        }); return locationpro
      });
      return Observable.fromPromise(locationPromise);
    });
}

// angular modules
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// rxjs
import { Observable } from 'rxjs';
import 'rxjs/add/observable/fromPromise';

// ngrx
import { Store, Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

// our services
import { NavigationService } from './../services/navigation.service';
import { MarkerService } from './../services/marker.service';

// our interfaces
import { IStore } from './../interfaces/store.interface';
import { IMarker, ETypeMarkers } from './../interfaces/navigation.interface';

// our actions
import { NavigationActions } from './../reducers/navigation.actions';


// our helpers
import { generateMarker, getCurrentLocation } from './../helpers/helper';

// immutable
// import { List } from 'immutable';

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

  @Effect({ dispatch: true }) getNearByAlert$: Observable<Action> = this.actions$
    .ofType(NavigationActions.GET_MARKERS)
    .switchMap(x => {
      let fetchMarkerPromise = new Promise((resolve, reject) => {
        let serverListe = getCurrentLocation().then(pos => {
            this.navigationService.getNearByMarkers(pos.lat, pos.lng)
            .then(res => {
              let markertab: IMarker[] = [];
              for (let a = 0; a < res.length; a++) {
                switch (res[a]['type']) {
                  case '0': markertab.push(<IMarker>{
                    id: res[a]['id'],
                    lat: parseFloat(res[a]['lat']),
                    lng: parseFloat(res[a]['lng']),
                    icon: 'assets/img/markers/police.png',
                    title: 'Police !!',
                    duration: null,
                    draggable: false,
                    typeMarker: ETypeMarkers.Police,
                    control: null,
                    warning: null,
                    isFetchingDetails: false
                  });
                    break;

                  case '1': markertab.push(<IMarker>{
                    id: res[a]['id'],
                    lat: parseFloat(res[a]['lat']),
                    lng: parseFloat(res[a]['lng']),
                    icon: 'assets/img/markers/accident.png',
                    title: 'Accident !!',
                    duration: null,
                    draggable: false,
                    typeMarker: ETypeMarkers.Accident,
                    control: null,
                    warning: null,
                    isFetchingDetails: false
                  });
                    break;

                  case '2': markertab.push(<IMarker>{
                    id: res[a]['id'],
                    lat: parseFloat(res[a]['lat']),
                    lng: parseFloat(res[a]['lng']),
                    icon: 'assets/img/markers/traffic_jam.png',
                    title: 'traffic_jam !!',
                    duration: null,
                    draggable: false,
                    typeMarker: ETypeMarkers.TrafficJam,
                    control: null,
                    warning: null,
                    isFetchingDetails: false
                  });
                    break;

                  case '3': markertab.push(<IMarker>{
                    id: res[a]['id'],
                    lat: parseFloat(res[a]['lat']),
                    lng: parseFloat(res[a]['lng']),
                    icon: 'assets/img/markers/danger.png',
                    title: 'danger !!',
                    duration: null,
                    draggable: false,
                    typeMarker: ETypeMarkers.Warning,
                    control: null,
                    warning: null,
                    isFetchingDetails: false
                  });
                    break;

                  case '4': markertab.push(<IMarker>{
                    id: res[a]['id'],
                    lat: parseFloat(res[a]['lat']),
                    lng: parseFloat(res[a]['lng']),
                    icon: 'assets/img/markers/gas_station.png',
                    title: 'gas_station !!',
                    duration: null,
                    draggable: false,
                    typeMarker: ETypeMarkers.GasStation,
                    control: null,
                    warning: null,
                    isFetchingDetails: false
                  });
                    break;

                  case '5': markertab.push(<IMarker>{
                    id: res[a]['id'],
                    lat: parseFloat(res[a]['lat']),
                    lng: parseFloat(res[a]['lng']),
                    icon: 'assets/img/markers/tux.png',
                    title: 'User !!',
                    duration: null,
                    draggable: false,
                    typeMarker: ETypeMarkers.User,
                    control: null,
                    warning: null,
                    isFetchingDetails: false
                  });
                    break;
                }
                // markertab.push(<IMarker>{
                //   lat : parseFloat(res[a]['lat']),
                // });
              }
              resolve({ type: NavigationActions.GET_MARKERS_SUCCESS, payload: markertab });
            });
          //return response;
        });
      });
      return Observable.fromPromise(fetchMarkerPromise);
    });

  // FETCH TYPE MARKER DETAILS
  // tslint:disable-next-line:member-ordering
  @Effect({ dispatch: true }) fetchDetails$: Observable<Action> = this.actions$
    .ofType(NavigationActions.FETCH_MARKER)
    .switchMap(x => {
      let fetchMarkerPromise = new Promise((resolve, reject) => {
        let locationPromise = getCurrentLocation().then(pos => {
          this.id = x.payload;
          this.markerService.addMarker(pos.lat, pos.lng, this.id).then(data => {
            if (data === 'ko') {
              let etmN = Object.assign(
                generateMarker(null, null, null),
                {
                  lat: null,
                  lng: null,
                  icon: 'assets/img/markers/police.png',
                  title: 'Police !!',
                  label: 'Marker Police',
                  typeMarker: ETypeMarkers.Police,
                  control: null,
                  warning: null,
                  isFetchingDetails: true
                }
              );
              resolve({ type: NavigationActions.FETCH_MARKER_ALREADY_EXIST, payload: etmN });
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
                  resolve({ type: NavigationActions.FETCH_MARKER_SUCCESS, payload: etmP });
                  break;
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
                  resolve({ type: NavigationActions.FETCH_MARKER_SUCCESS, payload: etmA });
                  break;
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
                  resolve({ type: NavigationActions.FETCH_MARKER_SUCCESS, payload: etmT });
                  break;
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
                  resolve({ type: NavigationActions.FETCH_MARKER_SUCCESS, payload: etmW });
                  break;
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
                  resolve({ type: NavigationActions.FETCH_MARKER_SUCCESS, payload: etmU });
                  break;
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
                  resolve({ type: NavigationActions.FETCH_MARKER_SUCCESS, payload: etmG });
                  break;
              }
            }
          });
        });
      });

      return Observable.fromPromise(fetchMarkerPromise);
    });

  @Effect({ dispatch: true }) likeMarker$: Observable<Action> = this.actions$
    .ofType(NavigationActions.LIKE_MARKER)
    .switchMap(x => {
      let finalResponseLike = new Promise((resolve, reject) => {
        let response = this.markerService.likeMarker(x.payload).then(res => {
          resolve({ type: NavigationActions.LIKE_MARKER_SUCCESS, payload: res });
        });
      });
      return Observable.fromPromise(finalResponseLike);
    });

  @Effect({ dispatch: true }) dislikeMarker$: Observable<Action> = this.actions$
    .ofType(NavigationActions.DISLIKE_MARKER)
    .switchMap(x => {
      let finalResponseDislike = new Promise((resolve, reject) => {
        let response = this.markerService.dislikeMarker(x.payload).then(res => {
          resolve({ type: NavigationActions.DISLIKE_MARKER_SUCCESS, payload: res });
        });
      });
      return Observable.fromPromise(finalResponseDislike);
    });
}

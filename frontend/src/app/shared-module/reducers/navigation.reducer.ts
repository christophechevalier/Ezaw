// ngrx
import { Action } from '@ngrx/store';

// immutable
import { List } from 'immutable';

// rxjs
// import { Observable } from 'rxjs';

// our interfaces
import {
  IMarker,
  ETypeMarkers
} from '../interfaces/navigation.interface';

// import { Marker } from './../../features-module/nav-module/marker-module/marker/marker';

// our states
import { navigationRecordFactory } from './navigation.state';

// our actions
import { NavigationActions } from './navigation.actions';

function createNavigationReducer(navigationR = navigationRecordFactory, action: Action) {
  switch (action.type) {
    case NavigationActions.FETCH_MARKER_SUCCESS:
      return navigationR.push(action.payload);

    case NavigationActions.GET_MARKERS_SUCCESS:
      let listServer = action.payload;
      let listclient: IMarker[] = [];
      let listFinal = List<IMarker>();

      if (navigationR.isEmpty) {
        for (let c = 0; c < listServer.length; c++) {
          let typeneeded: ETypeMarkers;
          if (listServer[c]['ETypeMarkers'] === '0') {
            typeneeded = ETypeMarkers.Police;
          } else {
            if (listServer[c]['ETypeMarkers'] === '1') {
              typeneeded = ETypeMarkers.Accident;
            } else {
              if (listServer[c]['ETypeMarkers'] === '2') {
                typeneeded = ETypeMarkers.TrafficJam;
              } else {
                if (listServer[c]['ETypeMarkers'] === '3') {
                  typeneeded = ETypeMarkers.Warning;
                } else {
                  if (listServer[c]['ETypeMarkers'] === '4') {
                    typeneeded = ETypeMarkers.GasStation;
                  } else {
                    if (listServer[c]['ETypeMarkers'] === '5') {
                      typeneeded = ETypeMarkers.User;
                    }
                  }
                }
              }
            }
          }

          listclient.push(<IMarker>{
            id: listServer[c]['id'],
            lat: listServer[c]['lat'],
            lng: listServer[c]['lng'],
            icon: listServer[c]['icon'],
            title: listServer[c]['title'],
            duration: listServer[c]['duration'],
            draggable: listServer[c]['draggable'],
            typeMarker: typeneeded,
            control: listServer[c]['control'],
            warning: listServer[c]['warning'],
            isFetchingDetails: listServer[c]['isFetchingDetails']
          });
        }
      } else {
        for (let c = 0; c < navigationR.size; c++) {
          listclient.push(<IMarker>{
            id: navigationR[c]['id'],
            lat: navigationR[c]['lat'],
            lng: navigationR[c]['lng'],
            icon: navigationR[c]['icon'],
            title: navigationR[c]['title'],
            duration: navigationR[c]['duration'],
            draggable: navigationR[c]['draggable'],
            typeMarker: navigationR[c]['ETypeMarkers'],
            control: navigationR[c]['control'],
            warning: navigationR[c]['warning'],
            isFetchingDetails: navigationR[c]['isFetchingDetails']
          });
        }
      }

      var listeId: number[] = [];
      // Array IDS
      // For sur boucle serveur
      for (var a = 0; a < listServer.length; a++) {
        var arequals = false;
        // For sur boucle client
        for (var b = 0; b < listclient.length; b++) {
          // On compare client === serveur
          if (listclient[b].id === listServer[a]['id']) {
            listeId.push(parseInt(listclient[b].id));
            arequals = true;
          }
        }
        if (!arequals) {
          listclient.push(listServer[a]);
          listeId.push(parseInt(listServer[a].id));
        }
      }

      for (var a = 0; a < listclient.length; a++) {
        var areEquals = false;
        for (var b = 0; b < listeId.length; b++) {
          if (listeId[b] === parseInt(listclient[a].id)) {
            areEquals = true;
          }
        }
        if (!arequals) {
          listclient.splice(a, 1);
        }
      }

      listFinal = navigationR.push.apply(listFinal, listclient);
      return listFinal;

    case NavigationActions.REMOVE_MARKER:
      return navigationR.filter(nav => nav.id !== action.payload);

    default:
      return navigationR;
  }
}

export const NavigationReducer = createNavigationReducer;





















  // if (action.type === NavigationActions.FETCH_MARKER_DETAILS) {
  //   let markerIndex = navigationR
  //     .get('allIds')
  //     .findIndex((allIds: INavigationRecord) => allIds.get('id') === action.payload.byId);
  // }

  // else if (action.type === NavigationActions.FETCH_MARKER_DETAILS_SUCCESS) {
  //   let markerIndex = navigationR
  //     .get('allIds')
  //     .findIndex((allIds: INavigationRecord) => allIds.get('id') === action.payload.marker.id);

  //   if (markerIndex === -1) {
  //     return navigationR;
  //   }

  //   return navigationR.setIn(['allIds', markerIndex],
  //     navigationR
  //       .getIn(['allIds', markerIndex])
  //       .merge(
  //       fromJS({ isFetchingDetails: false }),
  //       fromJS(action.payload)
  //       )
  //   );
  // }

  // else if (action.type === NavigationActions.FETCH_MARKER_DETAILS_FAILED) {
  //   let markerIndex = navigationR
  //     .get('allIds')
  //     .findIndex((allIds: INavigationRecord) => allIds.get('id') === action.payload.byId);

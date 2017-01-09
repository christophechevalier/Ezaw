// ngrx
import { ActionReducer, Action } from '@ngrx/store';

// immutable
import { List } from 'immutable';

// rxjs
import { Observable } from 'rxjs';

// our interfaces
import {
  IMarker,
  IMarkers,
  INavigationList,
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
} from '../interfaces/navigation.interface';

import { Marker } from './../../features-module/nav-module/marker-module/marker/marker';

// our states
import { navigationRecordFactory } from './navigation.state';

// our actions
import { NavigationActions } from './navigation.actions';

function createNavigationReducer(navigationR = navigationRecordFactory, action: Action) {
  switch (action.type) {
    case NavigationActions.FETCH_MARKER_SUCCESS:
      console.log(navigationR);
      return navigationR.push(action.payload);

    // TODO: Add condition to get markers on the map
    case NavigationActions.GET_MARKERS_SUCCESS:
      return navigationR.push(action.payload);

    case NavigationActions.REMOVE_MARKER:
      return navigationR.filter(nav => nav.id !== action.payload);

    default:
      return navigationR;
  }
}

export const NavigationReducer: ActionReducer<INavigationList> = createNavigationReducer;





















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

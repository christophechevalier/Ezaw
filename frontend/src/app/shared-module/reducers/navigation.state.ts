// our helpers
import { makeTypedFactory } from '../helpers/helper';

// immutable
import { List } from 'immutable';

// our interfaces
import {
  IMarker,
  IMarkers,
  INavigationList,
  ETypeMarkers,
  EControlPolices,
  EControlAccidents,
  EControlTrafficJams,
  EControlWarnings,
  EControlFavorites,
  EOnTheRoadCauses,
  ESideRoadCauses,
  EWeatherCauses
} from '../interfaces/navigation.interface';

export function navigationFactory() {
  return List<IMarker>();
}

export const navigationRecordFactory = navigationFactory();

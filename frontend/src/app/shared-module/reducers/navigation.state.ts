// our helpers
import { makeTypedFactory } from '../helpers/helper';

// our interfaces
import {
  IMarker,
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
} from '../interfaces/navigation.interface';

export function navigationFactory(): IMarker {
  return {
    id: null,
    title: null,
    label: null,
    lat: null,
    lng: null,
    duration: null,
    draggable: false,
    typeMarker: null,
    control: null,
    warning: null
  };
}

export const navigationRecordFactory = makeTypedFactory<IMarker, INavigationRecord>(navigationFactory());

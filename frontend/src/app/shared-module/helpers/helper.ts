// immutable
import { fromJS } from 'immutable';

// typed record
import { TypedRecord } from 'typed-immutable-record';

// markers sidenav
import {
  IMarker,
  IMarkers,
  INavigationRecord,
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

let matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;

export function escapeStringRegexp (str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }

  return str.replace(matchOperatorsRe, '\\$&');
};

// generate a UUID
export function generateUuidV4(a = null) {
  /* tslint:disable */
  return a?(a^Math.random()*16>>a/4)
    .toString(16):(<any>[1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,generateUuidV4);
  /* tslint:enable */
}

// replace IDs in the json received
// by generated UUID
export function replaceIds(obj) {
  if (typeof obj.id !== 'undefined') {
    obj.id = generateUuidV4(null);
  }

  for (let i in obj) {
    if (typeof obj[i] === 'object') {
      replaceIds(obj[i]);
    }
  }
}

// https://github.com/rangle/typed-immutable-record/issues/23
// redefine the makeTypedFactory to use fromJS so we can have
// deep parsing object
export function makeTypedFactory<E, T extends TypedRecord<T> & E>(obj: E): (val?: E) => T {
  return function TypedFactory(val: E = null): T {
    return fromJS(Object.assign(obj, val)) as T;
  };
};

// define method for generate new marker with min details
export const generateMarker = (mkType: ETypeMarkers, mkLat: number, mkLng: number) => {
  return {
    id: generateUuidV4(),
    lat: mkLat,
    lng: mkLat,
    duration: null,
    draggable: false,
    typeMarker: mkType
  }
}

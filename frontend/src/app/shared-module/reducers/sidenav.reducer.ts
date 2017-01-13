// ngrx
import { Action } from '@ngrx/store';

// our interfaces
import { ISidenavRecord } from '../interfaces/sidenav.interface';

// our states
import { sidenavRecordFactory } from './sidenav.state';

export function createSidenavReducer(name = '') {
  return function sidenav(sidenavR: ISidenavRecord = sidenavRecordFactory(), action: Action) {
    switch (action.type) {
      // Sidenav Right
      case `OPEN_SIDENAV_${name}`:
        return sidenavR.set('isSidenavRightVisible', true);

      case `CLOSE_SIDENAV_${name}`:
        return sidenavR.set('isSidenavRightVisible', false);

      case `TOGGLE_SIDENAV_${name}`:
        return sidenavR.set('isSidenavRightVisible', !sidenavR.get('isSidenavRightVisible'));

      case `SET_SIDENAV_MODE`:
        return sidenavR.set('sidenavMode', action.payload);

      default:
        return sidenavR;
    }
  };
}

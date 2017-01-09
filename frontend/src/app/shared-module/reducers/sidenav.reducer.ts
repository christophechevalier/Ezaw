// ngrx
import { ActionReducer, Action } from '@ngrx/store';

// our interfaces
import { ISidenavRecord } from '../interfaces/sidenav.interface';

// our states
import { sidenavRecordFactory } from './sidenav.state';

// actions
import { SidenavActions } from './sidenav.actions';

export function createSidenavReducer(name = '') {
  return function sidenav(sidenavR: ISidenavRecord = sidenavRecordFactory(), action: Action) {
    switch (action.type) {
      // Sidenav Left
      case `OPEN_SIDENAV_${name}`:
        return sidenavR.set('isSidenavLeftVisible', true);

      case `CLOSE_SIDENAV_${name}`:
        return sidenavR.set('isSidenavLeftVisible', false);

      case `TOGGLE_SIDENAV_${name}`:
        return sidenavR.set('isSidenavLeftVisible', !sidenavR.get('isSidenavLeftVisible'));

      // Sidenav Right
      case `OPEN_SIDENAV_${name}`:
        return sidenavR.set('isSidenavRightVisible', true);

      case `CLOSE_SIDENAV_${name}`:
        return sidenavR.set('isSidenavRightVisible', false);

      case `TOGGLE_SIDENAV_${name}`:
        return sidenavR.set('isSidenavRightVisible', !sidenavR.get('isSidenavRightVisible'));

      // Mobile Left
      case `OPEN_SIDENAV_IF_MOBILE_${name}`:
        if (sidenavR.get('sidenavMode') === 'over') {
          return sidenavR.set('isSidenavLeftVisible', false);
        }
        return sidenavR;

      case `OPEN_SIDENAV_IF_MOBILE_${name}`:
        if (sidenavR.get('sidenavMode') === 'over') {
          return sidenavR.set('isSidenavRightVisible', false);
        }
        return sidenavR;

      // Mobile Right
      case `CLOSE_SIDENAV_IF_MOBILE_${name}`:
        if (sidenavR.get('sidenavMode') === 'over') {
          return sidenavR.set('isSidenavRightVisible', false);
        }
        return sidenavR;

      case `OPEN_SIDENAV_IF_MOBILE_${name}`:
        if (sidenavR.get('sidenavMode') === 'over') {
          return sidenavR.set('isSidenavRightVisible', false);
        }
        return sidenavR;

      case `SET_SIDENAV_MODE`:
        return sidenavR.set('sidenavMode', action.payload);

      default:
        return sidenavR;
    }
  }
};

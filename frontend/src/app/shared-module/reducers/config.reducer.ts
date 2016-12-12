// ngrx
import { ActionReducer, Action } from '@ngrx/store';

// our interfaces
import { IConfigRecord } from '../interfaces/config.interface';

// our states
import { configRecordFactory } from './config.state';

// actions
import { ConfigActions } from './config.actions';

function createConfigReducer(configR: IConfigRecord = configRecordFactory(), action: Action) {
  switch (action.type) {
    case ConfigActions.TOGGLE_THEME:
      return configR.set('isDarkTheme', !configR.get('isDarkTheme'));

    // Sidenav Left
    case ConfigActions.OPEN_SIDENAV_LEFT:
      return configR.set('isSidenavLeftVisible', true);

    case ConfigActions.CLOSE_SIDENAV_LEFT:
      return configR.set('isSidenavLeftVisible', false);

    case ConfigActions.TOGGLE_SIDENAV_LEFT:
      return configR.set('isSidenavLeftVisible', !configR.get('isSidenavLeftVisible'));

    // Sidenav Right
    case ConfigActions.OPEN_SIDENAV_RIGHT:
      return configR.set('isSidenavRightVisible', true);

    case ConfigActions.CLOSE_SIDENAV_RIGHT:
      return configR.set('isSidenavRightVisible', false);

    case ConfigActions.TOGGLE_SIDENAV_RIGHT:
      return configR.set('isSidenavRightVisible', !configR.get('isSidenavRightVisible'));

    // Mobile
    case ConfigActions.CLOSE_SIDENAV_LEFT_IF_MOBILE:
      if (configR.get('sidenavMode') === 'over') {
        return configR.set('isSidenavLeftVisible', false);
      }
      return configR;

    case ConfigActions.CLOSE_SIDENAV_RIGHT_IF_MOBILE:
      if (configR.get('sidenavMode') === 'over') {
        return configR.set('isSidenavRightVisible', false);
      }
      return configR;

    case ConfigActions.SET_SIDENAV_MODE:
      return configR.set('sidenavMode', action.payload);

    default:
      return configR;
  }
};

export const ConfigReducer: ActionReducer<IConfigRecord> = createConfigReducer;

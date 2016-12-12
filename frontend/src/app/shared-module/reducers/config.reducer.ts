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

    case ConfigActions.OPEN_SIDENAV:
      return configR.set('isSidenavVisible', true);

    case ConfigActions.CLOSE_SIDENAV:
      return configR.set('isSidenavVisible', false);

    case ConfigActions.TOGGLE_SIDENAV:
      return configR.set('isSidenavVisible', !configR.get('isSidenavVisible'));

    // Mobile
    case ConfigActions.CLOSE_SIDENAV_IF_MOBILE:
      if (configR.get('sidenavMode') === 'over') {
        return configR.set('isSidenavVisible', false);
      }
      return configR;

    case ConfigActions.SET_SIDENAV_MODE:
      return configR.set('sidenavMode', action.payload);

    default:
      return configR;
  }
};

export const ConfigReducer: ActionReducer<IConfigRecord> = createConfigReducer;

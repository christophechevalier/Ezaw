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

    default:
      return configR;
  }
};

export const ConfigReducer: ActionReducer<IConfigRecord> = createConfigReducer;

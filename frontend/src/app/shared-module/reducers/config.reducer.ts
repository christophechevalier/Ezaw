import { ActionReducer, Action } from '@ngrx/store';
import { ConfigStateRecord, configStateFactory } from './config.state';

// actions
export const TOGGLE_THEME = 'TOGGLE_THEME ';

export const ConfigReducer: ActionReducer<ConfigStateRecord> = (configState: ConfigStateRecord = configStateFactory(), action: Action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return configState.setIn(['isDarkTheme'], !configState.isDarkTheme);

    default:
      return configState;
  }
};
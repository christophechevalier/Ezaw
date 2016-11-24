// our interfaces
import { IConfigRecord } from './../interfaces/config.interface';

// our reducers
import { ConfigReducer } from './config.reducer';

// our actions
import { ConfigActions } from './config.actions';

// our states
import { configRecordFactory } from './config.state';

describe(`Config Reducer`, () => {
  let stateR: IConfigRecord;

  beforeAll(() => {
    stateR = configRecordFactory();
  });

  // DEFAULT
  it(`should return the same state (reference) if action.type doesn't match existing action`, () => {
    let nextStateR: IConfigRecord = ConfigReducer(stateR, {type: ''});

    expect(stateR === nextStateR).toBeTruthy();
  });

  it(`should have a default state`, () => {
    let nextStateR: IConfigRecord = ConfigReducer(stateR, {type: ''});
    let nextState = nextStateR.toJS();

    let defaultState = {
      isDarkTheme: false
    };

    expect(nextState).toEqual(defaultState);
  });

  // TOGGLE_THEME
  it(`should toggle dark theme`, () => {
    let nextStateR1: IConfigRecord = ConfigReducer(stateR, {type: ConfigActions.TOGGLE_THEME});
    let nextState1 = nextStateR1.toJS();

    expect(nextState1.isDarkTheme).toBe(true);

    let nextStateR2: IConfigRecord = ConfigReducer(nextStateR1, {type: ConfigActions.TOGGLE_THEME});
    let nextState2 = nextStateR2.toJS();

    expect(nextState2.isDarkTheme).toBe(false);
  });
});

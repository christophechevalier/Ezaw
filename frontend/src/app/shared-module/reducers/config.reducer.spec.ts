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

  // // DEFAULT
  // it(`should return the same state (reference) if action.type doesn't match existing action`, () => {
  //   let nextStateR: IConfigRecord = ConfigReducer(stateR, {type: ''});

  //   expect(stateR === nextStateR).toBeTruthy();
  // });

  // it(`should have a default state`, () => {
  //   let nextStateR: IConfigRecord = ConfigReducer(stateR, {type: ''});
  //   let nextState = nextStateR.toJS();

  //   let defaultState = {
  //     isDarkTheme: false,
  //     isSidenavLeftVisible: true,
  //     isSidenavRightVisible: true,
  //     sidenavMode: 'side'
  //   };

  //   expect(nextState).toEqual(defaultState);
  // });

  // // TOGGLE_THEME
  // it(`should toggle dark theme`, () => {
  //   // from dark to light
  //   let nextStateR1: IConfigRecord = ConfigReducer(stateR, {type: ConfigActions.TOGGLE_THEME});
  //   let nextState1 = nextStateR1.toJS();

  //   expect(nextState1.isDarkTheme).toBe(true);

  //   // from (previous) light to dark
  //   let nextStateR2: IConfigRecord = ConfigReducer(nextStateR1, {type: ConfigActions.TOGGLE_THEME});
  //   let nextState2 = nextStateR2.toJS();

  //   expect(nextState2.isDarkTheme).toBe(false);
  // });

  // // OPEN_SIDENAV LEFT
  // it(`should changed isSidenavLeftVisible from false to true`, () => {
  //   let stateRTmp = stateR
  //     .set('isSidenavLeftVisible', false);

  //   let nextStateR: IConfigRecord = ConfigReducer(stateRTmp, {type: ConfigActions.OPEN_SIDENAV_LEFT});
  //   let nextState = nextStateR.toJS();

  //   expect(nextState.isSidenavLeftVisible).toBe(true);
  // });

  // // OPEN_SIDENAV RIGHT
  // it(`should changed isSidenavRightVisible from false to true`, () => {
  //   let stateRTmp = stateR
  //     .set('isSidenavRightVisible', false);

  //   let nextStateR: IConfigRecord = ConfigReducer(stateRTmp, {type: ConfigActions.OPEN_SIDENAV_RIGHT});
  //   let nextState = nextStateR.toJS();

  //   expect(nextState.isSidenavRightVisible).toBe(true);
  // });

  // // CLOSE_SIDENAV LEFT
  // it(`${ConfigActions.CLOSE_SIDENAV_LEFT}`, () => {
  //   let stateRTmp = stateR
  //     .set('isSidenavLeftVisible', true);

  //   let nextStateR: IConfigRecord = ConfigReducer(stateRTmp, {type: ConfigActions.CLOSE_SIDENAV_LEFT});
  //   let nextState = nextStateR.toJS();

  //   expect(nextState.isSidenavLeftVisible).toBe(false);
  // });

  // // CLOSE_SIDENAV RIGHT
  // it(`${ConfigActions.CLOSE_SIDENAV_RIGHT}`, () => {
  //   let stateRTmp = stateR
  //     .set('isSidenavRightVisible', true);

  //   let nextStateR: IConfigRecord = ConfigReducer(stateRTmp, {type: ConfigActions.CLOSE_SIDENAV_RIGHT});
  //   let nextState = nextStateR.toJS();

  //   expect(nextState.isSidenavRightVisible).toBe(false);
  // });

  // // TOGGLE_SIDENAV LEFT
  // it(`${ConfigActions.TOGGLE_SIDENAV_LEFT}`, () => {
  //   // from open to close
  //   let stateRTmp = stateR
  //     .set('isSidenavLeftVisible', true);

  //   let nextStateR1: IConfigRecord = ConfigReducer(stateRTmp, {type: ConfigActions.TOGGLE_SIDENAV_LEFT});
  //   let nextState1 = nextStateR1.toJS();

  //   expect(nextState1.isSidenavLeftVisible).toBe(false);

  //   // from (previous) close to open
  //   let nextStateR2: IConfigRecord = ConfigReducer(nextStateR1, {type: ConfigActions.TOGGLE_SIDENAV_LEFT});
  //   let nextState2 = nextStateR2.toJS();

  //   expect(nextState2.isSidenavVisible).toBe(true);
  // });

  // // TOGGLE_SIDENAV RIGHT
  // it(`${ConfigActions.TOGGLE_SIDENAV_RIGHT}`, () => {
  //   // from open to close
  //   let stateRTmp = stateR
  //     .set('isSidenavRightVisible', true);

  //   let nextStateR1: IConfigRecord = ConfigReducer(stateRTmp, {type: ConfigActions.TOGGLE_SIDENAV_RIGHT});
  //   let nextState1 = nextStateR1.toJS();

  //   expect(nextState1.isSidenavRightVisible).toBe(false);

  //   // from (previous) close to open
  //   let nextStateR2: IConfigRecord = ConfigReducer(nextStateR1, {type: ConfigActions.TOGGLE_SIDENAV_RIGHT});
  //   let nextState2 = nextStateR2.toJS();

  //   expect(nextState2.isSidenavRightVisible).toBe(true);
  // });

  // // CLOSE_SIDENAV_LEFT_IF_MOBILE
  // it(`${ConfigActions.CLOSE_SIDENAV_LEFT_IF_MOBILE}`, () => {
  //   let stateRTmp = stateR
  //     .set('sidenavMode', 'over')
  //     .set('isSidenavLeftVisible', false);

  //   let nextStateR1: IConfigRecord = ConfigReducer(stateRTmp, {
  //     type: ConfigActions.CLOSE_SIDENAV_LEFT_IF_MOBILE,
  //     payload: 'over'
  //   });
  //   let nextState1 = nextStateR1.toJS();

  //   let expectedState1 = {
  //     sidenavMode: 'over',
  //     isSidenavLeftVisible: false
  //   };

  //   expect(nextState1).toEqual(jasmine.objectContaining(expectedState1));

  //   let nextStateR2: IConfigRecord = ConfigReducer(nextStateR1, {
  //     type: ConfigActions.CLOSE_SIDENAV_LEFT_IF_MOBILE,
  //     payload: 'side'
  //   });

  //   expect(nextStateR2.toJS()).toEqual(jasmine.objectContaining(expectedState1));
  // });

  // // CLOSE_SIDENAV_RIGHT_IF_MOBILE
  // it(`${ConfigActions.CLOSE_SIDENAV_RIGHT_IF_MOBILE}`, () => {
  //   let stateRTmp = stateR
  //     .set('sidenavMode', 'over')
  //     .set('isSidenavRightVisible', false);

  //   let nextStateR1: IConfigRecord = ConfigReducer(stateRTmp, {
  //     type: ConfigActions.CLOSE_SIDENAV_RIGHT_IF_MOBILE,
  //     payload: 'over'
  //   });
  //   let nextState1 = nextStateR1.toJS();

  //   let expectedState1 = {
  //     sidenavMode: 'over',
  //     isSidenavRightVisible: false
  //   };

  //   expect(nextState1).toEqual(jasmine.objectContaining(expectedState1));

  //   let nextStateR2: IConfigRecord = ConfigReducer(nextStateR1, {
  //     type: ConfigActions.CLOSE_SIDENAV_RIGHT_IF_MOBILE,
  //     payload: 'side'
  //   });

  //   expect(nextStateR2.toJS()).toEqual(jasmine.objectContaining(expectedState1));
  // });

  // // SET_SIDENAV_MODE
  // it(`${ConfigActions.SET_SIDENAV_MODE}`, () => {
  //   let stateRTmp = stateR
  //     .set('sidenavMode', 'side');

  //   let nextStateR1: IConfigRecord = ConfigReducer(stateRTmp, {type: ConfigActions.SET_SIDENAV_MODE, payload: 'over'});

  //   expect(nextStateR1.get('sidenavMode')).toEqual('over');

  //   let nextStateR2: IConfigRecord = ConfigReducer(nextStateR1, {type: ConfigActions.SET_SIDENAV_MODE, payload: 'side'});

  //   expect(nextStateR2.get('sidenavMode')).toEqual('side');
  // });
});

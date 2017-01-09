// our interfaces
import { ISidenavRecord } from './../interfaces/sidenav.interface';

// our reducers
import { SidenavReducer } from './sidenav.reducer';

// our actions
import { SidenavActions } from './sidenav.actions';

// our states
import { sidenavRecordFactory } from './sidenav.state';

describe(`Sidenav Reducer`, () => {
  let stateR: ISidenavRecord;

  beforeAll(() => {
    stateR = sidenavRecordFactory();
  });
});

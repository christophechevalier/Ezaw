// our interfaces
import { ISidenavRecord } from './../interfaces/sidenav.interface';

// our states
import { sidenavRecordFactory } from './sidenav.state';

describe(`Sidenav Reducer`, () => {
  let stateR: ISidenavRecord;

  beforeAll(() => {
    stateR = sidenavRecordFactory();
  });
});

// our interfaces
import { IConfigRecord } from './../interfaces/config.interface';

// our states
import { configRecordFactory } from './config.state';

describe(`Config Reducer`, () => {
  let stateR: IConfigRecord;

  beforeAll(() => {
    stateR = configRecordFactory();
  });
});

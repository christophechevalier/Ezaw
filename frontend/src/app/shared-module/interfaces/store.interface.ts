// our interfaces
import { IUserRecord } from './user.interface';
import { IConfigRecord } from './config.interface';
import { IMarkerRecord } from './marker.interface';

export interface IStore {
  config: IConfigRecord;
  user: IUserRecord;
  marker: IMarkerRecord;
};

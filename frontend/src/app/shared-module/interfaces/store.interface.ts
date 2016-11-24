// our interfaces
import { IUserRecord } from './user.interface';
import { IConfigRecord } from './config.interface';
import { ILocationRecord } from './location.interface';
import { IMarkerRecord } from './marker.interface';

export interface IStore {
  config: IConfigRecord;
  user: IUserRecord;
  location: ILocationRecord;
  marker: IMarkerRecord;
};

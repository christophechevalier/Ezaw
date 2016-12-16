// our interfaces
import { IUser } from './user.interface';
import { IConfig } from './config.interface';
import { IMarker, IMarkers } from './navigation.interface';

export interface IStore {
  config: IConfig;
  user: IUser;
  marker: IMarker;
  markers: IMarkers;
};

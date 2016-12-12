// typed-record
import { TypedRecord } from 'typed-immutable-record';

export interface IConfig {
  isDarkTheme: boolean;
  isSidenavLeftVisible: boolean;
  isSidenavRightVisible: boolean;
  sidenavMode: string;
}

export interface IConfigRecord extends TypedRecord<IConfigRecord>, IConfig { };


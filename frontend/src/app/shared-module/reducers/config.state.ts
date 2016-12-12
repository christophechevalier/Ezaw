import { makeTypedFactory } from 'typed-immutable-record';

// our interfaces
import { IConfig, IConfigRecord } from '../interfaces/config.interface';

export function configFactory(): IConfig {
  return {
    isDarkTheme: true,
    isSidenavVisible: true,
    sidenavMode: 'side'
  };
}

export const configRecordFactory = makeTypedFactory<IConfig, IConfigRecord>(configFactory());

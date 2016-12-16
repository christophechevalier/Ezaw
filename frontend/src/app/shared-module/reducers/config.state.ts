// our helpers
import { makeTypedFactory } from '../helpers/helper';

// our interfaces
import { IConfig, IConfigRecord } from '../interfaces/config.interface';

export function configFactory(): IConfig {
  return {
    isDarkTheme: true,
    isSidenavLeftVisible: true,
    isSidenavRightVisible: true,
    sidenavMode: 'side'
  };
}

export const configRecordFactory = makeTypedFactory<IConfig, IConfigRecord>(configFactory());

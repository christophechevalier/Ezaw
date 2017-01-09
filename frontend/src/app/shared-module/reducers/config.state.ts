// our helpers
import { makeTypedFactory } from '../helpers/helper';

// our interfaces
import { IConfig, IConfigRecord } from '../interfaces/config.interface';

export function configFactory(): IConfig {
  return {
    isDarkTheme: true
  };
}

export const configRecordFactory = makeTypedFactory<IConfig, IConfigRecord>(configFactory());

// our helpers
import { makeTypedFactory } from '../helpers/helper';

// our interfaces
import { ISidenav, ISidenavRecord } from '../interfaces/sidenav.interface';

export function sidenavFactory(): ISidenav {
  return {
    isSidenavRightVisible: true,
    sidenavMode: 'side'
  };
}

export const sidenavRecordFactory = makeTypedFactory<ISidenav, ISidenavRecord>(sidenavFactory());

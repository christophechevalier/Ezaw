// our helpers
import { makeTypedFactory } from '../helpers/helper';

// our interfaces
import { IUser, IUserRecord } from '../interfaces/user.interface';

export function userFactory(): IUser {
  return {
    // from server
    username: null,
    password: null,

    // for UI
    isConnecting: false,
    isDisconnecting: false,
    isConnected: false,
    connectionFailed: false
  };
}

export const userRecordFactory = makeTypedFactory<IUser, IUserRecord>(userFactory());

// our helpers
import { makeTypedFactory } from '../helpers/helper';

// our interfaces
import { IUser, IUserRecord } from '../interfaces/user.interface';

export function userFactory(): IUser {
  return {
    // from server
    username: null,
    password: null,
    cfpassword: null,
    email: null,

    // for UI
    isRegistering: false,
    isRegistered: false,
    isConnecting: false,
    isDisconnecting: false,
    isConnected: false,
    connectionFailed: false,
    registerationFailed: false
  };
}

export const userRecordFactory = makeTypedFactory<IUser, IUserRecord>(userFactory());

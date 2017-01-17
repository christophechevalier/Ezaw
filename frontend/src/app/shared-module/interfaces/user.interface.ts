// typed-record
import { TypedRecord } from 'typed-immutable-record';

export interface IUser {
  // from server
  username: string;
  password: string;
  email: string;

  // for UI
  isRegistering: boolean;
  isRegistered: boolean;
  isConnecting: boolean;
  isDisconnecting: boolean;
  isConnected: boolean;
  connectionFailed: boolean;
  registerationFailed: boolean;
}

export interface IUserRecord extends TypedRecord<IUserRecord>, IUser { };

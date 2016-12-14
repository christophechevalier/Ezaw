// typed-record
import { TypedRecord } from 'typed-immutable-record';

export interface IUser {
  // from server
  username: string;
  password: string;
  emailAdress : string;


  // for UI
  isConnecting: boolean;
  isDisconnecting: boolean;
  isConnected: boolean;
  connectionFailed: boolean;
}

export interface IUserRecord extends TypedRecord<IUserRecord>, IUser { };

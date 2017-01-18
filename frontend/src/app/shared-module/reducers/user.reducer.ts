// ngrx
import { ActionReducer, Action } from '@ngrx/store';

// our interfaces
import { IUserRecord } from '../interfaces/user.interface';

// our states
import { userRecordFactory } from './user.state';

// our actions
import { UserActions } from './user.actions';

function createUserReducer(userR: IUserRecord = userRecordFactory(), action: Action) {
  switch (action.type) {
    case UserActions.USR_IS_CONNECTING:
      return userR
        .merge({
          isRegistering: false,
          isRegistered: false,
          isConnecting: true,
          isConnected: false,
          isDisconnecting: false,
          connectionFailed: false,
          registerationFailed: false
        });

    case UserActions.USR_IS_REGISTERING:
      return userR
        .merge({
          isRegistering: true,
          isRegistered: false,
          isDisconnecting: true,
          isConnecting: false,
          isConnected: false,
          connectionFailed: false,
          registerationFailed: false
        });

    case UserActions.USR_IS_CONNECTED:
      let user = action.payload;
      return userR
        .merge({
          username: user[0]['username'],
          email: user[0]['mail'],
          password: user[0]['password'],
          isRegistering: false,
          isRegistered: false,
          isConnected: true,
          isConnecting: false,
          isDisconnecting: false,
          connectionFailed: false,
          registerationFailed: false
        });

    case UserActions.USR_IS_REGISTERED:
      return userR
        .merge({
          isRegistering: false,
          isRegistered: true,
          isConnected: false,
          isConnecting: false,
          isDisconnecting: false,
          connectionFailed: false,
          registerationFailed: false
        });

    case UserActions.USR_IS_DISCONNECTING:
      return userR
        .merge({
          isRegistering: false,
          isRegistered: false,
          isDisconnecting: true,
          isConnecting: false,
          isConnected: true,
          connectionFailed: false,
          registerationFailed: false
        });

    case UserActions.USR_IS_DISCONNECTED:
      return userRecordFactory();

    case UserActions.USR_CONNECTION_FAILED:
      return userR
        .merge({
          isRegistering: false,
          isRegistered: false,
          connectionFailed: true,
          isDisconnecting: false,
          isConnecting: false,
          isConnected: false,
          registerationFailed: false
        });

    case UserActions.USR_REGISTERATION_FAILED:
      return userR
        .merge({
          isRegistering: false,
          isRegistered: false,
          connectionFailed: false,
          isDisconnecting: false,
          isConnecting: false,
          isConnected: false,
          registerationFailed: true
        });

    case UserActions.USR_DISCONNECTION_FAILED:
      return userR
        .merge({
          isRegistering: false,
          isRegistered: false,
          connectionFailed: false,
          isDisconnecting: false,
          isConnecting: false,
          isConnected: true,
          registerationFailed: false
        });

    default:
      return userR;
  }
};

export const UserReducer: ActionReducer<IUserRecord> = createUserReducer;

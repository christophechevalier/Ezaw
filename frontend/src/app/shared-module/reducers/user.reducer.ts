// ngrx
import { ActionReducer, Action } from '@ngrx/store';

// our interfaces
import { IUserRecord } from '../interfaces/user.interface';

// our states
import { userRecordFactory } from './user.state';

// our actions
import { UserActions } from './user.actions';

function createUserReducer (userR: IUserRecord = userRecordFactory(), action: Action) {
  switch (action.type) {
    case UserActions.USR_IS_CONNECTING:
      return userR
        .merge({
          isConnecting: true,
          isConnected: false,
          isDisconnecting: false,
          connectionFailed: false
        });

    case UserActions.USR_IS_CONNECTED:
      return userR
        .merge({
          name: action.payload.name,
          username: action.payload.username,
          isConnected: true,
          isConnecting: false,
          isDisconnecting: false,
          connectionFailed: false
        });

    case UserActions.USR_IS_DISCONNECTING:
      return userR
        .merge({
          isDisconnecting: true,
          isConnecting: false,
          isConnected: true,
          connectionFailed: false
        });

    case UserActions.USR_IS_DISCONNECTED:
      return userRecordFactory();

    case UserActions.USR_CONNECTION_FAILED:
      return userR
        .merge({
          connectionFailed: true,
          isDisconnecting: false,
          isConnecting: false,
          isConnected: false
        });

    case UserActions.USR_DISCONNECTION_FAILED:
      return userR
        .merge({
          connectionFailed: false,
          isDisconnecting: false,
          isConnecting: false,
          isConnected: true
        });

    default:
      return userR;
  }
};

export const UserReducer: ActionReducer<IUserRecord> = createUserReducer;

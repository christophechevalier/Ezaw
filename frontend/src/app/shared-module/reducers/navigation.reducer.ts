// ngrx
import { Action, ActionReducer, Store } from '@ngrx/store';

// immutable
import { fromJS, List, Map } from 'immutable';

// rxjs
import { Observable } from 'rxjs';

// our interfaces
import { IStore } from '../interfaces/store.interface';
import { INavigationRecord } from '../interfaces/navigation.interface';

// our states
// import { navigationRecordFactory } from './navigation.state';

// our actions
import { UserActions } from './user.actions';
import { NavigationActions } from './navigation.actions';

// function createNavigationReducer(navigationR: INavigationRecord = navigationRecordFactory(), action: Action) {

// };

// export const NavigationReducer: ActionReducer<INavigationRecord> = createNavigationReducer;


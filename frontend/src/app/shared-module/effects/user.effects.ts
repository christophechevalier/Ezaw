// angular modules
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// rxjs
import { Observable } from 'rxjs/Observable';

// store
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

// our environment
// import { environment } from '../../../environments/environment';

// our services
import { UserService } from '../services/user.service';
import { RouteService } from '../services/route.service';

// our actions
import { UserActions } from '../reducers/user.actions';

@Injectable()
export class UserEffects {
  constructor(
    private router: Router,
    private actions$: Actions,
    private userService: UserService,
    private routeService: RouteService
  ) { }

  @Effect({ dispatch: true }) usrConnect$: Observable<Action> = this.actions$
    .ofType(UserActions.USR_IS_CONNECTING)
    .switchMap(x => {
      let finalUser = new Promise((resolve, reject) => {
        let userRespond = this.userService.connectUser(x.payload).then(user => {
          if (user === "ko"){
            resolve({ type: UserActions.USR_CONNECTION_FAILED, payload: user });
          }else {
             resolve({ type: UserActions.USR_IS_CONNECTED, payload: user });
          } 
        });
      });
      return Observable.fromPromise(finalUser);
    });

  @Effect({ dispatch: true }) usrAuth$: Observable<Action> = this.actions$
    .ofType(UserActions.USR_IS_REGISTERING)
    .switchMap(x => {
      let finalUser = new Promise((resolve, reject) => {
        let userRespond = this.userService.insertUser(x.payload).then(user => {
          if (user === 'ok') {
            resolve({ type: UserActions.USR_IS_REGISTERED, payload: user });
          } else {
            resolve({ type: UserActions.USR_REGISTERATION_FAILED, payload: user });
          }
        });
      });
      return Observable.fromPromise(finalUser);
    });

  @Effect({ dispatch: true }) usrDisconnected$: Observable<Action> = this.actions$
    .ofType(UserActions.USR_IS_DISCONNECTING)
    .map(() => {
      this.userService.disconnectUser();
      this.router.navigate(['/auth/login']);
      return { type: UserActions.USR_IS_DISCONNECTED };
    });
}






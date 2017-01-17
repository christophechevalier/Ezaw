// angular modules
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';

// rxjs
import { Observable } from 'rxjs/Observable';

// store
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

// our environment
import { environment } from '../../../environments/environment';

// our interfaces
import { IUser } from '../interfaces/user.interface';

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

  // tslint:disable-next-line:member-ordering
  @Effect({dispatch: true}) usrConnect$: Observable<Action> = this.actions$
    .ofType(UserActions.USR_IS_CONNECTING)
    .switchMap((action: Action) => this.userService.connectUser(action.payload)
      .map((res: any) => {
        if (!res.ok) {
          throw new Error('Error while connecting user');
        }

        let user: IUser = res.json();

        if (this.routeService.urlBeforeRedirectToLogin) {
          if (environment.debug) {
            console.debug(
              `Redirecting to the URL "${this.routeService.urlBeforeRedirectToLogin}" which was asked before being redirected to /auth/login`
            );
          }

          this.router.navigate([this.routeService.urlBeforeRedirectToLogin]);
        } else {
          this.router.navigate(['/nav/navigation']);
        }

        return { type: UserActions.USR_IS_CONNECTED, payload: user };
      })
      .catch((err) => {
        if (environment.debug) {
          console.error(err);
        }

        return Observable.of({ type: UserActions.USR_CONNECTION_FAILED });
      })
    );

  // tslint:disable-next-line:member-ordering
  @Effect({dispatch: true}) usrDisconnect$: Observable<Action> = this.actions$
    .ofType(UserActions.USR_IS_DISCONNECTING)
    .switchMap(() => this.userService.disconnectUser()
      .map((res: Response) => {
        if (!res.ok) {
          throw new Error('Error while disconnecting user');
        }

        return { type: UserActions.USR_IS_DISCONNECTED };
      })
      .catch((err) => {
        if (environment.debug) {
          console.error(err);
        }

        return Observable.of({ type: UserActions.USR_DISCONNECTION_FAILED });
      })
    );

  @Effect({dispatch: false}) usrDisconnected$: Observable<void> = this.actions$
    .ofType(UserActions.USR_IS_DISCONNECTED)
    .map(() => {
      this.router.navigate(['/auth/login']);
    });
  }






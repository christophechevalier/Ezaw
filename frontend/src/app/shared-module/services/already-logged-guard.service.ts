// // angular modules
// import { Injectable } from '@angular/core';
// import { CanActivate, Router, ActivatedRoute } from '@angular/router';
// import { Response } from '@angular/http';

// // ngrx
// import { Store } from '@ngrx/store';

// // rxjs
// import { Observable } from 'rxjs';

// // our environment
// import { environment } from '../../../environments/environment';

// // our services
// import { UserService } from './user.service';
// import { RouteService } from './route.service';

// // our actions
// import { UserActions } from '../reducers/user.actions';

// // our interfaces
// import { IStore } from '../interfaces/store.interface';
// import { IUser } from '../interfaces/user.interface';

// @Injectable()
// export class AlreadyLoggedGuardService implements CanActivate {
//   constructor(
//     private store: Store<IStore>,
//     private user: UserService,
//     private routeService: RouteService,
//     private router: Router,
//     private route: ActivatedRoute
//   ) { }

  // canActivate() {
  //   return this.user.getUserInformations(true)
  //     .map((res: Response) => {
  //        console.log('GER USER INFORMATIONS')
  //       // if already logged
  //       if (res.ok) {      
  //         console.log(res)
  //         //let user: IUser = res.json();

  //         //this.store.dispatch({ type: UserActions.USR_IS_CONNECTED, payload: user });

  //         this.router.navigate(['/nav/navigation']);
  //         return false;
  //       }

  //       // when using mocked services, http 401 are not catched
  //       // so return true as if we were catching the error
  //       return true;
  //     })
  //     .catch((err) => {
  //       if (environment.debug) {
  //         console.error(err);
  //       }

  //       // 401 --> unauthorized
  //       if (err.status === 401) {
  //         // before we redirect to /auth/login, save the asked URL so we can route back the user once he's logged
  //         this.routeService.urlBeforeRedirectToLogin = (this.router.url === '/auth/login' ? null : this.router.url);

  //         // user is not logged
  //         return Observable.of(true);
  //       }
  //     });
  // }
// }

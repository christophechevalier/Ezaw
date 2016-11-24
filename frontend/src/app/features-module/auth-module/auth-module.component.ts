// angular modules
import { Component, OnInit, OnDestroy, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// ngrx - store
import { Store } from '@ngrx/store';

// our interfaces
import { IStore } from '../../shared-module/interfaces/store.interface';
import { IUser, IUserRecord } from '../../shared-module/interfaces/user.interface';

// rxjs
import { Subscription } from 'rxjs/Rx';

// reducer
import { USR_IS_CONNECTING } from '../../shared-module/reducers/user.reducer';

@Component({
  selector: 'app-auth',
  templateUrl: './auth-module.component.html',
  styleUrls: ['./auth-module.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AuthComponent implements OnInit, OnDestroy {
  tabs: Array <{ title: string, url: string }>;
  private user: IUser;
  private userSub: Subscription;

  constructor(private store$: Store<IStore>, private router: Router, private route: ActivatedRoute) {

    this.userSub =
      store$.select('user')
        .map((userR: IUserRecord) => userR.toJS())
        .subscribe((user: IUser) => this.user = user);

    this.tabs = [
      {
        title: 'LOG_ME',
        url: 'login'
      },
      {
        title: 'SIGN_UP',
        url: 'register'
      }
    ];
  }

  ngOnInit() {
    // TODO When users refresh the auth page, keep the same route turned
    this.route.params.subscribe(params => { });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  connectUser(user: IUser) {
    this.store$.dispatch({ type: USR_IS_CONNECTING, payload: user });
  }


  openTab(index) {
    this.router.navigate(['/auth', this.tabs[index].url]);
  }
}

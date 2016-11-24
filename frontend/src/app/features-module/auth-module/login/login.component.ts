// angular module
import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';

// rxjs
import { Subscription } from 'rxjs';

// ngrx - store
import { Store } from '@ngrx/store';

// reducer
import { USR_IS_CONNECTING } from '../../../shared-module/reducers/user.reducer';

// our interfaces
import { IStore } from '../../../shared-module/interfaces/store.interface';
import { IUser, IUserRecord } from '../../../shared-module/interfaces/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit, OnDestroy {
  private user: IUser;
  private userSub: Subscription;

  constructor(private store$: Store<IStore>) {
    this.userSub =
      store$.select('user')
        .map((userR: IUserRecord) => userR.toJS())
        .subscribe((user: IUser) => this.user = user);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  connectUser(user: IUser) {
    this.store$.dispatch({type: USR_IS_CONNECTING, payload: user});
  }
}

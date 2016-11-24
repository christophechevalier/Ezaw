// angular modules
import { Component, ViewEncapsulation, ChangeDetectionStrategy, OnDestroy } from '@angular/core';

// rxjs
import { Subscription } from 'rxjs';

// ngrx - store
import { Store } from '@ngrx/store';

// our reducers
import { USR_IS_DISCONNECTING } from '../../shared-module/reducers/user.reducer';

// our interfaces
import { IStore } from '../../shared-module/interfaces/store.interface';
import { IConfig, IConfigRecord } from '../../shared-module/interfaces/config.interface';
import { IUser, IUserRecord } from '../../shared-module/interfaces/user.interface';


@Component({
  selector: 'app-nav-module',
  templateUrl: './nav-module.component.html',
  styleUrls: ['./nav-module.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NavComponent implements OnDestroy {
  private config: IConfig;
  private configSub: Subscription;
  private user: IUser;
  private userSub: Subscription;


  constructor(
    private store$: Store<IStore>
  ) {
    this.configSub =
      store$.select('config')
        .map((configR: IConfigRecord) => configR.toJS())
        .subscribe((config: IConfig) => this.config = config);

    this.userSub =
      store$.select('user')
        .map((userR: IUserRecord) => userR.toJS())
        .subscribe((user: IUser) => this.user = user);
  }

  ngOnDestroy() {
    this.configSub.unsubscribe();
    this.userSub.unsubscribe();
  }

  disconnectUser() {
    this.store$.dispatch({ type: USR_IS_DISCONNECTING });
  }
}

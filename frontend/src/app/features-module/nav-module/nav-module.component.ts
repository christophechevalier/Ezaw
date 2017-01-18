// angular modules
import { Component, ViewEncapsulation, ChangeDetectionStrategy, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { MdSidenav } from '@angular/material';

// rxjs
import { Subscription } from 'rxjs';

// ngrx - store
import { Store } from '@ngrx/store';

// our interfaces
import { IStore } from '../../shared-module/interfaces/store.interface';
import { IConfig, IConfigRecord } from '../../shared-module/interfaces/config.interface';
import { ISidenav, ISidenavRecord } from '../../shared-module/interfaces/sidenav.interface';
import { IUser, IUserRecord } from '../../shared-module/interfaces/user.interface';

// our actions
import { UserActions } from './../../shared-module/reducers/user.actions';

@Component({
  selector: 'app-nav-module',
  templateUrl: './nav-module.component.html',
  styleUrls: ['./nav-module.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NavComponent implements OnInit, OnDestroy, AfterViewInit {
  private config: IConfig;
  private sidenav: ISidenav;
  private configSub: Subscription;
  public sidenavRightSub: Subscription;
  private user: IUser;
  private userSub: Subscription;
  public isSidenavRightVisibleSub: Subscription;

  @ViewChild('end') end: MdSidenav;

  constructor(
    private store$: Store<IStore>
  ) {
    this.configSub =
      store$.select('config')
        .map((configR: IConfigRecord) => configR.toJS())
        .subscribe((config: IConfig) => {
          this.config = config;
        });

    this.sidenavRightSub =
      store$.select('sidenavRight')
        .map((sidenavR: ISidenavRecord) => sidenavR.toJS())
        .subscribe((sidenav: ISidenav) => {
          this.sidenav = sidenav;
        });

    this.userSub =
      store$.select('user')
        .map((userR: IUserRecord) => userR.toJS())
        .subscribe((user: IUser) => {
          this.user = user;
        });
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.isSidenavRightVisibleSub =
      this.store$.select('sidenavRight')
        .map((sidenavR: ISidenavRecord) => sidenavR.get('isSidenavRightVisible'))
        .distinctUntilChanged()
        .map((isSidenavRightVisible: boolean) => {
          if (isSidenavRightVisible) {
            this.end.open();
          } else {
            this.end.close();
          }
        })
        .subscribe();
  }

  ngOnDestroy() {
    this.configSub.unsubscribe();
    this.sidenavRightSub.unsubscribe();
    this.userSub.unsubscribe();
    this.isSidenavRightVisibleSub.unsubscribe();
  }

  disconnectUser() {
    this.store$.dispatch({ type: UserActions.USR_IS_DISCONNECTING });
  }
}

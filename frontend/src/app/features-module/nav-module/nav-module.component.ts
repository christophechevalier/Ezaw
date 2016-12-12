// angular modules
import { Component, ViewEncapsulation, ChangeDetectionStrategy, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { MdSidenav } from '@angular/material';

// rxjs
import { Subscription, Observable } from 'rxjs';

// ngrx - store
import { Store } from '@ngrx/store';

// our reducers
import { USR_IS_DISCONNECTING } from '../../shared-module/reducers/user.reducer';

// our interfaces
import { IStore } from '../../shared-module/interfaces/store.interface';
import { IConfig, IConfigRecord } from '../../shared-module/interfaces/config.interface';
import { IUser, IUserRecord } from '../../shared-module/interfaces/user.interface';

// our actions
import { ConfigActions } from '../../shared-module/reducers/config.actions';


@Component({
  selector: 'app-nav-module',
  templateUrl: './nav-module.component.html',
  styleUrls: ['./nav-module.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NavComponent implements OnInit, OnDestroy, AfterViewInit {
  private config: IConfig;
  private configSub: Subscription;
  private user: IUser;
  private userSub: Subscription;
  public isSidenavVisibleSub: Subscription;

  @ViewChild('start') start: MdSidenav;
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

    this.userSub =
      store$.select('user')
        .map((userR: IUserRecord) => userR.toJS())
        .subscribe((user: IUser) => {
          this.user = user;
        });
  }

  ngOnInit() {
    // temporary fix based on problems with property opened in Angular Material sidenav
    this.start._onTransitionEnd = function () {
      this._openPromise = null;
      this._closePromise = null;
    };
    this.end._onTransitionEnd = function () {
      this._openPromise = null;
      this._closePromise = null;
    };

    this.onResize();
  }

  ngAfterViewInit() {
    this.isSidenavVisibleSub =
      this.store$.select('config')
        .map((configR: IConfigRecord) => configR.get('isSidenavVisible'))
        .distinctUntilChanged()
        .map((isSidenavVisible: boolean) => {
          if (isSidenavVisible) {
            this.start.open();
            this.end.open();
          } else {
            this.start.close();
            this.end.close();
          }
        })
        .subscribe();
  }

  ngOnDestroy() {
    this.configSub.unsubscribe();
    this.userSub.unsubscribe();
    this.isSidenavVisibleSub.unsubscribe();
  }

  disconnectUser() {
    this.store$.dispatch({ type: USR_IS_DISCONNECTING });
  }

  toggleSidenav() {
    this.store$.dispatch({ type: ConfigActions.TOGGLE_SIDENAV });
  }

  toggleMarkersSidenav() {
    this.store$.dispatch({ type: ConfigActions.TOGGLE_SIDENAV });
  }

  closeSidenav() {
    this.store$.dispatch({ type: ConfigActions.CLOSE_SIDENAV });
  }

  closeSidenavIfMobile() {
    this.store$.dispatch({ type: ConfigActions.CLOSE_SIDENAV_IF_MOBILE });
  }

  openSidenav() {
    this.store$.dispatch({ type: ConfigActions.OPEN_SIDENAV });
  }

  onResize() {
    Observable.fromEvent(window, 'resize')
      .debounceTime(100)
      .subscribe((event: Event) => {
        if (event.target['innerWidth'] < 960) {
          this.store$.dispatch({ type: ConfigActions.SET_SIDENAV_MODE, payload: 'over' });
          this.closeSidenav();
        }
        else {
          this.store$.dispatch({ type: ConfigActions.SET_SIDENAV_MODE, payload: 'side' });
          this.openSidenav();
        }
      });
  }
}

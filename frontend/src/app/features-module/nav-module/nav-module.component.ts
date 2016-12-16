// angular modules
import { Component, ViewEncapsulation, ChangeDetectionStrategy, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { MdSidenav } from '@angular/material';

// rxjs
import { Subscription, Observable } from 'rxjs';

// ngrx - store
import { Store } from '@ngrx/store';

// our interfaces
import { IStore } from '../../shared-module/interfaces/store.interface';
import { IConfig, IConfigRecord } from '../../shared-module/interfaces/config.interface';
import { IUser, IUserRecord } from '../../shared-module/interfaces/user.interface';

// our actions
import { ConfigActions } from '../../shared-module/reducers/config.actions';
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
  private configSub: Subscription;
  private user: IUser;
  private userSub: Subscription;
  public isSidenavLeftVisibleSub: Subscription;
  public isSidenavRightVisibleSub: Subscription;

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
    this.onResize();
  }

  ngAfterViewInit() {
    this.isSidenavLeftVisibleSub =
      this.store$.select('config')
        .map((configR: IConfigRecord) => configR.get('isSidenavLeftVisible'))
        .distinctUntilChanged()
        .map((isSidenavLeftVisible: boolean) => {
          if (isSidenavLeftVisible) {
            this.start.open();
          } else {
            this.start.close();
          }
        })
        .subscribe();

    this.isSidenavRightVisibleSub =
      this.store$.select('config')
        .map((configR: IConfigRecord) => configR.get('isSidenavRightVisible'))
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
    this.userSub.unsubscribe();
    this.isSidenavLeftVisibleSub.unsubscribe();
    this.isSidenavRightVisibleSub.unsubscribe();
  }

  disconnectUser() {
    this.store$.dispatch({ type: UserActions.USR_IS_DISCONNECTING });
  }

  closeSidenavLeft() {
    this.store$.dispatch({ type: ConfigActions.CLOSE_SIDENAV_LEFT });
  }

  closeSidenavLeftIfMobile() {
    this.store$.dispatch({ type: ConfigActions.CLOSE_SIDENAV_LEFT_IF_MOBILE });
  }

  closeSidenavRightIfMobile() {
    this.store$.dispatch({ type: ConfigActions.CLOSE_SIDENAV_RIGHT_IF_MOBILE });
  }

  openSidenavLeft() {
    this.store$.dispatch({ type: ConfigActions.OPEN_SIDENAV_LEFT });
  }

  openSidenavRight() {
    this.store$.dispatch({ type: ConfigActions.OPEN_SIDENAV_RIGHT });
  }

  onResize() {
    Observable.fromEvent(window, 'resize')
      .debounceTime(100)
      .subscribe((event: Event) => {
        if (event.target['innerWidth'] < 960) {
          this.store$.dispatch({ type: ConfigActions.SET_SIDENAV_MODE, payload: 'over' });
          this.closeSidenavLeft();
          this.closeSidenavRightIfMobile();
        }
        else {
          this.store$.dispatch({ type: ConfigActions.SET_SIDENAV_MODE, payload: 'side' });
          this.openSidenavLeft();
          this.openSidenavRight();
        }
      });
  }
}

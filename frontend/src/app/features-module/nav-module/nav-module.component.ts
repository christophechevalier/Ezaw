import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

// rxjs
import { Observable } from 'rxjs';

// ngrx - store
import { Store } from '@ngrx/store';

// our states
import { AppState } from '../../app.state';
import { UserState } from '../../shared-module/reducers/user.state';
import { ConfigState } from '../../shared-module/reducers/config.state';

// our actions
import { USR_IS_DISCONNECTING } from '../../shared-module/reducers/user.reducer';

@Component({
  selector: 'app-nav-module',
  templateUrl: './nav-module.component.html',
  styleUrls: ['./nav-module.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NavComponent implements OnInit {
  private config$: Observable<ConfigState>;
  private user$: Observable<UserState>;

  constructor(private store: Store<AppState>) {
    this.user$ = <Observable<UserState>>store.select('user');
    this.config$ = <Observable<ConfigState>>store.select('config');
  }

  ngOnInit() {
  }

  disconnectUser() {
    this.store.dispatch({ type: USR_IS_DISCONNECTING });
  }
}

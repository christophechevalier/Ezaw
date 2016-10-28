import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

// ngrx - store
import { Store } from '@ngrx/store';

// translate
import { TranslateService } from 'ng2-translate';

// rxjs
import { Observable, Subscription } from 'rxjs';

// our states
import { AppState } from '../../app.state';
import { UserState } from '../../shared-module/reducers/user.state';
import { ConfigStateRecord } from '../../shared-module/reducers/config.state';

// our actions
import { USR_IS_DISCONNECTING } from '../../shared-module/reducers/user.reducer';
import { TOGGLE_THEME } from '../../shared-module/reducers/config.reducer';

@Component({
  selector: 'app-nav-module',
  templateUrl: './nav-module.component.html',
  styleUrls: ['./nav-module.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NavComponent implements OnInit {
  private isDarkTheme = true;
  private lang: string;

  private configUnsubscribe$: Subscription;

  private config$: Observable<ConfigStateRecord>;
  private user$: Observable<UserState>;

  constructor(private store: Store<AppState>, private translate: TranslateService) {
    this.user$ = <Observable<UserState>>store.select('user');
    this.config$ = <Observable<ConfigStateRecord>>store.select('config');
  }

  ngOnInit() {
    this.configUnsubscribe$ = this.config$
      .map(config => config.toJS())
      .map(config => {
        this.isDarkTheme = config.isDarkTheme;
      }).subscribe();
  }

  disconnectUser() {
    this.store.dispatch({ type: USR_IS_DISCONNECTING });
  }

  toggleTheme() {
    this.store.dispatch({ type: TOGGLE_THEME });
  }

  changeLanguageTo() {
    this.translate.use(this.lang);
  }
}

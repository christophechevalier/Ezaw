import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../app.state';
import { ConfigState } from '../reducers/config.state';
import { TOGGLE_THEME } from '../reducers/config.reducer';

@Component({
  selector: 'app-toggle-theme',
  templateUrl: './toggle-theme.component.html',
  styleUrls: ['./toggle-theme.component.scss']
})

export class ToggleThemeComponent {
  private config$: Observable<ConfigState>;

  constructor(private store: Store<AppState>) {
    this.config$ = <Observable<ConfigState>>store.select('config');
  }

  toggleTheme() {
    this.store.dispatch({ type: TOGGLE_THEME });
  }
}

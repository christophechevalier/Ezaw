import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';


// ngrx - store
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

// reducer
import { USR_IS_CONNECTING } from '../../../shared-module/reducers/user.reducer';

// our states
import { AppState } from '../../../app.state';
import { UserState } from '../../../shared-module/reducers/user.state';

// interface
import { IUser } from '../../../shared-module/interfaces/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  private user$: Observable<UserState>;

  constructor(private store: Store<AppState>) {
    this.user$ = <Observable<UserState>>store.select('user');
  }

  ngOnInit() {
  }

  connectUser(user: IUser) {
    this.store.dispatch({type: USR_IS_CONNECTING, payload: user});
  }
}

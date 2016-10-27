import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';

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

// material
import { MdInput } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  @ViewChild('usernameInput') usernameInput: MdInput;
  private user$: Observable<UserState>;

  constructor(private store: Store<AppState>) {
    this.user$ = <Observable<UserState>>store.select('user');
  }

  ngOnInit() {
    this.usernameInput.focus();
  }

  connectUser(user: IUser) {
    this.store.dispatch({type: USR_IS_CONNECTING, payload: user});
  }
}

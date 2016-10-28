<<<<<<< Updated upstream
import { Component, OnInit } from '@angular/core';
=======
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
>>>>>>> Stashed changes

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
<<<<<<< Updated upstream
=======
  private user$: Observable<UserState>;
>>>>>>> Stashed changes

  constructor() { }

  ngOnInit() {
  }

}

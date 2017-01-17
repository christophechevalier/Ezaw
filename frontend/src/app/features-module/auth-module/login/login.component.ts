// angular module
import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

// rxjs
import { Subscription } from 'rxjs';

// ngrx - store
import { Store } from '@ngrx/store';

// our actions
import { UserActions } from './../../../shared-module/reducers/user.actions';

// our interfaces
import { IStore } from '../../../shared-module/interfaces/store.interface';
import { IUser, IUserRecord } from '../../../shared-module/interfaces/user.interface';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit, OnDestroy {
  private user: IUser;
  private userSub: Subscription;

  public formAuth: FormGroup;
  public submitted: boolean;
  public active = true;

  formErrors = {
    'username': '',
    'password': ''
  };

  validationMessages = {
    'username': {
      'required': 'Required !'
    },
    'password': {
      'required': 'Required !'
    }
  };

  constructor(private store$: Store<IStore>, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) {
    this.userSub =
      store$.select('user')
        .map((userR: IUserRecord) => userR.toJS())
        .subscribe(user => {
          this.user = user;
          if (this.user.isConnected) {
            this.route.params.subscribe(params => {
              this.router.navigate(['/nav/navigation']);
            });
          }
        });
  }

  ngOnInit() {
    this.userSub =
      this.route.params.subscribe(params => {
        this.router.navigate(['/auth/login']);
      });

    if (typeof this.user === 'undefined') {
      this.user = {
        username: 'null',
        password: 'null',
        email: 'null',
        isRegistering: false,
        isRegistered: false,
        isConnecting: false,
        isDisconnecting: true,
        isConnected: false,
        connectionFailed: false,
        registerationFailed: false
      };
    }

    this.createformAuth();
  }

  createformAuth() {
    this.formAuth = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.formAuth.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  connectUser(user: IUser, isValid: boolean) {
    this.active = false;
    if (this.formAuth.valid) {
      this.submitted = true;
      this.store$.dispatch({ type: UserActions.USR_IS_CONNECTING, payload: user });
    } else {
      this.store$.dispatch({ type: UserActions.USR_CONNECTION_FAILED });
    }
  }

  onValueChanged(data?: any) {
    const form = this.formAuth;
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }
}

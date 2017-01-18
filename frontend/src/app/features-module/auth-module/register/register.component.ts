// angular module
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  private user: IUser;
  private userSub: Subscription;

  public formRegister: FormGroup;
  public submitted: boolean;
  public active = true;

  formErrors = {
    'username': '',
    'email': '',
    'password': '',
    'cfpassword': ''
  };

  validationMessages = {
    'username': {
      'required': 'Required !',
    },
    'email': {
      'required': 'Required !',
      'pattern': 'Invalid Email adress !'
    },
    'password': {
      'required': 'Required !',
      'validateEqual': 'Not equal'
    },
    'cfpassword': {
      'required': 'Required !',
      'validateEqual': 'Not equal'
    }
  };

  constructor(private store$: Store<IStore>, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) {
    this.userSub =
      store$.select('user')
        .map((userR: IUserRecord) => userR.toJS())
        .subscribe(user => {
          this.user = user;
          if (this.user.isRegistered) {
            this.route.params.subscribe(params => {
              this.router.navigate(['/auth/login']);
            });
          }
        });
  }

  ngOnInit() {
    this.userSub =
      this.route.params.subscribe(params => {
        this.router.navigate(['/auth/register']);
      });

    if (typeof this.user === 'undefined') {
      this.user = {
        username: 'null',
        password: 'null',
        cfpassword: 'null',
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

    this.createformRegister();
  }

  createformRegister() {
    this.formRegister = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.compose(
        [
          Validators.required,
          Validators.pattern('[a-z0-9!#$%&*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?')
        ]
      )],
      password: ['', Validators.required],
      cfpassword: ['', Validators.required]
    });

    this.formRegister.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  registerUser(user: IUser, isValid: boolean) {
    this.active = false;
    if (this.formRegister.valid) {
      this.submitted = true;
      this.store$.dispatch({ type: UserActions.USR_IS_REGISTERING, payload: user });
    } else {
      this.store$.dispatch({ type: UserActions.USR_REGISTERATION_FAILED });
    }
  }

  reset() {
    this.formRegister.reset();
  }

  onValueChanged(data?: any) {
    const form = this.formRegister;
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


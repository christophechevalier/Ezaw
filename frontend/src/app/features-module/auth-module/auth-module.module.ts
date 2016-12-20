// angular modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// our modules
import { SharedModule } from '../../shared-module/shared-module.module';
import { AuthRoutingModule } from './auth-module-routing.module';

// our components
import { AuthComponent } from './auth-module.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const AUTH_COMPONENTS = [
  AuthComponent,
  LoginComponent,
  RegisterComponent
];

@NgModule({
  imports: [
    SharedModule,
    AuthRoutingModule,
    RouterModule
  ],
  declarations: [
    ...AUTH_COMPONENTS
  ],
  exports: [
    ...AUTH_COMPONENTS
  ]
})

export class AuthModule { }

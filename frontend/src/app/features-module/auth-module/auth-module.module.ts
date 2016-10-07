// angular modules
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth-module.component';

// our modules
import { SharedModule } from '../../shared-module/shared-module.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  exports: [
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ]
})

export class AuthModule { }

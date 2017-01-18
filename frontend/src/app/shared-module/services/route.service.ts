// angular modules
import { Injectable } from '@angular/core';

@Injectable()
export class RouteService {
  public _urlBeforeRedirectToLogin = null;

  constructor() { }

    get urlBeforeRedirectToLogin() {
    return this._urlBeforeRedirectToLogin;
  }

  set urlBeforeRedirectToLogin(val) {
    this._urlBeforeRedirectToLogin = val;
  }
}

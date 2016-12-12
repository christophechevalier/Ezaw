// angular modules
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

// rxjs
import { Observable } from 'rxjs/Observable';

// our environment
import { environment } from '../../../environments/environment';

// our interfaces
import { IUser } from '../interfaces/user.interface';

@Injectable()
export class UserMockService {
/*  constructor() { }*/

  private userIsConnected: boolean = environment.alreadyConnected;
  public adminUser;

  constructor() {
    this.adminUser = {
      username: 'admin',
      name: 'Administrator'
    };
  }

  public connectUser(user: IUser) {
    let response: Response;

    // if user's already logged OR if user's information are wrong
    if (this.userIsConnected || (user.username !== 'admin' || user.password !== 'admin')) {
      response = <Response>{ ok: false };
    } else {
      this.userIsConnected = true;

      response = <Response>{
        ok: true,
        json: () => {
          return this.adminUser;
        }
      };
    }

    return Observable
      .of(response)
      .delay(environment.httpDelay);
  }

  public disconnectUser() {
    this.userIsConnected = false;

    let response: Response = <Response>{
      ok: true
    };

    return Observable
      .of(response)
      .delay(environment.httpDelay);
  }
}

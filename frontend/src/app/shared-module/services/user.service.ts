// angular modules
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

// rxjs
import { Observable } from 'rxjs/Observable';

// our environment
import { environment } from '../../../environments/environment';

// our interfaces
import { IUser } from '../interfaces/user.interface';

@Injectable()
export class UserService {
  // this is only for mock
  public adminUser;

  constructor(private http: Http) { }

  public connectUser(user: IUser): Observable<Response> {
    return this.http.post(`${environment.urlBackend}/user/session`, <any>user);
  }

  public disconnectUser(): Observable<Response> {
    return this.http.post(`${environment.urlBackend}/user/session`, { });
  }
}

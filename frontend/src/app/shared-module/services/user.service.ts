// angular modules
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// http interceptor
import { InterceptorService } from 'ng2-interceptors';

// our environment
import { environment } from '../../../environments/environment';

// our interfaces
import { IUser } from '../interfaces/user.interface';

@Injectable()
export class UserService {
  // this is only for mock
  public adminUser;

  constructor(private httpAngular: Http, private http: InterceptorService) { }

  // public connectUser(user: IUser): Observable<Response> {
  //   return this.http.post(`${environment.urlBackend}/user/session`, <any>user);
  // }

  public connectUser(user: IUser) {
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(user);
    return this.http.post('http://localhost/scriptsPhp/connexion_usr.php', body)
      .map(res => res.json())
      .map(res => {
        return res;
      }).toPromise();
  }

  public insertUser(user: IUser) {
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(user);
    return this.http.post('http://localhost/scriptsPhp/insertUser.php', body)
      .map(res => res.json())
      .map(res => {
        return res;
      }).toPromise();

  }

  public disconnectUser() {
    return 'salut';
  }

  // this method can be used by guards when we start the application
  // to check wether the user is logged or not
  // when we use this method from guard, we should use the real HTTP service
  // because otherwise it ends up in a loop, redirecting to /login and trying to test
  // if we can access this route but we have a 401 so we get redirected again and again
  // pass true as angularHttpService parameter to use the real angular http service FROM THE GUARD ONLY
  // otherwise to get getUserInformations just call the function without passing any argument
  public getUserInformations(angularHttpService = false) {
    let httpService: Http;
    httpService = this.http;
    if (angularHttpService) {
      httpService = this.httpAngular;
    }
    return httpService.get(`${environment.urlBackend}/user/session`);
  }
}

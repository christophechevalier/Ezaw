// angular modules
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// http interceptor
import { Interceptor, InterceptedResponse } from 'ng2-interceptors';

// our services
import { RouteService } from './route.service';

// environments for our app
import { environment } from '../../../environments/environment';

@Injectable()
export class HttpResponseInterceptor implements Interceptor {
  constructor(private router: Router, private routeService: RouteService) { }

  public interceptAfter(interceptedResponse: InterceptedResponse): InterceptedResponse {
    if (interceptedResponse.response.status === 401) {
      if (environment.debug) {
        console.debug('Http response code : 401 - Redirect to /auth/login');
      }

      // before we redirect to /auth/login, save the asked URL so we can route back the user once he's logged
      this.routeService.urlBeforeRedirectToLogin = (this.router.url === '/auth/login' ? null : this.router.url);

      this.router.navigate(['/auth/login']);
    }

    else if (interceptedResponse.response.status === 404) {
      if (environment.debug) {
        console.debug('Http response code : 404 - Redirect to /nav/navigation/404');
      }

      this.router.navigate(['/nav/navigation/404']);
    }

    // return either the modified response or nothing (it's like returning the original)
    return;
  }
}
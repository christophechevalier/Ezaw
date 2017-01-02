// angular modules
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

// rxjs
import { Observable } from 'rxjs';

// http interceptor
import { InterceptorService } from 'ng2-interceptors';

// our environment
import { environment } from '../../../environments/environment';

@Injectable()
export class NavigationService {

  constructor(private http: InterceptorService) { }

  // addPoliceMarker(name: string, idTypeMarker: string, idMarker: string) {
  //   return this.http.post(`${environment.urlBackend}/markers${idMarker}/type/${idTypeMarker}`, {name});
  // }

  // removePoliceMarker(idMarker: string, idTypeMarker: string, idControlPolice: string) {
  //   return this.http.delete(`${environment.urlBackend}/markers/${idMarker}/type/${idTypeMarker}/control/${idControlPolice}`);
  // }

  getDetails(idMarker: string, TypeMarker: string) {
    return this.http.get(`${environment.urlBackend}/markers/${idMarker}/type/${TypeMarker}`);
  }

  // getDetailsWarning(idMarker: string, TypeMarker: string, ControlWarning: string) {
  //   return this.http.get(`${environment.urlBackend}/markers/${idMarker}/type/${TypeMarker}/control/${ControlWarning}`);
  // }

  // getDetailsTrafficJam(idMarker: string, TypeMarker: string, ControlTrafficJam: string) {
  //   return this.http.get(`${environment.urlBackend}/markers/${idMarker}/type/${TypeMarker}/control/${ControlTrafficJam}`);
  // }

  // getDetailsAccident(idMarker: string, TypeMarker: string, ControlAccident: string) {
  //   return this.http.get(`${environment.urlBackend}/markers/${idMarker}/type/${TypeMarker}/control/${ControlAccident}`);
  // }
}

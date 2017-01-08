// angular modules
import { Injectable } from '@angular/core';
import { Response,Headers,RequestOptions } from '@angular/http';

// rxjs
import { Observable } from 'rxjs';

// http interceptor
import { InterceptorService } from 'ng2-interceptors';

// our environment
import { environment } from '../../../environments/environment';

//helpers 
import {getCurrentLocation } from './../helpers/helper';

//interface 
import {Sendlocation} from '../interfaces/navigation.interface'

@Injectable()
export class NavigationService {

  public locationNeeded : Sendlocation = { lat : 0 , lng : 0 };

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

  getNearByMarkers(lat : number, lng : number){

    this.locationNeeded.lat = lat
    this.locationNeeded.lng = lng

    console.log(this.locationNeeded);

    console.log("navService");
    console.log(lat+ ": " + lng);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(this.locationNeeded);
    console.log("the body :" + body);
    return this.http.post('http://localhost/ezawphp/getNearByAlert.php', body)
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

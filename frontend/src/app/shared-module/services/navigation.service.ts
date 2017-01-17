// angular modules
import { Injectable } from '@angular/core';
// import { Response, Headers, RequestOptions } from '@angular/http';

// http interceptor
import { InterceptorService } from 'ng2-interceptors';

// our environment
import { environment } from '../../../environments/environment';

// interface
import { Sendlocation } from '../interfaces/navigation.interface';

@Injectable()
export class NavigationService {

  public locationNeeded: Sendlocation = { lat: 0, lng: 0 };

  constructor(private http: InterceptorService) { }

  getDetails(idMarker: string, TypeMarker: string) {
    return this.http.get(`${environment.urlBackend}/markers/${idMarker}/type/${TypeMarker}`);
  }

  getNearByMarkers(lat: number, lng: number) {
    this.locationNeeded.lat = lat;
    this.locationNeeded.lng = lng;
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(this.locationNeeded);
    return this.http.post('http://localhost/scriptsPhp/getNearByAlert.php', body)
      .map(res => res.json())
      .map(res => {
        return res;
      }).toPromise();
  }
}

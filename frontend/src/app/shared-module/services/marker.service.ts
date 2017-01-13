// angular modules
import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';

// our interfaces
import { ETypeMarkers } from './../../shared-module/interfaces/navigation.interface';

// http interceptor
import { InterceptorService } from 'ng2-interceptors';

// interface
import { Sendlocation } from '../interfaces/navigation.interface';

@Injectable()
export class MarkerService {

  public locationNeeded: Sendlocation = { lat: 0, lng: 0, type: null };

  constructor(private http: InterceptorService) { }

  // Get the icons markers of sidenav markers
  getMarkers() {
    console.log('Getting markers for sidenav right');
    return this.http.get('../../../mocks-json/markers.json')
      .map((response: Response) => <Array<{ title: string, icon: string, markerType: string }>>response.json().dataType)
      .map((r) => {
        let a = r.map(obj => {
          obj.markerType = ETypeMarkers[obj.markerType];
          return obj;
        });
        return a;
      });
  }

  // Add marker
  addMarker(lat: number, lng: number, type: ETypeMarkers) {
    this.locationNeeded.lat = lat;
    this.locationNeeded.lng = lng;
    this.locationNeeded.type = type;
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(this.locationNeeded);
    // console.log('The body :' + body);
    return this.http.post('http://localhost/scriptsPhp/addAlert.php', body)
      .map(res => res.json())
      .map(res => {
        return res;
      }).toPromise();
  }
}

// angular modules
import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';

// rxjs
import { Observable } from 'rxjs';

// our interfaces
import { IStore } from './../../shared-module/interfaces/store.interface';
import {
  IMarker,
  IMarkers,
  INavigationList,
  ETypeMarkers,
  EControls,
  EControlPolices,
  EControlAccidents,
  EControlTrafficJams,
  EControlWarnings,
  EWarnings,
  EControlFavorites,
  EOnTheRoadCauses,
  ESideRoadCauses,
  EWeatherCauses
} from './../../shared-module/interfaces/navigation.interface';

// http interceptor
import { InterceptorService } from 'ng2-interceptors';

// our environment
import { environment } from './../../../environments/environment';

// our helpers
import { generateUuidV4 } from './../../shared-module/helpers/helper';

// description of markers buttons
import { Marker } from './../../features-module/nav-module/marker-module/marker/marker';

// generate marker
import { generateMarker } from './../helpers/helper';

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
        })
        return a;
      });
  }

  addMarker(lat: number, lng: number, type: ETypeMarkers) {
    this.locationNeeded.lat = lat
    this.locationNeeded.lng = lng
    this.locationNeeded.type = type
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(this.locationNeeded);
    console.log("the body :" + body);
    return this.http.post('http://localhost/ezawphp/addAlert.php', body)
      .map(res => res.json())
      .map(res => {
        return res
      }).toPromise();
    //   .map(res => res.json())
    //   .subscribe(res => console.log(res));  
  }
}

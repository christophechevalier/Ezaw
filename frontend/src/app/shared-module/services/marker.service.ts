// angular modules
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

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

@Injectable()
export class MarkerService {

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
}

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Marker } from '../../features-module/nav-module/marker-module/marker/marker';

// rxjs
import 'rxjs/add/operator/map';

@Injectable()
export class MarkerService {

  constructor(private http: Http) { }

  getMarkers() {
    return this.http.get('app/shared-module/mocks-json/markers.json')
      .map((response: Response) => <Marker[]>response.json().data);
  }
}

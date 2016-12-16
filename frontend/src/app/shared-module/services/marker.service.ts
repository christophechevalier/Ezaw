// angular modules
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

// rxjs
import { Observable } from 'rxjs';

// http interceptor
import { InterceptorService } from 'ng2-interceptors';

// our environment
import { environment } from '../../../environments/environment';

import { Marker } from '../../features-module/nav-module/marker-module/marker/marker';

@Injectable()
export class MarkerService {

  constructor(private http: InterceptorService) { }

  getMarkers() {
    return this.http.get('../../../mocks-json/markers.json')
      .map((response: Response) => <Marker[]>response.json().data);
  }
}

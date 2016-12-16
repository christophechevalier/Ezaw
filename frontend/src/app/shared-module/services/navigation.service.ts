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
export class MarkerService {

  constructor(private http: InterceptorService) { }

  addPoliceMarker(name: string, idTypeMarker: string, idMarker: string) {
    return this.http.post(`${environment.urlBackend}/markers${idMarker}/type/${idTypeMarker}`, {name});
  }

  removePoliceMarker(idMarker: string, idTypeMarker: string, idControlPolice: string) {
    return this.http.delete(`${environment.urlBackend}/markers/${idMarker}/type/${idTypeMarker}/control/${idControlPolice}`);
  }

  getDetailsPolice(idMarker: string, idTypeMarker: string, idControlPolice: string) {
    return this.http.get(`${environment.urlBackend}/markers/${idMarker}/type/${idTypeMarker}/control/${idControlPolice}`);
  }
}

// angular modules
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

// rxjs
import { Observable } from 'rxjs/Observable';

// our environment
import { environment } from '../../../environments/environment';

// our helpers
import { generateUuidV4 } from '../helpers/helper';

// our interfaces
import { IStore } from '../interfaces/store.interface';
import { IMarker, ETypeMarkers } from '../interfaces/navigation.interface';

@Injectable()
export class NavigationMockService {

  constructor() { }

}

// angular module
import { Component } from '@angular/core';

// ngrx - store
import { Store } from '@ngrx/store';

// our actions
import { ConfigActions } from '../../../../shared-module/reducers/config.actions';

// interfaces
import { IStore } from '../../../../shared-module/interfaces/store.interface';

import { Marker } from './marker';

// service
import { MarkerService } from '../../../../shared-module/services/marker.service';

@Component({
  selector: 'app-marker',
  templateUrl: './marker.component.html',
  styleUrls: ['./marker.component.scss']
})

export class MarkerComponent {

  markers: Marker[];

  constructor(
    private store$: Store<IStore>,
    private markerService: MarkerService
  ) { }

  closeSidenavIfMobile() {
    this.store$.dispatch({ type: ConfigActions.CLOSE_SIDENAV_IF_MOBILE });
  }

  ngOnInit() {
    this.markerService.getMarkers()
      .subscribe(markers => this.markers = markers);
  }

  selectedMarker: Marker; // = this.markers[0];

  isSelected(m: Marker) {
    return this.selectedMarker === m;
  }

  selectIt(m: Marker) {
    this.selectedMarker = m;
  }

}

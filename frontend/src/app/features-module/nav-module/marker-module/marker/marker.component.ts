// angular module
import { Component, OnInit } from '@angular/core';

// ngrx - store
import { Store } from '@ngrx/store';

// our actions
import { ConfigActions } from '../../../../shared-module/reducers/config.actions';

// interfaces
import { IStore } from '../../../../shared-module/interfaces/store.interface';
import { IMarker } from './../../../../shared-module/interfaces/navigation.interface';

// description of markers buttons
import { Marker } from './marker';

// service
import { MarkerService } from '../../../../shared-module/services/marker.service';

@Component({
  selector: 'app-marker',
  templateUrl: './marker.component.html',
  styleUrls: ['./marker.component.scss']
})

export class MarkerComponent implements OnInit {
  // public listMarkers: string;
  public markers: Marker[];
  // public markers: IMarker[] = [];

  constructor(
    private store$: Store<IStore>,
    private markerService: MarkerService
  ) { }

  closeSidenavRightIfMobile() {
    this.store$.dispatch({ type: ConfigActions.CLOSE_SIDENAV_RIGHT_IF_MOBILE });
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

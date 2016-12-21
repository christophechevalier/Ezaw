// angular module
import { Component, OnInit } from '@angular/core';

// ngrx - store
import { Store } from '@ngrx/store';

// our actions
import { ConfigActions } from '../../../../shared-module/reducers/config.actions';

// interfaces
import { IStore } from '../../../../shared-module/interfaces/store.interface';
import {
  IMarker,
  IMarkers,
  INavigationRecord,
  ETypeMarkers,
  EControls,
  EWarnings,
  EControlPolices,
  EControlAccidents,
  EControlTrafficJams,
  EControlWarnings,
  EControlFavorites,
  EOnTheRoadCauses,
  ESideRoadCauses,
  EWeatherCauses
} from './../../../../shared-module/interfaces/navigation.interface';

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
  public marker: IMarker;
  public currentPosLat: number;
  public currentPosLng: number;
  public listMarkers: Marker[];

  constructor(
    private store$: Store<IStore>,
    private markerService: MarkerService
  ) { }

  closeSidenavRightIfMobile() {
    this.store$.dispatch({ type: ConfigActions.CLOSE_SIDENAV_RIGHT_IF_MOBILE });
  }

  ngOnInit() {
    this.markerService.getMarkers()
      .subscribe(listMarkers => this.listMarkers = listMarkers);
  }

  selectedMarker: Marker; // = this.markers[0];

  isSelected(mk: Marker) {
    return this.selectedMarker === mk;
  }

  selectIt(mk: Marker) {
    this.selectedMarker = mk;
    this.markerService.addMarker(mk.markerType, this.currentPosLat, this.currentPosLng);
    console.log('Marker : ', mk)
  }
}

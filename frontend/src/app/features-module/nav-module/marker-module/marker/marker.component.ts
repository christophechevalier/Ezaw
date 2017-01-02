// angular module
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// nrgx
import { Store } from '@ngrx/store';

// immutable
import { List } from 'immutable';

// rxjs
import { Subscription } from 'rxjs';

// our actions
import { ConfigActions } from '../../../../shared-module/reducers/config.actions';
import { NavigationActions } from '../../../../shared-module/reducers/navigation.actions';

// interfaces
import { IStore } from '../../../../shared-module/interfaces/store.interface';
import {
  IMarker,
  IMarkers,
  INavigationList,
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

export class MarkerComponent implements OnInit, OnDestroy {
  public listMarkers: Marker[];
  private markerSub: Subscription;
  public markers: IMarker[] = [];

  constructor(
    private store$: Store<IStore>,
    private router: Router,
    private route: ActivatedRoute,
    private markerService: MarkerService
  ) {
    this.markerSub =
      store$.select('navigation')
        .map((navigationR: INavigationList) => navigationR.toJS())
        .subscribe(navigation => {
          this.markers = navigation;
        });
  }

  closeSidenavRightIfMobile() {
    this.store$.dispatch({ type: ConfigActions.CLOSE_SIDENAV_RIGHT_IF_MOBILE });
  }

  ngOnInit() {
    this.markerSub =
      this.route.params.subscribe(params => {

      });

    this.markerService.getMarkers()
      .subscribe(listMarkers => {
        this.listMarkers = listMarkers;
      });
  }

  ngOnDestroy() {
    this.markerSub.unsubscribe();
  }

  selectedMarker: Marker; // = this.markers[0];

  isSelected(m: Marker) {
    return this.selectedMarker === m;
  }

  selectIt(m: Marker) {
    this.selectedMarker = m;
    this.store$.dispatch({ type: NavigationActions.FETCH_MARKER, payload: m.markerType });
  }

  removeIt(m: Marker) {
     this.store$.dispatch({ type: NavigationActions.REMOVE_MARKER });
  }
}

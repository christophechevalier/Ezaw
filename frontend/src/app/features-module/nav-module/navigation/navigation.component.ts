// angular module
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// nrgx
import { Store } from '@ngrx/store';

// rxjs
import { Subscription } from 'rxjs';

// our interfaces
import { IStore } from './../../../shared-module/interfaces/store.interface';
import {
  IMarker,
  IMarkers,
  INavigationRecord,
  ETypeMarkers,
  EControlPolices,
  EControlAccidents,
  EControlTrafficJams,
  EControlWarnings,
  EControlFavorites,
  EOnTheRoadCauses,
  ESideRoadCauses,
  EWeatherCauses
 } from './../../../shared-module/interfaces/navigation.interface';

// Google Map
import { MouseEvent } from 'angular2-google-maps/core';

// our helpers
import { generateUuidV4 } from '../../../shared-module/helpers/helper';

// service
import { MarkerService } from './../../../shared-module/services/marker.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit, OnDestroy {
  public marker: IMarker;
  private markerSub: Subscription;

  public mkType: ETypeMarkers;
  public currentPosLat: number;
  public currentPosLng: number;
  public markers: IMarker[] = [];

  // public markers: IMarkers[];

  public zoom: number = 12;
  public showMap = true;
  public centerLat: number = 43.548317;
  public centerLng: number = 1.502877;

  constructor(
    private store$: Store<IStore>,
    private router: Router,
    private route: ActivatedRoute,
    private markerService: MarkerService
  ) {
    this.markerSub =
      store$.select('marker')
        .map((navigationR: INavigationRecord) => navigationR)
        .subscribe((marker: IMarker) => this.marker = marker);
  }

  ngOnInit() {
    this.markerSub =
      this.route.params.subscribe(params => {

      });

    this.markerService.currentUserPosition(this.mkType, this.currentPosLat, this.currentPosLng);
  }

  ngOnDestroy() {
    this.markerSub.unsubscribe();
  }

  markerDragEnd($event: MouseEvent) {
    console.log('Position of the marker updated after drag: ' + '\n', $event);
  }

  clickedMarker(m: IMarker) {
    console.log(`Clicked on the marker: ${ m }`);
  }
}

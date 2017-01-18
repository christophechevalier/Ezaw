// angular module
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// nrgx
import { Store } from '@ngrx/store';

// rxjs
import { Subscription,Observable } from 'rxjs';

// our interfaces
import { IStore } from './../../../shared-module/interfaces/store.interface';
import { IMarker, INavigationList } from './../../../shared-module/interfaces/navigation.interface';

// our actions
import { NavigationActions } from '../../../shared-module/reducers/navigation.actions';

// Google Map
import { MouseEvent } from 'angular2-google-maps/core';

// service
import { MarkerService } from './../../../shared-module/services/marker.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styles: [`
    .sebm-google-map-container {
      min-height: 100vh;
      height: 100vh;
      width: 100%;
    }
    .custom-map {
      overflow: hidden;
      cursor: wait;
      height: 100%;
      width: 100%;
      position: fixed;
      min-height: 100%;
      flex: 1 1 auto;
      bottom: 41px;
    }
    .icon-window-marker {
      width: 20px;
      height: 20px;
    }
  `]
})

export class NavigationComponent implements OnInit, OnDestroy {
  public marker: IMarker;
  private markerSub: Subscription;

  public lat: number;
  public lng: number;
  public currentPosLat: number;
  public currentPosLng: number;
  public markers: IMarker[] = [];

  public zoom: number = 8;
  public showMap = true;
  public centerLat: number = 43.55;
  public centerLng: number = 1.50;
  public lightAndDark = [
    {
      'elementType': 'geometry',
      'stylers': [
        {
          'hue': '#ff4400'
        },
        {
          'saturation': -68
        },
        {
          'lightness': -4
        },
        {
          'gamma': 0.72
        }
      ]
    },
    {
      'featureType': 'road',
      'elementType': 'labels.icon'
    },
    {
      'featureType': 'landscape.man_made',
      'elementType': 'geometry',
      'stylers': [
        {
          'hue': '#0077ff'
        },
        {
          'gamma': 3.1
        }
      ]
    },
    {
      'featureType': 'water',
      'stylers': [
        {
          'hue': '#00ccff'
        },
        {
          'gamma': 0.44
        },
        {
          'saturation': -33
        }
      ]
    },
    {
      'featureType': 'poi.park',
      'stylers': [
        {
          'hue': '#44ff00'
        },
        {
          'saturation': -23
        }
      ]
    },
    {
      'featureType': 'water',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'hue': '#007fff'
        },
        {
          'gamma': 0.77
        },
        {
          'saturation': 65
        },
        {
          'lightness': 99
        }
      ]
    },
    {
      'featureType': 'water',
      'elementType': 'labels.text.stroke',
      'stylers': [
        {
          'gamma': 0.11
        },
        {
          'weight': 5.6
        },
        {
          'saturation': 99
        },
        {
          'hue': '#0091ff'
        },
        {
          'lightness': -86
        }
      ]
    },
    {
      'featureType': 'transit.line',
      'elementType': 'geometry',
      'stylers': [
        {
          'lightness': -48
        },
        {
          'hue': '#ff5e00'
        },
        {
          'gamma': 1.2
        },
        {
          'saturation': -23
        }
      ]
    },
    {
      'featureType': 'transit',
      'elementType': 'labels.text.stroke',
      'stylers': [
        {
          'saturation': -64
        },
        {
          'hue': '#ff9100'
        },
        {
          'lightness': 16
        },
        {
          'gamma': 0.47
        },
        {
          'weight': 2.7
        }
      ]
    }
  ];

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

  ngOnInit() {
    this.markerSub =
      this.route.params.subscribe(params => {
      });

     let timer = Observable.timer(2000,4000);
     timer.subscribe(t=> {
     this.getNearByMarkers(t);
     });
    //this.getNearByMarkers();
  }

  ngOnDestroy() {
    this.markerSub.unsubscribe();
  }

  markerDragEnd($event: MouseEvent) {

  }

  clickedMarker(m: IMarker) {
  }

  dislikedMarker(mID) {
    this.store$.dispatch({ type: NavigationActions.DISLIKE_MARKER, payload: mID });
  }

  likeMarker(mId) {
    this.store$.dispatch({ type: NavigationActions.LIKE_MARKER, payload: mId });
  }

  getNearByMarkers(t) {
    this.store$.dispatch({ type: NavigationActions.GET_MARKERS });
  }
}

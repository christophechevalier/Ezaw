// angular module
import { Component, OnInit, OnDestroy } from '@angular/core';

// nrgx
import { Store } from '@ngrx/store';

// rxjs
import { Subscription } from 'rxjs';

// our interfaces
import { IStore } from './../../../shared-module/interfaces/store.interface';
import { IMarker, INavigationRecord } from './../../../shared-module/interfaces/navigation.interface';

// Google Map
import { MouseEvent } from 'angular2-google-maps/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit, OnDestroy {
  public marker: IMarker;
  private markerSub: Subscription;

  public currentPosLat: number;
  public currentPosLng: number;
  public markers: IMarker[] = [];

  zoom: number = 12;
  showMap = true;
  centerLat: number = 43.548317;
  centerLng: number = 1.502877;

  constructor(private store$: Store<IStore>) {
    // this.markerSub =
    //   store$.select('marker')
    //   .map((navigationR: INavigationRecord) => navigationR.toJS())
    //   .subscribe((marker: IMarker) => this.marker = marker);
  }

  ngOnInit() {
    this.initGeoLocation();
  }

  ngOnDestroy() {
    this.markerSub.unsubscribe();
  }

  mapClicked($event: MouseEvent) {
    // this.markers.push(<IMarker>{
    //   id: 'A000000001',
    //   label: `New Marker`,
    //   coordinates: {
    //     lat: $event.coords.lat,
    //     lng: $event.coords.lng
    //   },
    //   draggable: true
    // });
  }

  markerDragEnd($event: MouseEvent) {
    console.log('Position of the marker updated after drag: ' + '\n', $event);
  }

  clickedMarker(m: IMarker) {
    console.log(`Clicked on the marker: ${ m }`)
  }

  // getCurrentPosition with refresh position in real time
  initGeoLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(position => {
        this.currentPosLat = position.coords.latitude;
        this.currentPosLng = position.coords.longitude;

        // this.markers.push(<IMarker>{
        //   id: '16A04B1987',
        //   label: 'User Position Marker',
        //   coordinates: {
        //     lat: position.coords.latitude,
        //     lng: position.coords.longitude
        //   },
        //   draggable: false
        // });
        console.log('User Current Position: ' + '\n' + '- Lat: ' + this.currentPosLat + '\n' + '- Lng: ' + this.currentPosLng);
      });
    }
  }
}

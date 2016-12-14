// angular module
import { Component, OnInit, OnChanges, NgZone, ChangeDetectorRef } from '@angular/core';

// Interfaces
import { IMarker } from '../../../shared-module/interfaces/marker.interface';
// import { ILocation } from '../../../shared-module/interfaces/location.interface';

// Google Map
import { MouseEvent, MarkerManager, SebmGoogleMap, AgmCoreModule } from 'angular2-google-maps/core';

import { Observable } from 'rxjs/Observable';


import { Http } from '@angular/http';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
  //  public markers;

  public markers: IMarker[] = [];
  public tempMarkers: IMarker[] = [];

  private data: Observable<any>;

  zoom: number = 15;
  lat: number = 43.548317;
  lng: number = 1.502877;
  showMap = true;



  constructor(private http: Http, private ref: ChangeDetectorRef) {

    //this.getData();

  }

  ngOnInit() {
    this.getData();
    //setInterval(() => { this.getData(); this.clearMarkers() },1000);
    //setInterval(() => { this.clearMarkers() },1000);


  }
  //this.getData();
  //let timer = Observable.timer(2000,1000);
  //timer.subscribe(t=> {
  //this.getData(t);
  //});

  clickedMarker(index: number) {
    console.log("clikedMarker");
    //this.markers.splice(index, 1);

  }

  mapClicked($event: MouseEvent, h) {
    console.log('mapClicked')
    console.log(this.markers)
    //    this.markers.push(<IMarker>{
    //      lat: $event.coords.lat,
    //      lng: $event.coords.lng
    //    });
    //  this.questions.push({lat : $event.coords.lat, lng: $event.coords.lng })
  }
  getData() {
    return this.http.get('http://localhost/ezawphp/getalert.php')
      .map(res => res.json())
      .subscribe(res => {
        for (var i = 0; i < res.length; i++) {
          this.markers.push(<IMarker>{
            lat: parseFloat(res[i]['lat']),
            lng: parseFloat(res[i]['lng'])
          });
        }
        this.ref.markForCheck();
      });
  }

  getTempData() {
    return this.http.get('http://localhost/ezawphp/getalert.php')
      .map(res => res.json())
      .subscribe(res => {
        for (var i = 0; i < res.length; i++) {
          this.tempMarkers.push(<IMarker>{
            lat: parseFloat(res[i]['lat']),
            lng: parseFloat(res[i]['lng'])
          });
        }
        this.ref.markForCheck();
      });
  }

  updateCurrentMarkerList() {

    for (var i = 0; i < this.tempMarkers.length; i++) {
      for (var e = 0; i < this.markers.length; e++) {

        if (this.tempMarkers[i]['lat'] == this.markers[e]['lat'] && this.tempMarkers[i]['lng'] == this.markers[e]['lng']) {
          console.log('same');
        } else {
          console.log('add')
        }
      }
    }
  }
}



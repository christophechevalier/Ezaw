// angular module
import { Component } from '@angular/core';

// Interfaces
import { IMarker } from '../../../shared-module/interfaces/marker.interface';
// import { ILocation } from '../../../shared-module/interfaces/location.interface';

// Google Map
import { MouseEvent } from 'angular2-google-maps/core';
import {AngularFire,FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent {

  public markers: IMarker[] = [];

  zoom: number = 15;
  lat: number = 43.548317;
  lng: number = 1.502877;
  showMap = true;
  questions: FirebaseListObservable<any[]>;
  value: FirebaseObjectObservable<any>;

  constructor(af: AngularFire) { 


    this.questions = af.database.list('/markers');
    this.value = af.database.object('/value');
    const markers$ = af.database.list('/markers');

    markers$.subscribe(
      val => console.log(val)
    );

  }

  clickedMarker(index: number) {
    console.log("clikedMarker");
    this.markers.splice(index, 1);
  }

  mapClicked($event: MouseEvent, af: AngularFire) {
    console.log('mapClicked')
    this.markers.push(<IMarker>{
      lat: $event.coords.lat,
      lng: $event.coords.lng
    });
    console.log('AvantPush')

   this.questions.push({lat : $event.coords.lat, lng: $event.coords.lng })
  }

}


// angular module
import { Component, Input } from '@angular/core';

// marker sidenav
import { Marker } from '../marker/marker';

// our interfaces
import { IMarker } from './../../../../shared-module/interfaces/navigation.interface';
import { IMarkers } from './../../../../shared-module/interfaces/navigation.interface';

@Component({
  selector: 'app-marker-detail',
  templateUrl: './marker-detail.component.html',
  styleUrls: ['./marker-detail.component.scss']
})
export class MarkerDetailComponent {

  @Input() marker: Marker;

  markers: Marker[];

  constructor() { }
}

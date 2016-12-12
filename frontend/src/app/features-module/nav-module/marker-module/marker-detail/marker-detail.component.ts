// angular module
import { Component, Input } from '@angular/core';

import { Marker } from '../marker/marker';

@Component({
  selector: 'app-marker-detail',
  templateUrl: './marker-detail.component.html',
  styleUrls: ['./marker-detail.component.scss']
})
export class MarkerDetailComponent {

  message: string;
  @Input() marker: Marker;

  markers: Marker[];

  constructor() { }

  showMessage() {
    this.message = `The marker name is ${this.marker.name}`;
  }

}

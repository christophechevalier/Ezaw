import { Component, OnInit } from '@angular/core';

/*import { IMarker } from '../../../shared-module/interfaces/marker.interface';*/

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  lat: number = 43.548317;
  lng: number = 1.502877;

  constructor() { }

  ngOnInit() {
  }

}

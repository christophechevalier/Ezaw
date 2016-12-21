// interfaces
import {
  IMarker,
  IMarkers,
  INavigationRecord,
  ETypeMarkers,
} from './../../../../shared-module/interfaces/navigation.interface'

export class Marker {

  constructor(
    public id: string,
    public title: string,
    public icon: string,
    public markerType: ETypeMarkers
  ) { }
}

// interfaces
import { ETypeMarkers } from './../../../../shared-module/interfaces/navigation.interface'

export class Marker {

  constructor(
    public id: number,
    public title: string,
    public icon: string,
    public markerType: ETypeMarkers
    ) { }
}

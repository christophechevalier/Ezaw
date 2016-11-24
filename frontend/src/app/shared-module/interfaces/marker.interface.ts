// typed-record
import { TypedRecord } from 'typed-immutable-record';

export interface IMarker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

export interface IMarkerRecord extends TypedRecord<IMarkerRecord>, IMarker { };

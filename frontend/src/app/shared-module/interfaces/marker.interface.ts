// typed-record
import { TypedRecord } from 'typed-immutable-record';

export interface IMarker {
  id: number;
  name: string;
  title: string;
  lat: number;
  lng: number;
}

export interface IMarkerRecord extends TypedRecord<IMarkerRecord>, IMarker { };
